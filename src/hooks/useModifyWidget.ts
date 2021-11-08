import { useSetRecoilState } from 'recoil';
import { Widget } from '../models/widget.interface';
import { activeWidgetsState } from '../stores/store';

export default function useModifyWidget() {
    const setActiveWidgets = useSetRecoilState(activeWidgetsState);

    function modifyWidget(widgetId: string, data: any) {
        setActiveWidgets((old: Widget[]) => {
            const newState = old.map((widget: Widget) => {
                if (widget.id === widgetId) {
                    return {
                        ...widget,
                        data: {
                            ...data,
                        },
                    };
                } else {
                    return widget;
                }
            });

            return newState;
        });
    }

    return modifyWidget;
}
