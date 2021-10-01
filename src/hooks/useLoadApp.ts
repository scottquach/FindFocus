import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { activeWidgetsState, gridLayoutState } from '../stores/store';
import useLocalStorage from './useLocalStorage';

export default function useLoadApp() {
    console.log('APP IS BUILDING');

    // Initial load of central state
    const [savedWidgets] = useLocalStorage('active-widgets', []);
    const [savedLayout] = useLocalStorage('grid-layout', []);

    const setLayout = useSetRecoilState(gridLayoutState);
    const setWidgets = useSetRecoilState(activeWidgetsState);
    useEffect(() => {
        setLayout((old) => savedLayout);
        setWidgets((old) => savedWidgets);
    });
}
