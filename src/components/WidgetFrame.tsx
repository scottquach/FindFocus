import styled from 'styled-components'
import { WidgetHeader } from './WidgetHeader'

const Frame = styled.div`
	/* display: grid; */
	/* grid-template-rows: 2.5rem auto; */
	background-color: var(--widget-background-color);
	/* border: 2px solid #000000; */
	/* border: 2px solid white; */

	border-radius: 20px;
	/* background-color: var(--widget-background-color);
	opacity: .95; */
	width: 100%;
	height: 100%;


	/* color: white; */
	background-color: #ffffffd8;
	backdrop-filter: saturate(50%) blur(15px);
`

const WidgetContent = styled.div`
	max-width: 100%;
	max-height: 100%;
	width: 100%;
	height: 100%;
`

export function WidgetFrame({ className, widgetId, children }: any) {
	return (
		<Frame className={className}>
			{/* <WidgetHeader widgetId={widgetId}></WidgetHeader> */}
			<WidgetContent className="NonDraggable">
				{children}
			</WidgetContent>
		</Frame>
	)
}