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
	bottom: .75rem;
	width: 100%;
`

const MenuLayout = styled.div`
	height: 4rem;
	padding: .25rem 1rem;
	border-radius: var(--widget-border-radius);
	background-color: var(--color-background);
	color: var(--color-on-background);
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`

const MenuItems = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 1.5rem;
`
const Item = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	color: var(--color-on-background);
	fill: var(--color-on-background);

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

	const onMenuSelected = (event: React.MouseEvent<HTMLElement>, selectedMenu: MenuId) => {
		if (menu === selectedMenu) {
			onClose();
		} else {
			setAnchorEl(event.currentTarget);
			setMenu(selectedMenu);
		}
	}

	const onClose = () => {
		setAnchorEl(null);
		setMenu(null);
	}

	const onClickAway = (menu: MenuId | null) => {
		onClose();
	}

	return (
		<PositionContainer>
			<MenuLayout>
				<MenuItems>
					<Item>
						<IconButton onClick={(e) => onMenuSelected(e, MenuId.WidgetPicker)} size="small">
							<WidgetsIcon style={{fill: "var(--color-on-background)"}}></WidgetsIcon>
						</IconButton>
						<div>Widgets</div>
					</Item>
					<Item>
						<IconButton onClick={(e) => onMenuSelected(e, MenuId.BackgroundPicker)} size="small">
							<ImageIcon style={{fill: "var(--color-on-background)"}}></ImageIcon>
						</IconButton>
						<div>Rooms</div>
					</Item>
					{/* <Item>
						<IconButton onClick={(e) => onMenuSelected(e, MenuId.ThemePicker)} size="small">
							<ColorLensTwoToneIcon style={{fill: "var(--color-on-background)"}}></ColorLensTwoToneIcon>
						</IconButton>
						<div>Theme</div>
					</Item> */}
				</MenuItems>


				<Popper id={id} open={open} anchorEl={anchorEl} transition>
					{({ TransitionProps }) => (
						<Zoom {...TransitionProps} timeout={100}>
							<Box>
								{menu === MenuId.WidgetPicker &&
									<ClickAwayListener onClickAway={() => onClickAway(menu)}>
										<Box>
											<WidgetPicker close={() => onClose()}></WidgetPicker>
										</Box>
									</ClickAwayListener>
								}
								{menu === MenuId.BackgroundPicker &&
									<ClickAwayListener onClickAway={() => onClickAway(menu)}>
										<Box>
											<BackgroundPicker close={() => onClose()}></BackgroundPicker>
										</Box>
									</ClickAwayListener>
								}
								{menu === MenuId.ThemePicker &&
									<ClickAwayListener onClickAway={() => onClickAway(menu)}>
										<Box>
											<ThemePicker close={() => onClose()}></ThemePicker>
										</Box>
									</ClickAwayListener>
								}
							</Box>
						</Zoom>
					)}
				</Popper>
			</MenuLayout>
		</PositionContainer >
	)

}