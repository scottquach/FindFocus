import { Layout, Responsive, WidthProvider } from 'react-grid-layout';
import { WidgetFrame } from "./WidgetFrame";
import styled from "styled-components";
import { QuoteWidget } from "./Widgets/QuoteWidget";
import { EmbedWidget } from "./Widgets/EmbedWidget";
import { useRecoilState, useRecoilValue } from "recoil";
import { activeWidgetsMapState, gridLayoutState } from "../stores/store";
import { WidgetType } from "../models/widget-types.enum";
import useUpdateLogger from '../hooks/useUpdateLogger';
import useLocalStorage from '../hooks/useLocalStorage';

const Div = styled.div`
	display: flex;
	`

const Widget = styled(WidgetFrame)`
	width: 100%;
	height: 100%;
	`

const StyledGrid = styled.div`
	padding: 4rem 2rem;
	flex: 1;
`

const ResponsiveGridLayout = WidthProvider(Responsive);

export function Grid() {
	console.log('GRID REBUILD')
	const [gridLayout] = useRecoilState(gridLayoutState)
	const widgetsMap = useRecoilValue(activeWidgetsMapState);
	const [savedLayout, setSavedLayout] = useLocalStorage('grid-layout', '');

	useUpdateLogger(gridLayout, 'grid layout state');

	const layouts = {
		lg: gridLayout,
	}
	console.log('grid layout', gridLayout)

	function onLayoutChange(layout: Layout[]) {
		console.log('layout change', layout);
		setSavedLayout(layout);
	}

	return (
		<StyledGrid>
			<ResponsiveGridLayout
				layouts={layouts}
				margin={[10, 10]}
				breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
				cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
				onLayoutChange={onLayoutChange}
			// onResizeStop={(item: ItemCallback) => onLayoutChange(item)}
			>
				{
					widgetsMap && gridLayout.map((item: Layout) => {
						switch (widgetsMap[item.i]?.type) {
							case WidgetType.Quote:
								return <Div key={item.i}>
									{/* <div>{item.i}</div> */}
									<QuoteWidget widgetId={item.i}></QuoteWidget>
								</Div>
							case WidgetType.Weather:
								// <div>{item.i}</div>
								return <Div key={item.i}>
									<EmbedWidget ></EmbedWidget>
								</Div>

							default:
								<Div key={item.i}>
									<Widget></Widget>
								</Div>
						}
					})
				}
			</ResponsiveGridLayout >
		</StyledGrid>
	)
}