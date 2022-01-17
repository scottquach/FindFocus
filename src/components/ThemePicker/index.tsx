import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Tooltip } from '@mui/material';
import { useTheme } from '@mui/system';
import * as S from './styles';

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

export function ThemePicker({ close }: any) {

	const theme = useTheme();

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