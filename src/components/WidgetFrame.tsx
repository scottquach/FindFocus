import styled from 'styled-components'

const Frame = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	padding: .5rem;
	background-color: var(--widget-background-color);
	border: 2px solid #000000;
	border-radius: 8px;
`

export function WidgetFrame() {
	return (
		<Frame>
			This is a frame
		</Frame>
	)
}