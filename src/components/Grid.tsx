import { ExampleWidget } from "./ExampleWidget";
import GridLayout from 'react-grid-layout';
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

export function Grid() {

	const layout = [
		{ i: 'a', x: 0, y: 0, w: 1, h: 2 },
		{ i: 'b', x: 1, y: 0, w: 3, h: 2 },
		{ i: 'c', x: 1, y: 0, w: 3, h: 2 },
	];

	return (
		<GridLayout layout={layout} cols={10} rowHeight={50} width={1200} margin={[10, 10]}>
			<Div key="a">
				<Widget ></Widget>
			</Div>
			<Div key="b">
				<Widget ></Widget>
			</Div>
			<Div key="c">
				<QuoteWidget></QuoteWidget>
			</Div>
		</GridLayout>
	)
}