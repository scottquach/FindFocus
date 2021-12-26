import styled from "styled-components";

export const Content = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	min-width: 8rem;
	min-height: 5rem;
	padding: .5rem;
`

export const Note = styled.textarea`
	width: 100%;
	height: 100%;
	resize: none;
	border: none;
	outline: none;
	background-color: var(--color-background);
`