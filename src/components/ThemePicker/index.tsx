import CloseIcon from '@mui/icons-material/Close';
import { Button, IconButton, Popover, ToggleButton, ToggleButtonGroup, Tooltip } from '@mui/material';
import { useTheme } from '@mui/system';
import { useEffect, useState } from 'react';
import { Input, InputSmall } from '../../styles/Input';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import * as S from './styles';
import usePopover from '../../hooks/usePopover';

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
const hexToRgb = (hex: any) => {
	// Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
	var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
	hex = hex.replace(shorthandRegex, function (m: any, r: any, g: any, b: any) {
		return r + r + g + g + b + b;
	});

	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result ? {
		r: parseInt(result[1], 16),
		g: parseInt(result[2], 16),
		b: parseInt(result[3], 16)
	} : null;
}

const isLightMode = (hex: any) => {
	const rgb = hexToRgb(hex);
	if (!rgb) return false;
	const { r, g, b } = rgb;

	// console.log(r * 0.299 + g * 0.587 + b * 0.114)
	return (r * 0.299 + g * 0.587 + b * 0.114) > 210
}

export function ThemePicker({ close }: any) {
	const theme = useTheme();
	const [neutralColor, setNeutralColor] = useState('#212121');
	const [neutralText, setNeutralText] = useState('#212121');
	const [primary, setPrimary] = useState(getComputedStyle(document.documentElement).getPropertyValue('--color-on-background'));
	const [background, setBackground] = useState(getComputedStyle(document.documentElement).getPropertyValue('--color-background'));

	const onClose = () => {
		close();
	}

	useEffect(() => {
		console.log('background');
		const value = isLightMode(background);
		if (value) {
			setNeutralColor('#616161');
			setNeutralText('#fafafa')
		} else {
			setNeutralColor('#f5f5f5');
			setNeutralText('#212121')
		}

	}, [background])


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
		setPrimary(color);

		theme.palette.primary.main = color;
	}

	const handleSetBackground = (color: string) => {
		document.documentElement.style.setProperty('--color-background', color);
		setBackground(color)
	}

	const handleColorChange = (color: string) => {

	}

	const handleModeChange = (event: any) => {
		theme.palette.mode = event.target.value;
	}

	return (
		<S.Wrapper>
			<S.MenuHeader>
				<S.MenuTitle>Themes</S.MenuTitle>
				<IconButton onClick={onClose}>
					<CloseIcon style={{ fill: "var(--color-on-background)" }}></CloseIcon>
				</IconButton>
			</S.MenuHeader>

			{/* <S.NeutralHeaders className="" color={neutralColor}>Color mode</S.NeutralHeaders>
			<div>Helps determine how automated color should be generated</div>
			<ToggleButtonGroup value={mode} onChange={handleModeChange}>
				<ToggleButton value="light">
					<LightModeIcon></LightModeIcon>
					<span className="ml-2">Light</span>
				</ToggleButton>
				<ToggleButton value="dark">
					<DarkModeIcon></DarkModeIcon>
					<span className="ml-2">Dark</span>
				</ToggleButton>
			</ToggleButtonGroup> */}

			<S.NeutralHeaders className="" color={neutralColor}>Primary and accents</S.NeutralHeaders>
			<S.NeutralBackground color={neutralColor}>
				<S.Themes>
					{primaryColors.map((color) => <S.ColorPalette key={color} mainColor={color} onClick={() => handleSetPrimary(color)}></S.ColorPalette>)}
				</S.Themes>
				<ColorSelection originalColor={primary} onChange={handleSetPrimary}></ColorSelection>
			</S.NeutralBackground>

			<S.NeutralHeaders className="" color={neutralColor}>Background</S.NeutralHeaders>
			<S.NeutralBackground color={neutralColor}>
				<S.Themes>
					{backgroundColors.map((palette) => <S.ColorPalette key={palette.color} mainColor={palette.color} onClick={() => handleSetBackground(palette.color)}></S.ColorPalette>)}
				</S.Themes>
				<ColorSelection originalColor={background} onChange={handleSetBackground}></ColorSelection>
			</S.NeutralBackground>
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
		console.log('change', color);
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
		<div className="flex gap-2 items-center w-fit ">
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
					<Button onClick={handleOnSave}>Save</Button>
				</div>
			</Popover>
		</div>
	)
}