import styled from 'styled-components'
import { WidgetHeader } from './WidgetHeader'

const Frame = styled.div`
	background-color: var(--color-background);
	/* border: 2px solid white; */

	border-radius: var(--widget-border-radius);
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;

	/* color: white; */
	/* background-color: #ffffffd8;
	backdrop-filter: saturate(50%) blur(15px); */
`

const WidgetContent = styled.div`
	display: flex;
	max-width: 100%;
	max-height: 100%;
	width: 100%;
	flex: 1;
`

export function WidgetFrame({ className, widgetId, children }: any) {
	return (
		<Frame className={className}>
			<WidgetHeader widgetId={widgetId}></WidgetHeader>
			<WidgetContent className="NonDraggable">
				{children}
			</WidgetContent>
		</Frame>
	)
}