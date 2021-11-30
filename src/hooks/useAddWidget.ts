import { useSetRecoilState } from 'recoil';
import { Widget } from '../models/widget.interface';
import { activeWidgetsState, layoutState } from '../stores/store';
import useLocalStorage from './useLocalStorage';

export default function useAddWidget() {
    // const setGridLayout = useSetRecoilState(gridLayoutState);
    const setActiveWidgets = useSetRecoilState(activeWidgetsState);
    const setLayout = useSetRecoilState(layoutState);
    const [savedWidgets, setSavedWidgets] = useLocalStorage('active-widgets', JSON.stringify([]));
    const [savedLayout, setSavedLayout] = useLocalStorage('layout', {});

    function addWidget(widget: Widget) {
        console.log('creating widget', widget);
        setLayout((old: any) => {
            const newLayout = {
                ...old,
                [widget.id]: {
                    id: widget.id
                }
            };

            setSavedLayout(newLayout);
            return newLayout;
        });

        setActiveWidgets((old: Widget[]) => {
            const newWidgets = [...old, widget];
            setSavedWidgets(newWidgets);
            return newWidgets;
        });
    }

    return addWidget;
}
