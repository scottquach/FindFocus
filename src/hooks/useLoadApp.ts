import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { getRandomRoom, Rooms } from '../models/rooms.model';
import { createDefaultThemePalette } from '../models/theme.model';
import { activeWidgetsState, backgroundState, favoritesState, layoutState, themePaletteState } from '../stores/store';
import useApplyThemePalette from './useApplyThemePalette';
import useLocalStorage from './useLocalStorage';

export default function useLoadApp() {
    console.log('APP IS BUILDING');

    // Initial load of central state
    const [savedWidgets] = useLocalStorage('active-widgets', []);
    const [savedLayout] = useLocalStorage('layout', {});
    const [background] = useLocalStorage('background', getRandomRoom());
    const [favorites] = useLocalStorage('favorites', []);
    const [themePalette] = useLocalStorage('themePalette', createDefaultThemePalette());

    const setLayout = useSetRecoilState(layoutState);
    const setWidgets = useSetRecoilState(activeWidgetsState);
    const setBackground = useSetRecoilState(backgroundState);
    const setFavorites = useSetRecoilState(favoritesState);
    const [setTheme] = useApplyThemePalette();

    if (localStorage.getItem('grid-layout')) {
        localStorage.clear();
    }

    useEffect(() => {
        console.log("SET APP")
        setTheme(themePalette);
        setLayout((old) => savedLayout);
        setWidgets((old) => savedWidgets);
        setBackground((old) => background);
        setFavorites(favorites);
        // setThemeState(themePalette);
    }, [0]);
}
