import { WidgetTypes } from "./WidgetTypes.enum";

export interface Widget {
    id: string;
    type: WidgetTypes;
    data: string;
}

