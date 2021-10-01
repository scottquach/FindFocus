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
    switch (type) {
        case WidgetType.Spotify:
            return base(type);
        case WidgetType.Quote:
            return base(type);
        case WidgetType.Weather:
            return base(type);
        case WidgetType.Ambient:
            return base(type);
        case WidgetType.YouTube:
            return base(type);
        default:
            return base(type);
    }
}
