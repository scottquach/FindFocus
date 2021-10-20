import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const Content = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(4rem, 1fr));
	grid-gap: 1rem;
	padding: 1rem;
`

export const Noise = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 4rem;
`

export const NoiseIcon = styled(FontAwesomeIcon).attrs((props: any) => ({
	active: props.active
}))`
	cursor: pointer;
	color: ${({ active }) => active ? 'black' : 'gray'};
`