import styled from "styled-components";

export const Button = styled.div`
	background-color: var(--color-primary);
	/* transition: all .1s ease-in-out; */
	color: var(--color-background);
    transition: all 50ms ease-in;

	&:hover {
		box-shadow: var(--color-primary-shadow) 0px 4px 12px;
		/* transform: translateY(-2px); */
        /* border: 1px solid var(--color-primary-light); */
	}

	&:active {
        transform: scale(0.96);
        /* border: 1px solid var(--color-primary-dark); */
	}
`