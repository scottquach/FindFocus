import { WidgetFrame } from "./WidgetFrame";
import styled from "styled-components";
import { QuoteWidget } from "./Widgets/QuoteWidget";
import { useRecoilState, useRecoilValue } from "recoil";
import { activeWidgetsMapState, activeWidgetsState, globalGridVisibleState, layoutState } from "../stores/store";
import { WidgetType } from "../models/widget-types.enum";
import useUpdateLogger from '../hooks/useUpdateLogger';
import useLocalStorage from '../hooks/useLocalStorage';
import useSyncLocalStorage from '../hooks/useSyncLocalStorage';
import ClockWidget from './Widgets/ClockWidget';
import { Rnd } from 'react-rnd';
import { Layout } from "../models/layout.interface";

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
	padding: 4rem 2rem;
	flex: 1;
`

export function Grid() {
	console.log('GRID REBUILD')
	const [layout, setLayout] = useRecoilState(layoutState)
	const widgetsMap = useRecoilValue(activeWidgetsMapState);
	const gridVisible = useRecoilValue(globalGridVisibleState);


	const activeWidgets = useRecoilValue(activeWidgetsState);
	// const [_, setSavedLayout] = useLocalStorage('layout', {});

	// useUpdateLogger(gridLayout, 'grid layout state');
	// useUpdateLogger(activeWidgets, 'active widgets state');
	useSyncLocalStorage('active-widgets', activeWidgets)
	useSyncLocalStorage('layout', layout);
	// useUpdateLogger(widgetsMap, 'widget map');

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
					switch (widgetsMap[item.id]?.type) {
						case WidgetType.Quote:
							return <ResizeBox key={item.id} index={index} id={item.id} size={item.size} position={item.position} updateSize={updateSize} updatePosition={updatePosition}>
								<QuoteWidget widgetId={item.id}></QuoteWidget>
							</ResizeBox>
						case WidgetType.Clock:
							return <ResizeBox key={item.id} index={index} id={item.id} size={item.size} position={item.position} updateSize={updateSize} updatePosition={updatePosition}>
								<ClockWidget widgetId={item.id}></ClockWidget>
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
						// case WidgetType.Spotify:
						// 	return <Div key={item.i}>
						// 		<SpotifyWidget widgetId={item.i}></SpotifyWidget>
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

function ResizeBox({ children, index, position, size, id, updatePosition, updateSize }: any) {

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

	// console.log('position', position);
	// console.log('size', size);

	return (
		<Rnd
			size={{ width: size?.width ?? 'auto', height: size?.height ?? 'auto' }}
			position={{ x: position?.x ?? 100 + ((index + 1) * 10), y: position?.y ?? 100 + ((index + 1) * 10) }}
			dragHandleClassName="WidgetHeader"
			onDragStop={onPositionChanged}
			onResizeStop={onSizeChanged}>
			{children}
		</Rnd>
	)
}