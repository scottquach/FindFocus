import styled from 'styled-components'
import { WidgetHeader } from './WidgetHeader'

const Frame = styled.div`
	display: grid;
	grid-template-rows: 2.5rem auto;
	background-color: var(--widget-background-color);
	border: 2px solid #000000;
	/* border: 2px solid white; */
	border-radius: 8px;
	height: 100%;
	width: 100%;
`

const WidgetContent = styled.div`
	padding: .25rem;
`

// export function WidgetFrame({ className, children, header }: any) {

// 	return (
// 		<Frame className={className}>
// 			{
// 				header
// 			}
// 		</Frame>
// 	)
// }

export function WidgetFrame({ className, widgetId, children }: any) {
	return (
		<Frame className={className}>
			<WidgetHeader widgetId={widgetId}></WidgetHeader>
			<WidgetContent>
				{children}
			</WidgetContent>
		</Frame>
	)
}