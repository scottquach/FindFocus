import styled from 'styled-components'
import { WidgetHeader } from './WidgetHeader'

const Frame = styled.div`
	display: grid;
	grid-template-rows: 2.5rem auto;
	padding: .5rem;
	background-color: var(--widget-background-color);
	border: 2px solid #000000;
	border-radius: 8px;
`

export function WidgetFrame({ className, children }: any) {

	return (
		<Frame className={className}>
			{children}
		</Frame>
	)
}