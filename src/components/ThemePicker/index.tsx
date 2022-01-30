import CloseIcon from '@mui/icons-material/Close';
import { Button, IconButton, Popover, ToggleButton, ToggleButtonGroup, Tooltip } from '@mui/material';
import { useTheme } from '@mui/system';
import { useEffect, useState } from 'react';
import { Input, InputSmall } from '../../styles/Input';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

import * as S from './styles';
import usePopover from '../../hooks/usePopover';
import { createDefaultThemePalette, createThemePalette, isHexLight } from '../../models/theme.model';
import useLocalStorage from '../../hooks/useLocalStorage';
import { Button as ButtonCustom } from '../../styles/Button';
import useApplyThemePalette from '../../hooks/useApplyThemePalette';

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


const lightTheme: Theme = {
	mode: 'light',
	colorPrimary: '#212121',
	colorOnPrimary: '#fafafa',
	colorSecondary: '#474554',
	colorOnSecondary: '#212121',
	colorBackground: '#fafafa',
	colorOnBackground: '#212121',
	colorButton: '#616161'
}

const pinkTheme: Theme = {
	mode: 'light',
	colorPrimary: '#f06292',
	colorOnPrimary: '#212121',
	colorSecondary: '#e57373',
	colorOnSecondary: '#212121',
	colorBackground: '#ffcdd2',
	colorOnBackground: '#212121',
	colorButton: '#616161'
}

const darkTheme: Theme = {
	mode: 'dark',
	colorPrimary: '#fafafa',
	colorOnPrimary: '#212121',
	colorSecondary: '#9e9e9e',
	colorOnSecondary: '#212121',
	colorBackground: '#212121',
	colorOnBackground: '#ffffff',
	colorButton: '#eeeeee'
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
	const theme = useTheme();
	const [neutralColor, setNeutralColor] = useState('#212121');
	const [neutralText, setNeutralText] = useState('#212121');
	const [primary, setPrimary] = useState(getComputedStyle(document.documentElement).getPropertyValue('--color-on-background'));
	const [background, setBackground] = useState(getComputedStyle(document.documentElement).getPropertyValue('--color-background'));
	const [themePalette, setThemePalette] = useLocalStorage('themePalette', createDefaultThemePalette())
	const [setGlobalPalette] = useApplyThemePalette();

	const onClose = () => {
		close();
	}

	useEffect(() => {
		// console.log('background', background);
		const value = isHexLight(background);
		// console.log(value);
		if (value) {
			setNeutralColor('#616161');
			setNeutralText('#fafafa')
		} else {
			setNeutralColor('#f5f5f5');
			setNeutralText('#212121')
		}

	}, [background])

	useEffect(() => {
		const palette = createThemePalette(primary, background)
		setThemePalette(palette)
	}, [primary, background])


	// const setTheme = (setTheme: Theme) => {
	// 	console.log('setting theme', setTheme)
	// 	document.documentElement.style.setProperty('--color-primary', setTheme.colorPrimary);
	// 	document.documentElement.style.setProperty('--color-on-primary', setTheme.colorOnPrimary);
	// 	document.documentElement.style.setProperty('--color-secondary', setTheme.colorSecondary);
	// 	document.documentElement.style.setProperty('--color-on-secondary', setTheme.colorOnSecondary);
	// 	document.documentElement.style.setProperty('--color-background', setTheme.colorBackground);
	// 	document.documentElement.style.setProperty('--color-on-background', setTheme.colorOnBackground);
	// 	document.documentElement.style.setProperty('--color-button', setTheme.colorButton);

	// 	theme.palette.mode = setTheme.mode;
	// 	theme.palette.primary.main = setTheme.colorPrimary;
	// }


	const handleSetPrimary = (color: string) => {
		document.documentElement.style.setProperty('--color-on-background', color);
		document.documentElement.style.setProperty('--color-button', color);
		document.documentElement.style.setProperty('--color-primary', color);
		setPrimary(color);

		theme.palette.primary.main = color;
		if (isHexLight(color)) {
			document.documentElement.style.setProperty('--color-on-primary', '#212121');
		} else {
			document.documentElement.style.setProperty('--color-on-primary', '#f5f5f5');
		}
	}

	const handleSetBackground = (color: string) => {
		document.documentElement.style.setProperty('--color-background', color);
		setBackground(color)
		if (isHexLight(color)) {
			theme.palette.mode = 'light';
			document.documentElement.style.setProperty('--color-border', '#212121');
			document.documentElement.style.setProperty('--color-surface', '#212121');
			document.documentElement.style.setProperty('--color-on-surface', '#f5f5f5');
		} else {
			document.documentElement.style.setProperty('--color-border', '#f5f5f5');
			document.documentElement.style.setProperty('--color-surface', '#f5f5f5');
			document.documentElement.style.setProperty('--color-on-surface', '#212121');
			theme.palette.mode = 'dark';
		}
	}

	const handleReset = () => {
		const theme = createDefaultThemePalette();
		setGlobalPalette(theme);
		setPrimary(theme.primary);
		setBackground(theme.background);
		// handleSetPrimary(theme.primary);
		// handleSetBackground(theme.background);
	}

	return (
		<S.Wrapper>
			<S.MenuHeader>
				<S.MenuTitle>Theme</S.MenuTitle>
				<IconButton onClick={onClose}>
					<CloseIcon style={{ fill: "var(--color-on-background)" }}></CloseIcon>
				</IconButton>
			</S.MenuHeader>
			<S.NeutralHeaders className="" color={neutralColor}>Selected primary color</S.NeutralHeaders>
			<S.NeutralBackground color={neutralColor}>
				<S.Themes>
					{primaryColors.map((color) => <S.ColorPalette key={color} mainColor={color} onClick={() => handleSetPrimary(color)}></S.ColorPalette>)}
				</S.Themes>
				<ColorSelection originalColor={primary} onChange={handleSetPrimary}></ColorSelection>
			</S.NeutralBackground>

			<S.NeutralHeaders className="" color={neutralColor}>Selected background color</S.NeutralHeaders>
			<S.NeutralBackground color={neutralColor}>
				<S.Themes>
					{backgroundColors.map((palette) => <S.ColorPalette key={palette.color} mainColor={palette.color} onClick={() => handleSetBackground(palette.color)}></S.ColorPalette>)}
				</S.Themes>
				<ColorSelection originalColor={background} onChange={handleSetBackground}></ColorSelection>
			</S.NeutralBackground>


			<div className="flex justify-start">
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