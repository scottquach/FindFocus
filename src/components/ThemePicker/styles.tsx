import { IconButton } from "@mui/material";
import styled from "styled-components";
import { MenuWrapper } from "../../styles/MenuHeaders";

export const Wrapper = styled(MenuWrapper)`
	background-color: var(--color-background);
	width: 40rem;

    font-family: 'Outfit', sans-serif;
	height: auto;
	border-radius: 16px;
	margin-bottom: 1rem;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`

export const MenuHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    margin-bottom: 0.5rem;
`;


export const MenuTitle = styled.div`
    font-size: 18px;
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

export const ThemePalette = styled.div`
	height: 35px;
	width: 35px;
	border-radius: 50%;
	background-color: ${(props) => props.theme.colorBackground};
	border: 2px solid ${(props) => props.theme.colorOnBackground};
	cursor: pointer;

    &:active {
        transform: scale(.95);
    }
`

export const NeutralHeaders = styled.div`
	margin-bottom: .75rem;
	color: ${(props) => props.color}

`

export const ColorPalette = styled.div<{
	mainColor: string,
	borderColor?: string
}>`
	height: 35px;
	width: 35px;
	border-radius: 50%;
	background-color: ${(props) => props.mainColor};
	border: 2px solid ${(props) => props.borderColor};
	cursor: pointer;

    &:active {
        transform: scale(.95);
    }


`