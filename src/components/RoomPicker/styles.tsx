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

export const RoomList = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
	margin-bottom: 2rem;
	/* gap: .25rem; */
`

export const RoomWrapper = styled.div<{ active: boolean }>`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: ${({ active }) => active ? '.25rem' : '.5rem'};
	width: 7rem;
	height: 8rem;
	transition: all 75ms;

	&:hover {
		padding: .25rem;
	}
`

export const Room = styled.div<{ active: boolean }>`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
	width: 100%;
	border: ${({ active }) => active ? '1px solid black' : ''};
	box-shadow: ${({ active }) => active ? 'rgba(41, 41, 41, 0.2) 0px 2px 8px 0px' : ''};
	border-radius: 8px;
	/* background-color: var(--color-surface); */
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

export const RoomIcon = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: var(--color-primary);
	border-radius: 32px;
	width: 42px;
	height: 42px;
	padding: .75rem;
	margin: 1rem;
`;

export const RoomName = styled.div`
	font-weight: 500;
	color: var(--color-primary);
`;

// export const ActiveContainer = styled.div`
// 	display: flex;
// 	justify-content: center;
// 	margin-top: 1.5rem;
// `

// export const ActiveRoom = styled.div`
// 	display: flex;
// 	align-items: center;
// 	justify-content: flex-start;
// 	background-color: var(--color-surface);
// 	border-radius: 8px;
// 	width: 30rem;
// 	height: 4rem;
// 	cursor: default;
// 	box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.20) 0px 0px 0px 1px;
// `

// export const ActiveRoomName = styled.div`
// 	font-weight: bold;
// 	font-size: 18px;
// 	margin-right: 1.25rem;
// `

// export const ActiveRoomOriginal = styled.a`
// 	font-size: 14px;
// 	opacity: .75;
// 	text-decoration: none;
// 	color: inherit;

// 	&:hover {
// 		text-decoration: underline;
// 	}
// `

// export const ActionsContainer = styled.div`
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	margin-top: .75rem;
// 	margin-right: auto;
// 	margin-left: auto;
// `




