import { Button, IconButton } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import ColorLensTwoToneIcon from '@mui/icons-material/ColorLensTwoTone';
import HelpTwoToneIcon from '@mui/icons-material/HelpTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import styled from "styled-components"
import { WidgetFrame } from "./WidgetFrame";



export function MenuBar() {
	const MenuLayout = styled(WidgetFrame)`
		position: absolute;
		bottom: 1rem;
		right: 1rem;
		display: flex;
		width: 25rem;
		height: 2.5rem;
	`

	const MenuItems = styled.div`
		display: flex;
		align-items: center;
		margin-left: auto;
	`
	return (
		<MenuLayout>
			<Button startIcon={<AddIcon></AddIcon>}>New Widget</Button>
			<MenuItems>
				<IconButton>
					<ColorLensTwoToneIcon></ColorLensTwoToneIcon>
				</IconButton>
				<IconButton>
					<HelpTwoToneIcon></HelpTwoToneIcon>
				</IconButton>
				<IconButton>
					<AccountCircleTwoToneIcon></AccountCircleTwoToneIcon>
				</IconButton>
			</MenuItems>
		</MenuLayout>
	)

}