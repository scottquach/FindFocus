import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Tooltip } from '@mui/material';
import * as S from './styles';

interface Theme {
	colorPrimary: string;
	colorOnPrimary: string;

	colorSecondary: string;
	colorOnSecondary: string;

	colorBackground: string;
	colorOnBackground: string;

	colorButton: string;
}


const lightTheme: Theme = {
	colorPrimary: '#212121',
	colorOnPrimary: '#fafafa',
	colorSecondary: '#474554',
	colorOnSecondary: '#212121',
	colorBackground: '#fafafa',
	colorOnBackground: '#212121',
	colorButton: '#616161'
}

const darkTheme: Theme = {
	colorPrimary: '#fafafa',
	colorOnPrimary: '#212121',
	colorSecondary: '#9e9e9e',
	colorOnSecondary: '#212121',
	colorBackground: '#212121',
	colorOnBackground: '#ffffff',
	colorButton: '#eeeeee'
}

export function ThemePicker({ close }: any) {

	const onClose = () => {
		close();
	}

	const setTheme = (theme: Theme) => {
		console.log('setting theme', theme)
		document.documentElement.style.setProperty('--color-primary', theme.colorPrimary);
		document.documentElement.style.setProperty('--color-on-primary', theme.colorOnPrimary);
		document.documentElement.style.setProperty('--color-secondary', theme.colorSecondary);
		document.documentElement.style.setProperty('--color-on-secondary', theme.colorOnSecondary);
		document.documentElement.style.setProperty('--color-background', theme.colorBackground);
		document.documentElement.style.setProperty('--color-on-background', theme.colorOnBackground);
		document.documentElement.style.setProperty('--color-button', theme.colorButton);
	}

	return (
		<S.Wrapper>
			<S.MenuHeader>
				<S.MenuTitle>Themes</S.MenuTitle>
				<IconButton onClick={onClose}>
					<CloseIcon style={{fill: "var(--color-on-background)"}}></CloseIcon>
				</IconButton>
			</S.MenuHeader>
			<S.Themes>
				<Tooltip title="Light">
					<S.ThemePalette theme={lightTheme} onClick={() => setTheme(lightTheme)}></S.ThemePalette>
				</Tooltip>
				<Tooltip title="Dark">
					<S.ThemePalette theme={darkTheme} onClick={() => setTheme(darkTheme)}></S.ThemePalette>
				</Tooltip>
			</S.Themes>

		</S.Wrapper>
	)
}