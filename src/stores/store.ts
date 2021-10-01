import { Layout } from 'react-grid-layout';
import { atom, selector } from 'recoil';
import { Widget } from '../models/widget.interface';

export const gridLayoutState = atom({
    key: 'gridLayout',
    default: [
        // { i: 'a', x: 0, y: 0, w: 2, h: 2 },
        // { i: 'b', x: 0, y: 0, w: 2, h: 2, widget: createWidget(WidgetType.Quote) },
        // { i: 'c', x: 4, y: 0, w: 3, h: 3, widget: createWidget(WidgetType.Quote) },
        // { i: 'd', x: 7, y: 0, w: 2, h: 2  },
    ] as Layout[],
});

export const activeWidgetsState = atom({
    key: 'activeWidgets',
    default: [] as Widget[],
});

export const activeWidgetsMapState = selector({
    key: 'activeWidgetsMapState',
    get: ({ get }) => {
        // console.log('BUILDING WIDGET MAP');
        const widgets = get(activeWidgetsState);
        // console.log('CURRENT WIDGETs', typeof widgets)

        return widgets.reduce((map: { [id: string]: Widget }, widget) => {
            map[widget.id] = widget;
            return map;
        }, {});
    },
});
