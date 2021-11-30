import { cloneDeep } from 'lodash';
import { useSetRecoilState } from 'recoil';
import { Widget } from '../models/widget.interface';
import { activeWidgetsState, layoutState } from '../stores/store';

export default function useUpdateWidget() {
    const setActiveWidgets = useSetRecoilState(activeWidgetsState);

    function updateWidget(widgetId: string, data: any) {
        setActiveWidgets((old: Widget[]) => {
            const index = old.findIndex((x) => x.id === widgetId);
            const newState = cloneDeep(old);
            if (index > -1) {
                const widget = cloneDeep(old[index]);
                console.log('spotify', widget);
                widget['data'] = {
                    ...data,
                };
                newState.splice(index, 1, widget);
            }
            return newState;
        });
    }

    return updateWidget;
}
