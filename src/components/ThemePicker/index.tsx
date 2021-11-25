// import { IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
// import LightbulbIcon from '@mui/icons-material/Lightbulb';
// import LightModeIcon from '@mui/icons-material/LightMode';
// import NightlightIcon from '@mui/icons-material/Nightlight';
// import CloseIcon from '@mui/icons-material/Close';
// import { MenuHeader } from "../../GlobalStyles";
import { IconButton } from '@mui/material';
import * as S from './styles';


export function ThemePicker({ close }: any) {

	const onClose = () => {
		close();
	}

	return (
		<S.Wrapper>
			<S.MenuHeader>
				<S.MenuTitle>Themes</S.MenuTitle>
				<IconButton onClick={onClose}>
					<CloseIcon></CloseIcon>
				</IconButton>
			</S.MenuHeader>
			<S.Themes>
				<S.ThemePalette></S.ThemePalette>
				<S.ThemePalette></S.ThemePalette>
				<S.ThemePalette></S.ThemePalette>

			</S.Themes>

		</S.Wrapper>
	)
}