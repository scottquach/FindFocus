import { Box, Button, ClickAwayListener, IconButton, Popper } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import ColorLensTwoToneIcon from '@mui/icons-material/ColorLensTwoTone';
import HelpTwoToneIcon from '@mui/icons-material/HelpTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';

import styled from "styled-components"
import { WidgetFrame } from "./WidgetFrame";
import { useState } from "react";
import { WidgetPicker } from "./WidgetPicker";

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


console.log('THIS IS CALLED');

export function MenuBar() {
	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = (event: any) => {
		setAnchorEl(anchorEl ? null : event.target);
	};
	const open = Boolean(anchorEl);
	const id = open ? 'simple-popper' : undefined;

	return (
		<MenuLayout>
			<Button startIcon={<AddIcon></AddIcon>} onClick={handleClick}>New Widget</Button>
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



			<Popper id={id} open={open} anchorEl={anchorEl}>
				{/* <Box> */}
				<WidgetPicker></WidgetPicker>
				{/* </Box> */}
			</Popper>
		</MenuLayout>
	)

}