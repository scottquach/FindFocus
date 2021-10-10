import { Box, Button, ClickAwayListener, Dialog, IconButton, Popper } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import ColorLensTwoToneIcon from '@mui/icons-material/ColorLensTwoTone';
import HelpTwoToneIcon from '@mui/icons-material/HelpTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import ImageIcon from '@mui/icons-material/Image';

import styled from "styled-components"
import { WidgetFrame } from "./WidgetFrame";
import { useState } from "react";
import { WidgetPicker } from "./WidgetPicker";
import { BackgroundPicker } from "./BackgroundPicker";

const MenuLayout = styled.div`
		position: absolute;
		bottom: 1rem;
		right: 1rem;
		display: flex;
		width: 25rem;
		height: 2.5rem;
		background-color: gray;
	`

const MenuItems = styled.div`
		display: flex;
		align-items: center;
		margin-left: auto;
	`


export function MenuBar() {
	// const [anchorEl, setAnchorEl] = useState(null);

	// const handleClick = (event: any) => {
	// 	setAnchorEl(anchorEl ? null : event.target);
	// };
	// const open = Boolean(anchorEl);
	const [open, setOpen] = useState(false);
	const id = open ? 'simple-popper' : undefined;

	return (
		<MenuLayout>
			<Button startIcon={<AddIcon></AddIcon>} onClick={() => setOpen(true)}>New Widget</Button>
			<MenuItems>
				<IconButton>
					<ImageIcon></ImageIcon>
				</IconButton>
				<IconButton>
					<ColorLensTwoToneIcon></ColorLensTwoToneIcon>
				</IconButton>
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

			<Dialog maxWidth="lg"  open={open} onClose={() => setOpen(false)}>
				{/* <WidgetPicker close={() => setOpen(false)}></WidgetPicker> */}
				<BackgroundPicker close={() => setOpen(false)}></BackgroundPicker>
			</Dialog>

			{/* <Popper id={id} open={open} anchorEl={anchorEl}>
				<WidgetPicker></WidgetPicker>
			</Popper> */}
		</MenuLayout>
	)

}