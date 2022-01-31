import { IconButton } from "@mui/material";
import styled from "styled-components";
import { MenuWrapper } from "../../styles/MenuHeaders";
import { SketchPicker } from 'react-color';

export const Wrapper = styled(MenuWrapper)`
	display: flex;
	flex-direction: column;
	background-color: var(--color-background);
	width: 40rem;
	height: 100%;
	padding: 1rem;

    font-family: 'Outfit', sans-serif;
	border-radius: 16px;
	margin-bottom: 1rem;
	/* padding-bottom: 5rem; */
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`

export const MenuHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    margin-bottom: 1rem;
`;


export const MenuTitle = styled.div`
    font-size: 24px;
    font-weight: bold;
	color: var(--color-on-background);
`;

export const Themes = styled.div`
	display: flex;
	align-items: center;
	gap: .75rem;
	height: 100%;
	width: 100%;
	margin-bottom: 1rem;
`

export const NeutralHeaders = styled.div`
	margin-bottom: .5rem;
	font-weight: 500;
	font-size: 18px;
	color: var(--color-on-background)
`

export const NeutralBackground = styled.div`
	/* background-color: ${props => props.color}; */
	/* padding: 1rem; */
	border-radius: 8px;
	/* margin-bottom: 1.5rem; */
	/* opacity: .9; */
`

export const ColorPalette = styled.div<{
	mainColor: string,
	// borderColor?: string
}>`
	height: 30px;
	width: 30px;
	border-radius: 50%;
	background-color: ${(props) => props.mainColor};
	border: 1px solid var(--color-on-background);
	cursor: pointer;

    &:active {
        transform: scale(.95);
    }
`

export const ColorChip = styled.div<{
	color: string
}>`
	height: 24px;
	width: 24px;
	background-color: ${props => props.color};
	border-radius: 6px;
	/* padding: 8px; */
    /* outline: 1px solid ${props => props.color}; */
	border: 2px solid var(--color-border);
	cursor: pointer;
`

export const ColorPicker = styled(SketchPicker)`
	box-shadow: none !important;
`