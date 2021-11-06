import { IconButton } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	height: 100%;
	width: 100%;
`

export const SettingsPanel = styled.div`
	background-color: #F6F5F5;
	height: 100%;
	width: 35rem;
	border-top-right-radius: 12px;
	border-bottom-right-radius: 12px;
	padding: 1rem;
`

export const WidgetPreview = styled.div`
	display: flex;
	align-items: center;
	background-color: lightgray;
`

export const Header = styled.div`
	display: flex;
	flex-direction: row;
	margin-bottom: 2rem;
`

export const HeaderClose = styled(IconButton)`
	align-self: flex-start;

`

export const HeaderText = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	margin-left: 1rem;
`

export const HeaderTitle = styled.div`
	font-size: 32px;
	font-weight: bold;
`

export const HeaderSubtitle = styled.div`

`;

export const SectionTitle = styled.div`
	color: #707070;
	font-weight: 600;
	font-size: 18px;
`