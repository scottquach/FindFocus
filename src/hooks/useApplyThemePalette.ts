import { useSetRecoilState } from 'recoil';
import { isHexLight, ThemePalette, themePaletteToMuiTheme } from '../models/theme.model';
import { themePaletteState } from '../stores/store';

export default function useApplyThemePalette() {
    const setGlobalTheme = useSetRecoilState(themePaletteState);
    const setTheme = (palette: ThemePalette) => {
        setGlobalTheme(palette);
        const { primary, background } = palette;
        const muiTheme = themePaletteToMuiTheme(palette);
        console.log("MUI", muiTheme)
        document.documentElement.style.setProperty('--color-on-background', primary);
        document.documentElement.style.setProperty('--color-primary', primary);
        document.documentElement.style.setProperty('--color-background', background);

        // if (isHexLight(primary)) {
        //     document.documentElement.style.setProperty('--color-on-primary', '#212121');
        // } else {
        //     document.documentElement.style.setProperty('--color-on-primary', '#f5f5f5');
        // }

        if (isHexLight(background)) {
            document.documentElement.style.setProperty('--color-border', '#212121');
            document.documentElement.style.setProperty('--color-surface', '#212121');
            document.documentElement.style.setProperty('--color-on-surface', '#f5f5f5');
        } else {
            document.documentElement.style.setProperty('--color-border', '#f5f5f5');
            document.documentElement.style.setProperty('--color-surface', '#f5f5f5');
            document.documentElement.style.setProperty('--color-on-surface', '#212121');
        }


        document.documentElement.style.setProperty('--color-primary-light', muiTheme.palette.primary.light);
        document.documentElement.style.setProperty('--color-primary-dark', muiTheme.palette.primary.dark);
        document.documentElement.style.setProperty('--color-on-primary', muiTheme.palette.primary.contrastText);


        document.documentElement.style.setProperty('--color-background-light', muiTheme.palette.secondary.light);
        document.documentElement.style.setProperty('--color-background-dark', muiTheme.palette.secondary.dark);
        document.documentElement.style.setProperty('--color-on-background', muiTheme.palette.secondary.contrastText);
    };

    return [setTheme];
}
