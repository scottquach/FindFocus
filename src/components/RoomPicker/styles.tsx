import styled from "styled-components";
import { Button } from "../../styles/Button";
import { Card } from "../../styles/HoverCard";
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
	/* gap: .25rem; */
`

export const CategoryWrapper = styled.div<{ active: boolean }>`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: ${({ active }) => active ? '.25rem' : '.5rem'};
	width: 9rem;
	height: 8rem;
	transition: all 75ms;

	&:hover {
		padding: .25rem;
	}
`

export const Category = styled.div<{ active: boolean }>`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
	width: 100%;
	border: ${({ active }) => active ? '1px solid var(--color-primary-light)' : ''};
	box-shadow: ${({ active }) => active ? 'rgba(41, 41, 41, 0.2) 0px 2px 8px 0px' : ''};
	border-radius: 8px;
	padding: .5rem;
	cursor: pointer;

	transition: all 50ms;

	&:hover {
		box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
	}

	&:active {
		transform: scale(.96);
	}
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

