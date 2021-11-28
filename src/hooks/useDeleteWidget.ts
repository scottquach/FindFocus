import { cloneDeep } from 'lodash';
import { useSetRecoilState } from 'recoil';
import { Widget } from '../models/widget.interface';
import { activeWidgetsState, layoutState } from '../stores/store';
import useLocalStorage from './useLocalStorage';

export default function useDeleteWidget() {
    const setActiveWidgets = useSetRecoilState(activeWidgetsState);
    const setLayout = useSetRecoilState(layoutState);
    const [savedWidgets, setSavedWidgets] = useLocalStorage('active-widgets', JSON.stringify([]));
    const [savedLayout, setSavedLayout] = useLocalStorage('layout', {});

    function deleteWidget(widgetId: string) {
        setLayout((old) => {
            const newLayout: any = {}
            console.log('delete', old)
            Object.values(old).forEach((item: any) => {
                console.log(item);
                if (item.id !== widgetId) {
                    newLayout[item.id] = item;
                }
            });

            setSavedLayout(newLayout);
            return newLayout;
        })

        setActiveWidgets((old: Widget[]) => {
            const index = old.findIndex((x) => x.id === widgetId);
            // console.log(index);
			const newState = cloneDeep(old);
            newState.splice(index, 1);
            setSavedWidgets(newState);
            return newState;
        });
    }

    return deleteWidget;
}
