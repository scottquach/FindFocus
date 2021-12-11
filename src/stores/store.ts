// import { Layout } from 'react-grid-layout';
import { atom, selector, selectorFamily } from 'recoil';
import { BackgroundType } from '../models/background-types.enum';
import { Layout } from '../models/layout.interface';
import { Room } from '../models/room.interface';
import { Widget } from '../models/widget.interface';

// export const gridLayoutState = atom({
//     key: 'gridLayout',
//     default: [
//         // { i: 'a', x: 0, y: 0, w: 2, h: 2 },
//         // { i: 'b', x: 0, y: 0, w: 2, h: 2, widget: createWidget(WidgetType.Quote) },
//         // { i: 'c', x: 4, y: 0, w: 3, h: 3, widget: createWidget(WidgetType.Quote) },
//         // { i: 'd', x: 7, y: 0, w: 2, h: 2  },
//     ] as Layout[],
// });

export const layoutState = atom({
    key: 'layout',
    default: {} as Layout,
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

export const widgetById = selectorFamily({
    key: 'widgetById',
    get:
        (widgetId: string) =>
        ({ get }) => {
            return get(activeWidgetsMapState)?.[widgetId];
        },
});

export const backgroundState = atom({
    key: 'backgroundState',
    default: {
        // type: BackgroundType.Image,
        // roomId: 'city',
        // value: 'https://images.unsplash.com/photo-1619199748576-75ae8022c73f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
    } as Room | null,
});

export const globalConfigState = atom({
    key: 'globalConfigState',
    default: {
        gridVisible: true,
        backgroundAudio: true,
    },
});

export const globalGridVisibleState = atom({
    key: 'globalGridVisibleState',
    default: true,
});

export const globalVolumeState = atom({
    key: 'globalVolumeState',
    default: 50,
});
