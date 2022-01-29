import styled from "styled-components"


// export const ActiveContainer = styled.div`
// 	display: flex;
// 	justify-content: center;
// 	margin-top: 1.5rem;
// `

export const ActiveRoom = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	background-color: var(--color-surface);
	border-radius: 8px;
	width: 100%;
	height: 4rem;
	/* cursor: default; */
	/* box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.20) 0px 0px 0px 1px; */
`

export const RoomIcon = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 36px;
	height: 36px;
	margin: .5rem;

`

export const RoomMetaContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
`

export const ActiveRoomName = styled.div`
	font-weight: bold;
	font-size: 16px;
	margin-right: 1.25rem;
	line-height: .75rem;
`

export const ActiveRoomOriginal = styled.a`
	font-size: 12px;
	opacity: .75;
	text-decoration: none;
	color: inherit;
	/* line-height: 1rem; */

	&:hover {
		text-decoration: underline;
	}
`

export const ActionsContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: .75rem;
	margin-right: auto;
	margin-left: auto;
`

