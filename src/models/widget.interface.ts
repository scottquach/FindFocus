import { WidgetType } from './widget-types.enum';

export interface Widget {
    id: string;
    type: WidgetType;
    properties: {
        title: string;
        created: string | Date;
        // resizable: boolean;
    };
    data?: any;
}
