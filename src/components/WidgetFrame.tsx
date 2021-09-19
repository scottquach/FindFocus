import styled from 'styled-components'

export function WidgetFrame({ className, children }: any) {
	const Frame = styled.div`
		display: flex;
		padding: .5rem;
		background-color: var(--widget-background-color);
		border: 2px solid #000000;
		border-radius: 8px;
	`

	return (
		<Frame className={className}>
			{children}
		</Frame>
	)
}