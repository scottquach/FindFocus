import { Box, ClickAwayListener, IconButton, Popper, Zoom } from "@mui/material"
import ColorLensTwoToneIcon from '@mui/icons-material/ColorLensTwoTone';
import WidgetsIcon from '@mui/icons-material/Widgets';
import ImageIcon from '@mui/icons-material/Image';
import React from 'react';

import styled from "styled-components"
import { useState } from "react";
import { WidgetPicker } from "./WidgetPicker";
import { BackgroundPicker } from "./RoomPicker";
import { ThemePicker } from "./ThemePicker";

const PositionContainer = styled.div`
	display: flex;
	justify-content: center;
	position: absolute;
	bottom: 1rem;
	width: 100%;
`

const MenuLayout = styled.div`
	height: 3.5rem;
	padding: .25rem 1rem;
	border-radius: var(--widget-border-radius);
	background-color: white;
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
	const [menu, setMenu] = useState<MenuId | null>(null);

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const open = Boolean(anchorEl);
	const id = open ? 'transition-popper' : undefined;


	// const [open, setOpen] = useState(false);
	// const id = open ? 'simple-popper' : undefined;

	const onMenuSelected = (event: React.MouseEvent<HTMLElement>, menu: MenuId) => {
		// setAnchorEl(anchorEl ? null : event.currentTarget);
		setAnchorEl(event.currentTarget);
		setMenu(menu);
		// setOpen(true);
	}

	const onClose = (menu: MenuId) => {
		setAnchorEl(null);
		setMenu(null);
	}

	return (
		<PositionContainer>
			<MenuLayout>
				<MenuItems>
					<Item>
						<IconButton onClick={(e) => onMenuSelected(e, MenuId.WidgetPicker)} size="small">
							<WidgetsIcon></WidgetsIcon>
						</IconButton>
						<div>Widgets</div>
					</Item>
					<Item>
						<IconButton onClick={(e) => onMenuSelected(e, MenuId.BackgroundPicker)} size="small">
							<ImageIcon></ImageIcon>
						</IconButton>
						<div>Rooms</div>
					</Item>
					<Item>
						<IconButton onClick={(e) => onMenuSelected(e, MenuId.ThemePicker)} size="small">
							<ColorLensTwoToneIcon></ColorLensTwoToneIcon>
						</IconButton>
						<div>Theme</div>
					</Item>
				</MenuItems>


				<Popper id={id} open={open} anchorEl={anchorEl} transition>
					{({ TransitionProps }) => (
						<ClickAwayListener onClickAway={() => setAnchorEl(null)}>
							<Zoom {...TransitionProps} timeout={100}>
								<Box>
									{menu === MenuId.WidgetPicker && <WidgetPicker close={() => onClose(MenuId.WidgetPicker)}></WidgetPicker>}
									{menu === MenuId.BackgroundPicker && <BackgroundPicker close={() => onClose(MenuId.BackgroundPicker)}></BackgroundPicker>}
									{menu === MenuId.ThemePicker && <ThemePicker close={() => onClose(MenuId.ThemePicker)}></ThemePicker>}
								</Box>
							</Zoom>
						</ClickAwayListener>
					)}
				</Popper>
			</MenuLayout>
		</PositionContainer >
	)

}