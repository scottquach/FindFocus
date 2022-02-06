import { atom, selector, selectorFamily } from 'recoil';
import { Layout } from '../models/layout.interface';
import { Room } from '../models/room.interface';
import { ThemePalette } from '../models/theme.model';
import { createDefaultThemePalette } from '../models/theme.model';
import { Widget } from '../models/widget.interface';
import { Task } from '../models/todolist-widget.interface';
import { Type } from 'typescript';

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
    default: null as Room | null
});

export const favoritesState = atom({
    key: 'favoritesState',
    default: [] as string[],
});

export const themePaletteState = atom({
    key: 'themePaletteState',
    default: createDefaultThemePalette() as ThemePalette
})

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

export const todosState = atom({
    key: 'todos',
    default: [] as Array<Task>,
});