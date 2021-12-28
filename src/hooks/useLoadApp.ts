import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { BackgroundType } from '../models/background-types.enum';
import { Rooms } from '../models/rooms.model';
import { activeWidgetsState, backgroundState, favoritesState, layoutState } from '../stores/store';
import useLocalStorage from './useLocalStorage';

export default function useLoadApp() {
    console.log('APP IS BUILDING');

    // Initial load of central state
    const [savedWidgets] = useLocalStorage('active-widgets', []);
    const [savedLayout] = useLocalStorage('layout', {});
    const [background] = useLocalStorage('background', Rooms['cafe'][0]);
    const [favorites] = useLocalStorage('favorites', []);

    const setLayout = useSetRecoilState(layoutState);
    const setWidgets = useSetRecoilState(activeWidgetsState);
    const setBackground = useSetRecoilState(backgroundState);
    const setFavorites = useSetRecoilState(favoritesState);

    if (localStorage.getItem('grid-layout')) {
        localStorage.clear();
    }

    useEffect(() => {
        setLayout((old) => savedLayout);
        setWidgets((old) => savedWidgets);
        setBackground((old) => background);
        setFavorites(favorites);
    });
}
