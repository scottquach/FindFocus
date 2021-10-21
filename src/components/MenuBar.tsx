import { Box, Button, ClickAwayListener, Dialog, IconButton, Popper } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import ColorLensTwoToneIcon from '@mui/icons-material/ColorLensTwoTone';
import HelpTwoToneIcon from '@mui/icons-material/HelpTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import WidgetsIcon from '@mui/icons-material/Widgets';
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
	height: 3.5rem;
	padding: .25rem 1rem;
	border-radius: 8px;
	background-color: var(--widget-background-color);
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`

const MenuItems = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 1.5rem;
`
const Item = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	div {
		font-size: 14px;
	}

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
			<MenuItems>
				<Item>
					<IconButton onClick={() => onMenuSelected(MenuId.WidgetPicker)} size="small">
						<WidgetsIcon></WidgetsIcon>
					</IconButton>
					<div>Widgets</div>
				</Item>
				<Item>
					<IconButton onClick={() => onMenuSelected(MenuId.BackgroundPicker)} size="small">
						<ImageIcon></ImageIcon>
					</IconButton>
					<div>Rooms</div>
				</Item>
				<Item>
					<IconButton onClick={() => onMenuSelected(MenuId.ThemePicker)} size="small">
						<ColorLensTwoToneIcon></ColorLensTwoToneIcon>
					</IconButton>
					<div>Theme</div>
				</Item>
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