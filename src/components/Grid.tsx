import { ExampleWidget } from "./Widgets/ExampleWidget";
import GridLayout, { ItemCallback, Responsive, WidthProvider } from 'react-grid-layout';

import { WidgetFrame } from "./WidgetFrame";
import styled from "styled-components";
import { QuoteWidget } from "./Widgets/QuoteWidget";
import { WeatherWidget } from "./Widgets/WeatherWidget";
import { EmbedWidget } from "./Widgets/EmbedWidget";
import { useRecoilValue } from "recoil";
import { gridLayoutState } from "../stores/store";
import { WidgetTypes } from "../models/WidgetTypes.enum";

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

	const gridLayout = useRecoilValue(gridLayoutState)

	const layouts = {
		lg: gridLayout,
	}

	function onLayoutChange(callback: ItemCallback) {
		console.log(callback);

		return callback;
	}

	return (
		<StyledGrid>
			<ResponsiveGridLayout
				layouts={layouts}
				margin={[10, 10]}
				breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
				cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
			// onDragStop={(item: ItemCallback) => onLayoutChange(item)}
			// onResizeStop={(item: ItemCallback) => onLayoutChange(item)}
			>
				{
					gridLayout.map(item => {
						console.log('item', item);

						switch (item.type) {
							case WidgetTypes.Quote:
								return <Div key={item.i}>
									<div>{item.i}</div>
									<QuoteWidget></QuoteWidget>
								</Div>
								break;
							case WidgetTypes.Weather:
								<div>{item.i}</div>
								return <Div key={item.i}>
									<EmbedWidget ></EmbedWidget>
								</Div>
								break;

							default:
								<Div key={item.i}>
									<Widget></Widget>
								</Div>

						}
					})
				}
				{/* <Div key="a">
					<Widget ></Widget>
				</Div> */}
				{/* <Div key="b">
					<Widget ></Widget>
				</Div> */}
				{/* <Div key="c">
					<QuoteWidget></QuoteWidget>
				</Div>
				<Div key="d">
					<EmbedWidget ></EmbedWidget>
				</Div> */}
			</ResponsiveGridLayout >
		</StyledGrid>
	)
}