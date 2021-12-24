import styled from "styled-components";
import { MenuWrapper } from "../../GlobalStyles";
import { Card } from "../../styles/card";

export const Wrapper = styled(MenuWrapper)`
	background-color: var(--color-background);
	/* background-color: #ffffffc0;
	backdrop-filter: saturate(50%) blur(15px); */
	width: 50rem;
	/* height: 20rem; */
	border-radius: 16px;
	margin-bottom: 1rem;
`

export const RoomList = styled.div`
	display: flex;
	justify-content: center;
	gap: .75rem;
`

export const Room = styled(Card)`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 6rem;
	background-color: var(--color-surface);
	/* border: 2px solid var(--color-border); */
	border-radius: 8px;
	padding: .5rem;
	cursor: pointer;
`;

export const RoomIcon = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: var(--color-secondary);
	border-radius: 32px;
	width: 24px;
	height: 24px;
	padding: .75rem;
	margin: 1rem;
`;

export const RoomName = styled.div`
	font-weight: bold;
	color: var(--color-on-surface);
`;

export const ActiveContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 2rem;
`

export const ActiveRoom = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	background-color: var(--color-surface);
	border-radius: 8px;
	width: 26rem;
	height: 4rem;
	cursor: default;
	box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.20) 0px 0px 0px 1px;
`

export const ActiveRoomName = styled.div`
	font-weight: bold;
	font-size: 18px;
	/* margin-top: .5rem; */
`

export const ActiveRoomOriginal = styled.a`
	font-size: 14px;
	opacity: .75;
	text-decoration: none;
	color: inherit;

	&:hover {
		text-decoration: underline;
	}
`

export const VolumeContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-right: auto;
	margin-left: auto;
`






