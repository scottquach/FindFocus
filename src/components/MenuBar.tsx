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
import { ThemePicker } from "./ThemePicker";

const MenuLayout = styled.div`
		position: absolute;
		bottom: 1rem;
		right: 1rem;
		display: flex;
		width: 25rem;
		height: 2.5rem;
		padding: .5rem .75rem;
		border-radius: 8px;
		border: 2px solid black;
		background-color: var(--widget-background-color);
		box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	`

const MenuItems = styled.div`
		display: flex;
		align-items: center;
		margin-left: auto;
	`
enum MenuId {
	WidgetPicker = 'widget_picker',
	BackgroundPicker = 'background_picker',
	ThemePicker = 'theme_picker',
}

export function MenuBar() {
	// const [anchorEl, setAnchorEl] = useState(null);

	const [menu, setMenu] = useState<MenuId | null>(null);

	// const handleClick = (event: any) => {
	// 	setAnchorEl(anchorEl ? null : event.target);
	// };
	// const open = Boolean(anchorEl);
	const [open, setOpen] = useState(false);
	const id = open ? 'simple-popper' : undefined;

	const onMenuSelected = (menu: MenuId) => {
		setMenu(menu);
		setOpen(true);
	}

	return (
		<MenuLayout>
			<Button startIcon={<AddIcon></AddIcon>} onClick={() => onMenuSelected(MenuId.WidgetPicker)}>New Widget</Button>
			<MenuItems>
				<IconButton onClick={() => onMenuSelected(MenuId.BackgroundPicker)}>
					<ImageIcon></ImageIcon>
				</IconButton>
				<IconButton onClick={() => onMenuSelected(MenuId.ThemePicker)}>
					<ColorLensTwoToneIcon></ColorLensTwoToneIcon>
				</IconButton>
				<IconButton>
					<HelpTwoToneIcon></HelpTwoToneIcon>
				</IconButton>
				<IconButton>
					<AccountCircleTwoToneIcon></AccountCircleTwoToneIcon>
				</IconButton>
			</MenuItems>

			<Dialog maxWidth="lg" open={open} onClose={() => setOpen(false)}>
				{menu === MenuId.WidgetPicker && <WidgetPicker close={() => setOpen(false)}></WidgetPicker>}
				{menu === MenuId.BackgroundPicker && <BackgroundPicker close={() => setOpen(false)}></BackgroundPicker>}
				{menu === MenuId.ThemePicker && <ThemePicker close={() => setOpen(false)}></ThemePicker>}
			</Dialog>

			{/* <Popper id={id} open={open} anchorEl={anchorEl}>
				<WidgetPicker></WidgetPicker>
			</Popper> */}
		</MenuLayout>
	)

}