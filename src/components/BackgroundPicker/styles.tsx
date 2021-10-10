import styled from "styled-components";

export const Wrapper = styled.div`
	padding: 1rem;
	width: 50rem;
	height: 40rem;

`

export const MenuTitle = styled.div`
	font-size: 24px;
	font-weight: 600;
	margin-bottom: 1rem;
`

export const SectionTitle = styled.div`
	font-size: 14px;
	font-weight: 500;
	margin-bottom: .25rem;
	opacity: .75;
`

export const PresetGrid = styled.div`
	display: grid;
    grid-template-columns: repeat(auto-fill, 4rem);
	grid-gap: 1rem;
	width: 100%;
	margin-bottom: 1.5rem;
`

export const Preset = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 4rem;
	height: 4rem;
	border-radius: 8px;
	border: 1px solid var(--color-gray);
	cursor: pointer;
	transition: all .1s;

	:hover {
		background-color: var(--color-gray-light);
	}

	&.selected {
		border: 2px solid var(--color-primary);
		background-color: var(--color-primary-light);
		color: var(--color-primary)
	}
`

export const ImagePresetGrid = styled(PresetGrid)`
    grid-template-columns: repeat(auto-fill, 11rem);
`

export const ImagePresetContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: .5rem;
	background-color: var(--color-gray-light);
	border-radius: 8px;
	height: 6rem;
	width: 10rem;
	transition: all .1s;

	:hover {
		background-color: var(--color-gray);
	}
`

export const ImagePreset = styled.img`
	height: 100%;
	width: 100%;
	border-radius: 6px;
	object-fit: none;
	cursor: pointer;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`

export const CustomGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 1rem;
`

export const Custom = styled.div`
	display: flex;
	flex-direction: column;
	padding: .5rem;
	border: 1px solid #9A9A9A;
	border-radius: 8px;
	flex: 1;
`

export const CustomHeader = styled.div`
	font-weight: 500;
	line-height: 1;
`
export const CustomDescription = styled.div`
	font-size: 16px;
	margin-bottom: 1rem;
`
