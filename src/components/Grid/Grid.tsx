import { WidgetFrame } from "../WidgetFrame";
import styled from "styled-components";
import { QuoteWidget } from "../Widgets/QuoteWidget";
import { useRecoilState, useRecoilValue } from "recoil";
import { activeWidgetsMapState, activeWidgetsState, globalGridVisibleState, layoutState } from "../../stores/store";
import { WidgetType } from "../../models/widget-types.enum";
import useSyncLocalStorage from '../../hooks/useSyncLocalStorage';
import ClockWidget from '../Widgets/ClockWidget';
import { Rnd } from 'react-rnd';
import { Layout } from "../../models/layout.interface";
import { SpotifyWidget } from "../Widgets/SpotifyWidget";
import StickyNoteWidget from "../Widgets/StickyNoteWidget";
import WeatherWidget from "../Widgets/WeatherWidget";
import TimerWidget from "../Widgets/TimerWidget";
import { getMinSize } from "../../models/widget.model";
import { ResizeHandle } from "./ResizeHandle";
import TodolistWidget from "../Widgets/TodolistWidget";

const Div = styled.div`
	display: flex;
	overflow: hidden;
	height: 100%;
	width: 100%;
`

const Widget = styled(WidgetFrame)`
	width: 100%;
	height: 100%;
`

const StyledGrid = styled.div`
	margin: 4rem 1rem 3rem 1rem;
	flex: 1;
`

export function Grid() {
	console.log('GRID REBUILD')
	const [layout, setLayout] = useRecoilState(layoutState)
	const widgetsMap = useRecoilValue(activeWidgetsMapState);
	const gridVisible = useRecoilValue(globalGridVisibleState);


	const activeWidgets = useRecoilValue(activeWidgetsState);
	useSyncLocalStorage('active-widgets', activeWidgets)
	useSyncLocalStorage('layout', layout);

	const updateSize = (widgetId: string, size: { x: number, y: number }) => {
		console.log('update size', widgetId, size);
		const newLayout = {
			...layout,
			[widgetId]: {
				...layout[widgetId],
				size: size,
				id: widgetId,
			}
		} as Layout;
		// setSavedLayout(newLayout);
		setLayout(newLayout);
	}

	const updatePosition = (widgetId: string, position: { x: number, y: number }) => {
		console.log('update position', widgetId, position);
		const newLayout = {
			...layout,
			[widgetId]: {
				...layout[widgetId],
				position: position,
				id: widgetId
			}
		}
		// setSavedLayout(newLayout);
		setLayout(newLayout);
	}

	return (
		<StyledGrid>
			{
				widgetsMap && gridVisible && Object.values(layout).map((item: any, index: number) => {
					// console.log('item', item);
					const type = widgetsMap[item.id]?.type
					switch (type) {
						case WidgetType.Quote:
							return <ResizeBox key={item.id} index={index} item={item} widgetType={type} updateSize={updateSize} updatePosition={updatePosition}>
								<QuoteWidget widgetId={item.id}></QuoteWidget>
							</ResizeBox>
						case WidgetType.Clock:
							return <ResizeBox key={item.id} index={index} item={item} widgetType={type} updateSize={updateSize} updatePosition={updatePosition}>
								<ClockWidget widgetId={item.id}></ClockWidget>
							</ResizeBox>
						case WidgetType.Spotify:
							return <ResizeBox key={item.id} index={index} item={item} widgetType={type} updateSize={updateSize} updatePosition={updatePosition}>
								<SpotifyWidget widgetId={item.id}></SpotifyWidget>
							</ResizeBox>
						case WidgetType.StickyNote:
							return <ResizeBox key={item.id} index={index} item={item} widgetType={type} updateSize={updateSize} updatePosition={updatePosition}>
								<StickyNoteWidget widgetId={item.id}></StickyNoteWidget>
							</ResizeBox>
						case WidgetType.Weather:
							return <ResizeBox key={item.id} index={index} item={item} widgetType={type} updateSize={updateSize} updatePosition={updatePosition}>
								<WeatherWidget widgetId={item.id}></WeatherWidget>
							</ResizeBox>
						case WidgetType.Timer:
							return <ResizeBox key={item.id} index={index} item={item} widgetType={type} updateSize={updateSize} updatePosition={updatePosition}>
								<TimerWidget widgetId={item.id}></TimerWidget>
							</ResizeBox>
						case WidgetType.TodosList:
							return <ResizeBox key={item.id} index={index} item={item} widgetType={type} updateSize={updateSize} updatePosition={updatePosition}>
								<TodolistWidget widgetId={item.id}></TodolistWidget>
							</ResizeBox>
						// return <Div key={item.i}>
						// 	<ClockWidget widgetId={item.i}></ClockWidget>
						// </Div>
						// case WidgetType.Ambient:
						// 	return <Div key={item.i}>
						// 		<AmbientNoiseWidget></AmbientNoiseWidget>
						// 	</Div>
						// case WidgetType.Weather:
						// 	return <Div key={item.i}>
						// 		<EmbedWidget ></EmbedWidget>
						// 	</Div>
						// case WidgetType.SoundCloud:
						// 	return <Div key={item.i}>
						// 		<SoundCloudWidget widgetId={item.i}></SoundCloudWidget>
						// 	</Div>
						default:
							<Div key={item.i}>
								<Widget></Widget>
							</Div>
					}
				})
			}
		</StyledGrid >
	)
}


function ResizeBox({ children, index, item, widgetType, updatePosition, updateSize }: any) {
	const { id, size, position } = item;
	const minSize = getMinSize(widgetType);
	const minHeight = minSize ? minSize.minHeight : '25px';
	const minWidth = minSize ? minSize.minWidth : '25px';

	const onPositionChanged = (e: any, d: any) => {
		// console.log('position', e, d);
		const { x, y } = d;
		// console.log('position', x, y);
		updatePosition(id, { x, y });
	}

	const onSizeChanged = (e: any, d: any, ref: any, delta: any, position: any) => {
		// console.log('Size', e, d, ref, delta, position);
		const { width, height } = ref.style;
		// console.log('Size', width, height);
		updateSize(id, { width: width, height });
	}

	return (
		<Rnd
			// enableResizing={false}
			minHeight={minHeight}
			minWidth={minWidth}
			size={{ width: size?.width ?? 'auto', height: size?.height ?? 'auto' }}
			position={{ x: position?.x ?? 100 + ((index + 1) * 10), y: position?.y ?? 100 + ((index + 1) * 10) }}
			dragHandleClassName="WidgetHeader"
			bounds="parent"
			onDragStop={onPositionChanged}
			onResizeStop={onSizeChanged}
			// resizeHandleComponent={{bottomRight: <ResizeHandle></ResizeHandle>}}
			>
			{children}
		</Rnd>
	)
}

