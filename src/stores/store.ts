import { atom } from 'recoil';
import { WidgetTypes } from '../models/WidgetTypes.enum';

export const gridLayoutState = atom({
    key: 'gridLayout',
    default: [
        { i: 'a', x: 0, y: 0, w: 2, h: 2, type: WidgetTypes.Quote },
        { i: 'b', x: 2, y: 0, w: 2, h: 2, type: WidgetTypes.Quote },
        { i: 'c', x: 4, y: 0, w: 3, h: 3, type: WidgetTypes.Quote },
        { i: 'd', x: 7, y: 0, w: 2, h: 2, type: WidgetTypes.Weather },
    ],
});

export const activeWidgetsState = atom({
    key: 'activeWidgets',
    default: [
        {
            id: 'test',
            type: WidgetTypes.Spotify,
            data: {},
        },
        {
            id: 'hi',
            type: WidgetTypes.SoundCloud,
            data: {},
        },
    ],
});
