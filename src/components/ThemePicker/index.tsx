import CloseIcon from '@mui/icons-material/Close';
import { Button, Divider, IconButton, Popover, ToggleButton, ToggleButtonGroup, Tooltip } from '@mui/material';
import { createTheme, useTheme } from '@mui/system';
import { useEffect, useState } from 'react';
import { Input, InputSmall } from '../../styles/Input';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

import * as S from './styles';
import usePopover from '../../hooks/usePopover';
import { createDefaultThemePalette, createThemePalette, isHexLight } from '../../models/theme.model';
import useLocalStorage from '../../hooks/useLocalStorage';
import { Button as ButtonCustom } from '../../styles/Button';
import useApplyThemePalette from '../../hooks/useApplyThemePalette';
import { ThemePresets } from './Presets';

interface Theme {
	mode: 'light' | 'dark';
	colorPrimary: string;
	colorOnPrimary: string;
	colorSecondary: string;
	colorOnSecondary: string;
	colorBackground: string;
	colorOnBackground: string;
	colorButton: string;
}

interface Palette {
	mode: 'light' | 'dark',
	color: string
}

const primaryColors = [
	'#212121',
	'#70CF98',
	'#2E80F2',
	'#7F6CFC',
	'#FF6271',
	'#FE5F55',
	'#fafafa',
	'#FF94BD',
	'#6d4c41',
	'#EBCB86',
	'#A2D3C2',
	'#7E7F9A',
	'#66BDEA'
]

const backgroundColors: Palette[] = [
	{
		mode: 'dark',
		color: '#212121'
	},
	{
		mode: 'dark',
		color: '#1C2126'
	},
	{
		mode: 'dark',
		color: '#3E3D40'
	},
	{
		mode: 'dark',
		color: '#2E3440'
	},
	{
		mode: 'dark',
		color: '#455a64'
	},
	{
		mode: 'light',
		color: '#FCFDFD'
	},
	{
		mode: 'light',
		color: '#FFF2DF'
	},
	{
		mode: 'light',
		color: '#E0C9A6'
	},
	{
		mode: 'light',
		color: '#DAE2DF'
	},
	{
		mode: 'light',
		color: '#EFFAF2'
	},
	{
		mode: 'light',
		color: '#F1EDFC'
	},
	{
		mode: 'light',
		color: '#E5F9FD'
	},
	{
		mode: 'light',
		color: '#F4E1E3'
	},
]


export function ThemePicker({ close }: any) {
	// const [neutralColor, setNeutralColor] = useState('#212121');
	const [primary, setPrimary] = useState(getComputedStyle(document.documentElement).getPropertyValue('--color-on-background'));
	const [background, setBackground] = useState(getComputedStyle(document.documentElement).getPropertyValue('--color-background'));
	const [themePalette, saveThemePalette] = useLocalStorage('themePalette', createDefaultThemePalette())

	const [setTheme] = useApplyThemePalette();

	const onClose = () => {
		close();
	}

	// useEffect(() => {
	// 	const value = isHexLight(background);
	// 	if (value) {
	// 		setNeutralColor('#212121');
	// 	} else {
	// 		setNeutralColor('#f5f5f5');
	// 	}

	// }, [background])

	useEffect(() => {
		console.log("SUBSCRIPTION FOR THEME CHANGE")
		const palette = createThemePalette(primary, background)
		saveThemePalette(palette);
		setTheme(palette);
	}, [primary, background])

	const handleSetPrimary = (color: string) => {
		setPrimary(color);
	}

	const handleSetBackground = (color: string) => {
		setBackground(color)
	}

	const handleReset = () => {
		const theme = createDefaultThemePalette();
		setPrimary(theme.primary);
		setBackground(theme.background);
	}

	return (
		<S.Wrapper>
			<S.MenuHeader>
				<S.MenuTitle>Theme</S.MenuTitle>
				<IconButton onClick={onClose}>
					<CloseIcon style={{ fill: "var(--color-on-background)" }}></CloseIcon>
				</IconButton>
			</S.MenuHeader>
			<S.NeutralHeaders className="">Selected primary color</S.NeutralHeaders>
			<S.NeutralBackground>
				<S.Themes>
					{primaryColors.map((color) => <S.ColorPalette key={color} mainColor={color} onClick={() => handleSetPrimary(color)}></S.ColorPalette>)}
				</S.Themes>
				<ColorSelection originalColor={primary} onChange={handleSetPrimary}></ColorSelection>
			</S.NeutralBackground>

			<div className="my-4">
				<Divider ></Divider>
			</div>

			<S.NeutralHeaders className="">Selected background color</S.NeutralHeaders>
			<S.NeutralBackground>
				<S.Themes>
					{backgroundColors.map((palette) => <S.ColorPalette key={palette.color} mainColor={palette.color} onClick={() => handleSetBackground(palette.color)}></S.ColorPalette>)}
				</S.Themes>
				<ColorSelection originalColor={background} onChange={handleSetBackground}></ColorSelection>
			</S.NeutralBackground>

			<div className="my-4">
				<Divider ></Divider>
			</div>

			<S.NeutralHeaders>Curated themes</S.NeutralHeaders>

			<ThemePresets setPrimary={handleSetPrimary} setBackground={handleSetBackground}></ThemePresets>

			<div className="flex justify-start mt-8">
				<ButtonCustom className="flex items-center gap-1 rounded py-1 px-3 cursor-pointer" onClick={handleReset}>
					<RestartAltIcon></RestartAltIcon>
					<span>Reset to default</span>
				</ButtonCustom>
			</div>
		</S.Wrapper>
	)
}

function ColorSelection({ originalColor, onChange }: { originalColor: string, onChange: (color: string) => void }) {
	// console.log('ORIGINAL', originalColor)
	const [open, anchorEl, handlePopoverOpen, handlePopoverClose] = usePopover();
	const [color, setColor] = useState(originalColor)

	useEffect(() => {
		setColor(originalColor);
	}, [originalColor])

	const handleChangeComplete = (color: any) => {
		// console.log('complete', color);
	}

	const handlePickerChange = (color: any) => {
		// console.log('change', color);
		setColor(color.hex);
	}

	const handleRawChange = (event: any) => {
		setColor(event.target.value);
	}

	const handleOnSave = () => {
		onChange(color);
		handlePopoverClose();
	}


	return (
		<div className="flex gap-2 items-center w-fit">
			<S.ColorChip color={color} onClick={handlePopoverOpen}></S.ColorChip>
			<InputSmall className="w-24" readOnly={true} value={color} onChange={handleRawChange} onClick={handlePopoverOpen}></InputSmall>
			<Popover
				open={open}
				anchorEl={anchorEl}
				onClose={handlePopoverClose}
				transitionDuration={200}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'right',
				}}
			>
				<S.ColorPicker
					color={color}
					onChange={handlePickerChange}
					onChangeComplete={handleChangeComplete}
					presetColors={[]}
					disableAlpha={true}
				/>
				<div className="flex justify-center mt-2 mb-1">
					<Button onClick={handleOnSave} style={{ 'color': '#212121' }}>Save</Button>
				</div>
			</Popover>
		</div>
	)
}