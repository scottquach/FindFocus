import { useSetRecoilState } from 'recoil';
import { Widget } from '../models/widget.interface';
import { activeWidgetsState, gridLayoutState } from '../stores/store';
import useLocalStorage from './useLocalStorage';

export default function useAddWidget() {
    const setGridLayout = useSetRecoilState(gridLayoutState);
    const setActiveWidgets = useSetRecoilState(activeWidgetsState);
    const [savedWidgets, setSavedWidgets] = useLocalStorage('active-widgets', JSON.stringify([]));

    function addWidget(widget: Widget) {
        setGridLayout((old) => [
            ...old,
            {
                i: widget.id,
                x: 0,
                y: 0,
                w: 2,
                h: 2,
                widget: widget,
            },
        ]);
        setActiveWidgets((old: Widget[]) => {
            const newWidgets = [...old, widget];
            setSavedWidgets(newWidgets);
            return newWidgets;
        });
    }

    return addWidget;
}
