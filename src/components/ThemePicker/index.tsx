import CloseIcon from '@mui/icons-material/Close';
import { Button, IconButton, Popover, Tooltip } from '@mui/material';
import { useTheme } from '@mui/system';
import { useState } from 'react';
import { Input, InputSmall } from '../../styles/Input';
import { SketchPicker } from 'react-color';

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

export function ThemePicker({ close }: any) {
	const theme = useTheme();
	const [neutralColor, setNeutralColor] = useState('#212121');

	const [primary] = useState(() => {
		return document.documentElement.style.getPropertyValue('--color-primary');

	});
	const [background] = useState(() => {
		return document.documentElement.style.getPropertyValue('--color-background');
	});

	const onClose = () => {
		close();
	}

	const setTheme = (setTheme: Theme) => {
		console.log('setting theme', setTheme)
		document.documentElement.style.setProperty('--color-primary', setTheme.colorPrimary);
		document.documentElement.style.setProperty('--color-on-primary', setTheme.colorOnPrimary);
		document.documentElement.style.setProperty('--color-secondary', setTheme.colorSecondary);
		document.documentElement.style.setProperty('--color-on-secondary', setTheme.colorOnSecondary);
		document.documentElement.style.setProperty('--color-background', setTheme.colorBackground);
		document.documentElement.style.setProperty('--color-on-background', setTheme.colorOnBackground);
		document.documentElement.style.setProperty('--color-button', setTheme.colorButton);

		theme.palette.mode = setTheme.mode;
		theme.palette.primary.main = setTheme.colorPrimary;
	}

	const setPrimary = (color: string) => {
		document.documentElement.style.setProperty('--color-on-background', color);
		document.documentElement.style.setProperty('--color-button', color);

		theme.palette.primary.main = color;
	}

	const setBackground = (palette: Palette) => {
		document.documentElement.style.setProperty('--color-background', palette.color);
		theme.palette.mode = palette.mode;

		if (palette.mode === 'light') {
			setNeutralColor('#212121');
		} else {
			setNeutralColor('#fafafa');
		}
	}

	const handleColorChange = (color: string) => {

	}

	return (
		<S.Wrapper>
			<S.MenuHeader>
				<S.MenuTitle>Themes</S.MenuTitle>
				<IconButton onClick={onClose}>
					<CloseIcon style={{ fill: "var(--color-on-background)" }}></CloseIcon>
				</IconButton>
			</S.MenuHeader>

			<S.NeutralHeaders className="" color={neutralColor}>Primary and accents</S.NeutralHeaders>
			{/* <S.Themes>
				{primaryColors.map((color) => <S.ColorPalette key={color} mainColor={color} onClick={() => setPrimary(color)}></S.ColorPalette>)}
			</S.Themes> */}
			<ColorSelection onChange={handleColorChange}></ColorSelection>
			<S.NeutralHeaders className="" color={neutralColor}>Background</S.NeutralHeaders>

			{/* <S.Themes>
				{backgroundColors.map((palette) => <S.ColorPalette key={palette.color} mainColor={palette.color} onClick={() => setBackground(palette)}></S.ColorPalette>)}
			</S.Themes> */}
			<ColorSelection onChange={handleColorChange}></ColorSelection>

			<S.NeutralHeaders className="" color={neutralColor}>Presets</S.NeutralHeaders>
		</S.Wrapper>
	)
}

function ColorSelection({ onChange }: { onChange: (color: string) => void }) {
	const [open, anchorEl, handlePopoverOpen, handlePopoverClose] = usePopover();
	const [color, setColor] = useState('#3D4853')

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
		<div className="flex gap-2 items-center w-fit mb-4">
			<S.ColorChip color="#000000" onClick={handlePopoverOpen}></S.ColorChip>
			{/* <Input></Input> */}
			<InputSmall className="w-24" value={color} onChange={handleRawChange}></InputSmall>
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
				<SketchPicker
					color={color}
					onChange={handlePickerChange}
					onChangeComplete={handleChangeComplete}
					presetColors={[]}
				/>
				<div className="flex justify-center mt-4 mb-1">
					<Button onClick={handleOnSave}>Save</Button>
				</div>
			</Popover>
		</div>
	)
}