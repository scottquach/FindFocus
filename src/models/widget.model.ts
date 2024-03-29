import { WidgetType } from './widget-types.enum';
import { v4 as uuidv4 } from 'uuid';
import { Widget } from './widget.interface';

const base = (type: WidgetType): Widget => ({
    id: uuidv4(),
    type: type,
    properties: {
        title: getTitle(type),
        created: new Date().toISOString(),
    },
    data: {},
});

export const getTitle = (type: WidgetType) => {
    switch (type) {
        case WidgetType.Spotify:
            return 'Spotify';
        case WidgetType.Quote:
            return 'Quote';
        case WidgetType.Weather:
            return 'Weather';
        case WidgetType.Ambient:
            return 'Ambient Music';
        case WidgetType.YouTube:
            return 'YouTube';
        case WidgetType.StickyNote:
            return 'Note';
        case WidgetType.Clock:
            return 'Clock';
        case WidgetType.Timer:
            return 'Timer';
        case WidgetType.TodosList:
            return 'To-do List';
        default:
            return 'Widget';
    }
};

export function createWidget(type: WidgetType, data?: any): Widget {
    const baseWidget = base(type);
    switch (type) {
        case WidgetType.Spotify:
            baseWidget.data = {
                link: 'https://open.spotify.com/embed/playlist/2s9R059mmdc8kz6lrUqZZd',
            };
            return baseWidget;
        case WidgetType.Quote:
            return baseWidget;
        case WidgetType.Weather:
            baseWidget.data = data ?? { weatherType: 'weatherMinimal' };
            return baseWidget;
        case WidgetType.Ambient:
            return baseWidget;
        case WidgetType.YouTube:
            return baseWidget;
        case WidgetType.Clock:
            baseWidget.data = data ?? { clockType: 'clockOne' };
            return baseWidget;
        case WidgetType.Timer:
            baseWidget.data = data ?? {
                minutes: 1,
                seconds: 0,
            };
            return baseWidget;
        case WidgetType.TodosList:
            return baseWidget;
        default:
            return base(type);
    }
}

export const getMinSize = (type: WidgetType) => {
    switch (type) {
        case WidgetType.Clock:
            return {
                minHeight: '250px',
                minWidth: '250px',
            };
        case WidgetType.Spotify:
            return {
                minHeight: '250px',
                minWidth: '150px',
            };
        case WidgetType.StickyNote:
            return {
                minHeight: '125px',
                minWidth: '150px',
            };
        case WidgetType.Quote:
            return {
                minHeight: '175px',
                minWidth: '300px',
            }
        case WidgetType.Timer:
            return {
                minHeight: '100px',
                minWidth: '325px',
            };
        case WidgetType.TodosList:
            return {
                minHeight: '130px',
                minWidth: '200px',
            };
    
        default:
            return null;
    }
};
