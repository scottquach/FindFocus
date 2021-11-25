import { cloneDeep } from 'lodash';
import { useSetRecoilState } from 'recoil';
import { Widget } from '../models/widget.interface';
import { activeWidgetsState, gridLayoutState } from '../stores/store';
import useLocalStorage from './useLocalStorage';

export default function useDeleteWidget() {
    const setGridLayout = useSetRecoilState(gridLayoutState);
    const setActiveWidgets = useSetRecoilState(activeWidgetsState);
    const [savedWidgets, setSavedWidgets] = useLocalStorage('active-widgets', JSON.stringify([]));

    function deleteWidget(widgetId: string) {
        setGridLayout((old) => {
            const index = old.findIndex((x) => x.i === widgetId);
            // console.log(index);
			const newState = cloneDeep(old);
            newState.splice(index, 1);
			// console.log('new state', newState);
            return newState;
        });

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
