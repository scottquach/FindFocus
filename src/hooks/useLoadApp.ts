import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { BackgroundType } from '../models/background-types.enum';
import { activeWidgetsState, gridLayoutState, backgroundState } from '../stores/store';
import useLocalStorage from './useLocalStorage';

export default function useLoadApp() {
    console.log('APP IS BUILDING');

    // Initial load of central state
    const [savedWidgets] = useLocalStorage('active-widgets', []);
    const [savedLayout] = useLocalStorage('grid-layout', []);
    const [background] = useLocalStorage('background', {
        type: BackgroundType.Image,
        value: 'https://images.unsplash.com/photo-1619199748576-75ae8022c73f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
    });

    const setLayout = useSetRecoilState(gridLayoutState);
    const setWidgets = useSetRecoilState(activeWidgetsState);
    const setBackground = useSetRecoilState(backgroundState);
    useEffect(() => {
        setLayout((old) => savedLayout);
        setWidgets((old) => savedWidgets);
        setBackground((old) => background);
    });
}
