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
    data: {}
});

const getTitle = (type: WidgetType) => {
    switch (type) {
        case WidgetType.Spotify:
            return 'Spotify'
        case WidgetType.Quote:
            return 'Quote'
        case WidgetType.Weather:
            return 'Weather'
        case WidgetType.Ambient:
            return 'Ambient Music'
        case WidgetType.YouTube:
            return 'YouTube'
        default:
            return 'Widget'
    }
};

export function createWidget(type: WidgetType): Widget {
    const baseWidget = base(type);
    switch (type) {
        case WidgetType.Spotify:
            return baseWidget;
        case WidgetType.Quote:
            return baseWidget;
        case WidgetType.Weather:
            return baseWidget;
        case WidgetType.Ambient:
            return baseWidget;
        case WidgetType.YouTube:
            return baseWidget;
        case WidgetType.Clock:
            baseWidget.data.clockType = 'clockOne';
            // baseWidget.data.clockType = 'clockTwo';
            return baseWidget;
        default:
            return base(type);
    }
}
