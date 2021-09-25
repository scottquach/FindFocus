import styled from 'styled-components'

const Frame = styled.div`
	display: flex;
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