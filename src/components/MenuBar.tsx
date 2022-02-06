import { Badge, Box, ClickAwayListener, IconButton, Popper, Zoom } from "@mui/material"
import ColorLensTwoToneIcon from '@mui/icons-material/ColorLensTwoTone';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import WidgetsIcon from '@mui/icons-material/Widgets';
import ImageIcon from '@mui/icons-material/Image';
import React from 'react';

import styled from "styled-components"
import { useState } from "react";
import { WidgetPicker } from "./WidgetPicker";
import { BackgroundPicker } from "./RoomPicker";
import { ThemePicker } from "./ThemePicker";
import { analytics } from "../firebase";
import { logEvent } from "firebase/analytics";
import useLocalStorage from "../hooks/useLocalStorage";

const PositionContainer = styled.div`
	display: flex;
	justify-content: center;
	position: absolute;
	/* bottom: .75rem; */
	bottom: 0;
	width: 100%;
`

const MenuLayout = styled.div`
	/* height: 4rem; */
	padding: .25rem 1rem;
	/* border-radius: var(--widget-border-radius); */
	border-top-right-radius: var(--widget-border-radius);
	border-top-left-radius: var(--widget-border-radius);
	background-color: var(--color-background);
	color: var(--color-primary);
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`

const MenuItems = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 1.5rem;
`

const ItemTitle = styled.div`
	font-size: 12px;
`

const Item = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	color: var(--color-primary);
	fill: var(--color-primary);

	div {
		font-size: 14px;
	}

	cursor: pointer;
`

enum MenuId {
	WidgetPicker = 'widget_picker',
	BackgroundPicker = 'background_picker',
	ThemePicker = 'theme_picker',
}

export function MenuBar() {
	const [menu, setMenu] = useState<MenuId | null>(null);
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const [onboarding, setOnboarding] = useLocalStorage('onboarding', {});

	const open = Boolean(anchorEl);
	const id = open ? 'transition-popper' : undefined;


	const showRoomOnboard = onboarding[MenuId.BackgroundPicker];
	const showWidgetOnboard = onboarding[MenuId.WidgetPicker];
	const showThemeOnboard = onboarding[MenuId.ThemePicker];

	const onMenuSelected = (event: React.MouseEvent<HTMLElement>, selectedMenu: MenuId) => {
		if (menu === selectedMenu) {
			onClose();
		} else {
			logEvent(analytics, selectedMenu);
			setAnchorEl(event.currentTarget);
			setMenu(selectedMenu);
			if (!onboarding[selectedMenu]) {
				setOnboarding({
					...onboarding,
					[selectedMenu]: true
				});
			}
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
					<Item onClick={(e) => onMenuSelected(e, MenuId.WidgetPicker)}>
						<IconButton size="small">
							<WidgetsIcon color="primary"></WidgetsIcon>
						</IconButton>
						<Badge color="primary" variant="dot" invisible={showWidgetOnboard}>
							<ItemTitle>Widgets</ItemTitle>
						</Badge>
					</Item>
					<Badge color="primary" badgeContent={<span>Try</span>} invisible={showRoomOnboard}>
						<Item onClick={(e) => onMenuSelected(e, MenuId.BackgroundPicker)}>
							<IconButton size="small">
								<MeetingRoomIcon color="primary"></MeetingRoomIcon>
							</IconButton>
							<ItemTitle>Rooms</ItemTitle>
						</Item>
					</Badge>
					<Item onClick={(e) => onMenuSelected(e, MenuId.ThemePicker)} >
						<IconButton size="small">
							<ColorLensTwoToneIcon color="primary"></ColorLensTwoToneIcon>
						</IconButton>
						<Badge color="primary" variant="dot" invisible={showThemeOnboard}>
							<ItemTitle>Theme</ItemTitle>
						</Badge>
					</Item>
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