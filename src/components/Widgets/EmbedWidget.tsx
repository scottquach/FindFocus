import styled from "styled-components"
import { WidgetFrame } from "../WidgetFrame"


const Frame = styled(WidgetFrame)`
	display: flex;
	padding-top: 1rem;
	width: 100%;
`

const StyledIFrame = styled.iframe`
	border: none;
	width: 100%;
	height: 100%;
`

export function EmbedWidget() {

	return (
		<Frame>
			<StyledIFrame src="https://indify.co/widgets/live/weather/ALG4sgR33V2EJj5qaO3Q"></StyledIFrame>
		</Frame>
	)
}