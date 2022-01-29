import { atom, selector, selectorFamily } from 'recoil';
import { BackgroundType } from '../models/background-types.enum';
import { CategoryId } from '../models/category.model';
import { Layout } from '../models/layout.interface';
import { Room } from '../models/room.interface';
import { Widget } from '../models/widget.interface';

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
        id: 'LG9D9UtaDYw',
        name: 'Study with Koya',
        creator: 'BT21',
        link: 'https://www.youtube.com/watch?v=LG9D9UtaDYw&ab_channel=BT21',
        category: CategoryId.Animated,
    } as Room | null,
});

export const favoritesState = atom({
    key: 'favoritesState',
    default: [] as string[],
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
    default: 0,
});
