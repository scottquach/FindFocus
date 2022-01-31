import styled from "styled-components";

export const Preset = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	width: 10rem;
	height: 8rem;
	/* border: 1px solid var(--color-border); */
	border-radius: 8px;
	padding-top: .5rem;
	cursor: pointer;
	gap: .5rem;
	padding-bottom: .5rem;

	transition: all 50ms;

	&:hover {
		box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
	}

	&:active {
		/* border: 1px solid var(--color-border);
		transform: scale(.96); */
	}
`

export const PresetName = styled.div`
	font-weight: 500;
	line-height: 1.1rem;
	text-align: center;
	color: var(--color-primary)
`


export const PresetPrimary = styled.div<{
	color: string
}>`
	height: 1.5rem;
	flex: 1;
	border-radius: 4px;
	margin-bottom: .25rem;
	border: 1px solid var(--color-border);
	background-color: ${(props) => props.color};
	cursor: pointer;
`

export const PresetBackground = styled.div<{
	color: string
}>`
	height: 1.5rem;
	flex: 1;
	border-radius: 4px;
	background-color: ${(props) => props.color};
	border: 1px solid var(--color-border);
	cursor: pointer;
`