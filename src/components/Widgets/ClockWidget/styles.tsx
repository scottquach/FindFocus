import styled from "styled-components"

export const test = {}

export const Frame = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	border-radius: 20px;
	/* background-color: var(--widget-background-color);
	opacity: .95; */
	width: 100%;
	height: 100%;


	/* color: white; */
	background-color: rgba(248, 237, 235, .80);
	backdrop-filter: saturate(50%) blur(15px) brightness(90%);
`