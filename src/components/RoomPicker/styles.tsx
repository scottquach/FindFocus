import styled from "styled-components";
import { MenuWrapper } from "../../GlobalStyles";

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

export const Room = styled.div<
	{ active: boolean }
	>`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 6rem;
	background-color: var(--color-surface);
	/* border: 2px solid var(--color-border); */
	border-radius: 8px;
	padding: .5rem;
	cursor: pointer;
	transition: all .1s ease-in-out;
	box-shadow: ${props => props.active ? 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.50) 0px 0px 0px 2px' : ''};
	transform: ${props => props.active ? 'translateY(-4px)' : ''};

	&:hover {
		box-shadow: ${props => props.active ? 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.50) 0px 0px 0px 2px' : 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.20) 0px 0px 0px 1px'};
		transform: translateY(-4px);
	}
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
	margin-top: 4rem;
`

export const ActiveRoom = styled.div`
	display: flex;
	align-items: center;
	background-color: var(--color-surface);
	border-radius: 8px;
	width: 20rem;
	cursor: default;
	box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.20) 0px 0px 0px 1px;
`

export const ActiveRoomName = styled.div`
	font-weight: bold;
	font-size: 18px;
`

export const ActiveRoomOriginal = styled.div`
	font-size: 14px;
	opacity: .75;
`











// export const SectionLayout = styled.div`
// 	display: flex;
// 	align-items: center;
// 	justify-content: flex-start;
// 	margin-bottom: 1rem;
// `

// export const SectionTitle = styled.div`
// 	font-size: 14px;
// 	font-weight: 500;
// 	opacity: .75;
// 	margin-left: .25rem;
// `

// export const PresetGrid = styled.div`
// 	display: grid;
//     grid-template-columns: repeat(auto-fill, 9rem);
// 	grid-gap: 1rem;
// 	width: 100%;
// 	margin-bottom: 1.5rem;
// `

// export const ImagePresetGrid = styled(PresetGrid)`
//     grid-template-columns: repeat(auto-fill, 11rem);
// `

// export const ImagePresetContainer = styled.div`
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// 	padding: .5rem;
// 	background-color: var(--color-gray-light);
// 	border-radius: 8px;
// 	height: 6rem;
// 	width: 10rem;
// 	transition: all .1s;

// 	:hover {
// 		background-color: var(--color-gray);
// 	}
// `

// export const ImagePreset = styled.img`
// 	height: 100%;
// 	width: 100%;
// 	border-radius: 6px;
// 	object-fit: cover;
// 	cursor: pointer;
// 	box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
// `

// export const ColorPresetContainer = styled(ImagePresetContainer)`
// 	height: 3.5rem;
// 	width: 3.5rem;
// `

// export const ColorPreset = styled.div`
// 	height: 100%;
// 	width: 100%;
// 	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
// 	border-radius: 8px;
// 	background-color: ${props => props.color};
// 	cursor: pointer;
// 	border: 1px solid #9E9E9E;
// `


// export const CustomGrid = styled.div`
// 	display: grid;
// 	grid-template-columns: 1fr 1fr;
// 	grid-gap: 1rem;
// `

// export const Custom = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	padding: .5rem;
// 	border: 1px solid #9A9A9A;
// 	border-radius: 8px;
// 	flex: 1;
// `

// export const CustomHeader = styled.div`
// 	font-weight: 500;
// 	line-height: 1;
// `
// export const CustomDescription = styled.div`
// 	font-size: 16px;
// 	margin-bottom: 1rem;
// `

// export const VideoName = styled.div`
// 	transition: all .2s;
// 	position: absolute;
// 	bottom: 0;
// 	display: flex;
// 	align-items: center;
// 	border-top-left-radius: 12px;
// 	border-top-right-radius: 4px;
// 	/* padding: 0 .5rem; */
// 	font-size: 18px;
// 	font-weight: 600;
// 	width: 10rem;
// 	height: 3rem;
// 	z-index: 2;
// 	background: white;
// 	/* transform: translateY(20px); */

// 	span:first-child {
// 		margin-right: .5rem;
// 		margin-left: .5rem;
// 	}

// 	span:last-child {
// 	}
// `

// export const VideoRoom = styled.div< { selected?: boolean }>`
// 	position: relative;
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: flex-end;
// 	width: 9rem;
// 	height: 12rem;
// 	border-radius: 12px;
// 	background-color: lightgray;
// 	cursor: pointer;
// 	z-index: 0;
// 	/* border: 2px solid black; */
// 	overflow: hidden;
// 	transition: all .2s;
// 	transform: ${props => props.selected ? 'translateY(-6px)' : ''};

// 	${VideoName} {
// 		height: ${props => props.selected ? '3rem' : ''};
// 	}

// 	:hover ${VideoName} {
// 		/* transform: translateY(-10px) */
// 		height: 4rem;
// 	}

// 	:hover {
// 		transform: translateY(-6px);
// 	}
// `

// export const VideoImage = styled.img`
// 	width: 100%;
// 	height: 100%;
// 	/* height: calc(100% - 2.75rem); */
// 	object-fit: cover;
// 	border-radius: 8px;
// `
