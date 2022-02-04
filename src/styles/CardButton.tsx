import styled from "styled-components";

export const CardButton = styled.div`
	color: var(--color-background);
    transition: all 50ms ease-in;
	border: 1px solid rgb(0,0,0,0);

	&:hover {
		box-shadow: var(--color-primary-shadow) 0px 4px 12px;
		transform: translateY(-2px);
        border: 1px solid var(--color-primary-light);
	}

	&:active {
        transform: scale(0.96);
        border: 1px solid var(--color-primary-dark);
	}
`