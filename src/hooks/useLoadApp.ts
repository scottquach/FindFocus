import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { BackgroundType } from '../models/background-types.enum';
import { Rooms } from '../models/rooms.model';
import { activeWidgetsState, backgroundState, layoutState } from '../stores/store';
import useLocalStorage from './useLocalStorage';

export default function useLoadApp() {
    console.log('APP IS BUILDING');

    // Initial load of central state
    const [savedWidgets] = useLocalStorage('active-widgets', []);
    const [savedLayout] = useLocalStorage('layout', {});
    const [background] = useLocalStorage('background', Rooms['cafe'][0]);

    const setLayout = useSetRecoilState(layoutState);
    const setWidgets = useSetRecoilState(activeWidgetsState);
    const setBackground = useSetRecoilState(backgroundState);

    if (localStorage.getItem('grid-layout')) {
        localStorage.clear();
    }

    useEffect(() => {
        setLayout((old) => savedLayout);
        setWidgets((old) => savedWidgets);
        setBackground((old) => background);
    });
}
