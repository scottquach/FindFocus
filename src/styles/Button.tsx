import styled from "styled-components";
import { Card } from "./Card";

export const Button = styled(Card)`
	&:hover {
		/* box-shadow: ${props => props.active ? 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.50) 0px 0px 0px 2px' : 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.20) 0px 0px 0px 1px'}; */
		transform: translateY(0);
	}

	&:active {
		transition: all 50ms ease-in-out;
		transform: scale(.96);
	}
`