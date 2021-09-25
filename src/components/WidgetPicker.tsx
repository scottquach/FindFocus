import { IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import styled from "styled-components";
import { WidgetFrame } from "./WidgetFrame";


const WidgetLayout = styled(WidgetFrame)`
	display: flex;
	width: 30rem;
	height: 35rem;
	padding: 1rem;
	background-color: var(--widget-background-color);
`

const MenuHeader = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	align-items: center;
	margin-bottom: auto;
`

const MenuTitle = styled.div`
	font-size: 18px;
	font-weight: bold;
`



export function WidgetPicker(close: any) {

	function closePicker() {
		close()
	}

	return (
		<WidgetLayout>
			<MenuHeader>
				<MenuTitle>Widgets</MenuTitle>
				<IconButton onClick={closePicker}>
					<CloseIcon></CloseIcon>
				</IconButton>
			</MenuHeader>
		</WidgetLayout>
	)

}