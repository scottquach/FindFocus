import styled from "styled-components";

export const Card = styled.div<{ active?: boolean }>`
	/* background-color: var(--color-surface); */
	transition: all .1s ease-in-out;
	box-shadow: ${props => props.active ? 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.50) 0px 0px 0px 2px' : ''};
	transform: ${props => props.active ? 'translateY(-4px)' : ''};

	&:hover {
		box-shadow: ${props => props.active ? 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.50) 0px 0px 0px 2px' : 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.20) 0px 0px 0px 1px'};
		transform: translateY(-4px);
	}

	&:active {
		transition: all 50ms ease-in-out;
		transform: scale(.96);
	}
`