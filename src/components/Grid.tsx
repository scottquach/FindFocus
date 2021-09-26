import { ExampleWidget } from "./ExampleWidget";
import GridLayout, { Responsive, WidthProvider } from 'react-grid-layout';

import { WidgetFrame } from "./WidgetFrame";
import styled from "styled-components";
import { QuoteWidget } from "./QuoteWidget";

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

	const layout = [
		{ i: 'a', x: 0, y: 0, w: 2, h: 2 },
		{ i: 'b', x: 1, y: 0, w: 1, h: 2 },
		{ i: 'c', x: 2, y: 0, w: 3, h: 1 },
	];

	const layouts = {
		lg: layout,
	}

	return (
		<StyledGrid>
			<ResponsiveGridLayout
				layouts={layouts}
				margin={[10, 10]}
				breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
				cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}>
				<Div key="a">
					<Widget ></Widget>
				</Div>
				<Div key="b">
					<Widget ></Widget>
				</Div>
				<Div key="c">
					<QuoteWidget></QuoteWidget>
				</Div>
			</ResponsiveGridLayout >
		</StyledGrid>
	)
}