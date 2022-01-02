import styled from "styled-components";

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	/* align-items: start; */
	width: 100%;
	height: 100%;
	padding: .75rem 1rem;
`

export const Display = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	gap: .75rem;
	/* padding: 1rem 1rem 0rem 1rem; */
`

export const Actions = styled.div`

`

export const SettingsContainer = styled.div`
    background-color: var(--color-background);
    border-radius: 12px;
	padding: 1rem;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`