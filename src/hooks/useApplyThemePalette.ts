import { useSetRecoilState } from 'recoil';
import { isHexLight, ThemePalette } from '../models/theme.model';
import { themeState } from '../stores/store';

export default function useApplyThemePalette() {
    const setGlobalTheme = useSetRecoilState(themeState);
    const setTheme = (palette: ThemePalette) => {
        const { primary, background } = palette;
        document.documentElement.style.setProperty('--color-on-background', primary);
        document.documentElement.style.setProperty('--color-primary', primary);
        document.documentElement.style.setProperty('--color-background', background);

        if (isHexLight(primary)) {
            document.documentElement.style.setProperty('--color-on-primary', '#212121');
        } else {
            document.documentElement.style.setProperty('--color-on-primary', '#f5f5f5');
        }

        if (isHexLight(background)) {
            document.documentElement.style.setProperty('--color-border', '#212121');
            document.documentElement.style.setProperty('--color-surface', '#212121');
            document.documentElement.style.setProperty('--color-on-surface', '#f5f5f5');
        } else {
            document.documentElement.style.setProperty('--color-border', '#f5f5f5');
            document.documentElement.style.setProperty('--color-surface', '#f5f5f5');
            document.documentElement.style.setProperty('--color-on-surface', '#212121');
        }
        setGlobalTheme(palette);
    };

    return [setTheme];
}
