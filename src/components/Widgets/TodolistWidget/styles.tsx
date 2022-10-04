import styled from "styled-components"

export const test = {}

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	width: 100%;
	height: 100%;
	min-width: 5rem;
	min-height: 5rem;
`

export const Note = styled.input<{ done: boolean }>`
	resize: none;
	border: none;
	outline: none;
	width: 100%;
	background-color: var(--color-background);
	color: var(--color-on-background);
	overflow: hidden;
	text-overflow: ellipsis;
	text-decoration: ${props => props.done ? 'line-through' : ''};
`

export const TaskInstance = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 100%;
	justify-content: center;
`

export const Button = styled.button`
	/* background-color: var(--color-primary-light); */
	color: var(--color-primary-light);
	margin-top: .5rem;
	margin-bottom: .5rem;
	/* border: solid 1px var(--color-primary); */
	border-radius: 8px;
	padding: 0 .5rem;
`