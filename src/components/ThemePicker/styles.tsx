import { IconButton } from "@mui/material";
import styled from "styled-components";
import { MenuWrapper } from "../../styles/MenuHeaders";
import { SketchPicker } from 'react-color';

export const Wrapper = styled(MenuWrapper)`
	background-color: var(--color-background);
	width: 40rem;

    font-family: 'Outfit', sans-serif;
	height: auto;
	border-radius: 16px;
	margin-bottom: 1rem;
	padding-bottom: 5rem;
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
	color: ${(props) => props.color}

`

export const ColorPalette = styled.div<{
	mainColor: string,
	borderColor?: string
}>`
	height: 30px;
	width: 30px;
	border-radius: 50%;
	background-color: ${(props) => props.mainColor};
	border: 2px solid ${(props) => props.borderColor};
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
    outline: 1px solid ${props => props.color};
	border: 3px solid var(--color-background);
	cursor: pointer;
`

export const ColorPicker = styled(SketchPicker)`
	box-shadow: none !important;
`