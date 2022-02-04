import styled from "styled-components"

export const test = {}

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	min-width: 5rem;
	min-height: 5rem;
`

export const Note = styled.textarea`
	resize: none;
	border: none;
	outline: none;
	background-color: var(--color-background);
	color: var(--color-on-background);
	margin-top: 1.5rem;
`

export const TaskInstance = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`