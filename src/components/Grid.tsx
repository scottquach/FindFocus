import { ExampleWidget } from "./ExampleWidget";
import GridLayout from 'react-grid-layout';
import { WidgetFrame } from "./WidgetFrame";
import styled from "styled-components";

const Div = styled.div`
	display: flex;
`


export function Grid() {

	const layout = [
		{ i: 'a', x: 0, y: 0, w: 1, h: 2 },
		{ i: 'b', x: 1, y: 0, w: 3, h: 2 },
	];

	return (
		<GridLayout layout={layout} cols={10} rowHeight={50} width={1200} margin={[10,10]}>
			<Div key="a">
				<WidgetFrame ></WidgetFrame>
			</Div>
			<Div key="b">
				<WidgetFrame ></WidgetFrame>
			</Div>
		</GridLayout>
	)
}