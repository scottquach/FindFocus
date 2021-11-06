import { Box, Button, ClickAwayListener, Dialog, Fade, IconButton, Popper, Zoom } from "@mui/material"
import ColorLensTwoToneIcon from '@mui/icons-material/ColorLensTwoTone';
import WidgetsIcon from '@mui/icons-material/Widgets';
import ImageIcon from '@mui/icons-material/Image';

import styled from "styled-components"
import { useState } from "react";
import { WidgetPicker } from "./WidgetPicker";
import { BackgroundPicker } from "./RoomPicker";

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
	border-radius: 8px;
	/* background-color: var(--widget-background-color);
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; */
	background-color: #ffffffe2;
	backdrop-filter: saturate(50%) blur(15px);
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
		setAnchorEl(anchorEl ? null : event.currentTarget);
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
								</Box>
								{/* {menu === MenuId.ThemePicker && <ThemePicker ></ThemePicker>} */}
							</Zoom>
						</ClickAwayListener>
					)}
				</Popper>

				{/* <Dialog maxWidth="lg" open={open} onClose={() => setOpen(false)}>
					{menu === MenuId.WidgetPicker && <WidgetPicker close={() => setOpen(false)}></WidgetPicker>}
					{menu === MenuId.BackgroundPicker && <BackgroundPicker close={() => setOpen(false)}></BackgroundPicker>}
					{menu === MenuId.ThemePicker && <ThemePicker close={() => setOpen(false)}></ThemePicker>}
				</Dialog> */}
			</MenuLayout>
		</PositionContainer >
	)

}