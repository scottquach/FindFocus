import { IconButton } from "@mui/material";
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';
import CloseIcon from '@mui/icons-material/Close';
import { MenuHeader } from "../../GlobalStyles";
import * as S from './styles';


export function ThemePicker() {

	const onClose = () => {

	}

	return (
		<S.Wrapper>
			<S.MenuHeaderLayout>
				<MenuHeader>Themes</MenuHeader>
				<IconButton onClick={onClose}>
					<CloseIcon></CloseIcon>
				</IconButton>
			</S.MenuHeaderLayout>
			<S.MenuDescription>Everyday colors for you</S.MenuDescription>

			<S.SectionHeaderLayout>
				<LightbulbIcon></LightbulbIcon>
				<div>Featured</div>
			</S.SectionHeaderLayout>
			<S.Section>
				<S.Theme>
					<S.ThemeContainer></S.ThemeContainer>
					<S.ThemeName>OCTANE</S.ThemeName>
				</S.Theme>
		<S.Theme>
					<S.ThemeContainer></S.ThemeContainer>
					<S.ThemeName>RED OCTOBER</S.ThemeName>
				</S.Theme>



			</S.Section>

			<S.SectionHeaderLayout>
				<LightModeIcon></LightModeIcon>
				<div>Light themes</div>
			</S.SectionHeaderLayout>
			<S.Section>
				<S.Theme>
					<S.ThemeContainer></S.ThemeContainer>
					<S.ThemeName>OCTANE</S.ThemeName>
				</S.Theme>
			</S.Section>

			<S.SectionHeaderLayout>
				<NightlightIcon></NightlightIcon>
				<div>Dark themes</div>
			</S.SectionHeaderLayout>

			<S.Section>
				<S.Theme>
					<S.ThemeContainer></S.ThemeContainer>
					<S.ThemeName>OCTANE</S.ThemeName>
				</S.Theme>
			</S.Section>



		</S.Wrapper>
	)
}