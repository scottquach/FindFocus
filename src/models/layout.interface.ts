
export interface Layout {
	[widgetId: string]: {
		position: {
			x: number;
			y: number;
		},
		size: {
			width: number;
			height: number;
		}
		id: string;
		// type: string;
	}
}