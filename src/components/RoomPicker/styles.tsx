import styled from "styled-components";
import { Button } from "../../styles/Button";
import { CardButton } from "../../styles/CardButton";
import { MenuWrapper } from "../../styles/MenuHeaders";

export const Wrapper = styled(MenuWrapper)`
	background-color: var(--color-background);
	/* background-color: #ffffffc0;
	backdrop-filter: saturate(50%) blur(15px); */
	width: 50rem;
	/* height: 20rem; */
	border-radius: 16px;
	margin-bottom: 1rem;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`

export const CategoryList = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
	margin-bottom: 2rem;
	gap: .25rem;
`

export const CategoryWrapper = styled.div<{ active: boolean }>`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: ${({ active }) => active ? '.25rem' : '.5rem'};
	transition: all 75ms;

	&:hover {
		padding: .25rem;
	}
`

export const Category = styled(CardButton)<{ active: boolean }>`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 9rem;
	height: 8rem;
	border: ${({ active }) => active ? '1px solid var(--color-primary-light)' : ''};
	box-shadow: ${({ active }) => active ? 'var(--color-primary-shadow) 0px 4px 12px' : ''};
	border-radius: 12px;
	padding: .5rem;
	cursor: pointer;

    /* transition: all 50ms ease-in;

	&:hover {
		transform: translateY(-2px);
		box-shadow: var(--color-primary-shadow) 0px 4px 12px;
        border: 1px solid var(--color-primary-light);
	}

	&:active {
		transform: scale(.96);
        border: 1px solid var(--color-primary-dark); */
	/* } */
`;

export const CategoryIcon = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: var(--color-primary-light);
	border-radius: 32px;
	width: 44px;
	height: 44px;
	padding: .75rem;
	margin: 1rem 1rem .5rem 1rem;
`;

export const CategoryName = styled.div`
	font-weight: 500;
	color: var(--color-primary);
`;

