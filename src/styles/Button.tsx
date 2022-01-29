import styled from "styled-components";

export const Button = styled.div`
	background-color: var(--color-primary);
	transition: all .1s ease-in-out;
	color: var(--color-background);

	&:hover {
		/* transform: translateY(0); */
        box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
		/* transform: scale(.99); */
	}

	&:active {
		transition: all 25ms ease-in-out;
		transform: scale(.96);
	}
`