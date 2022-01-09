import { IconButton, Menu, MenuItem } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import * as S from "./styles";
import { WidgetType } from "../../models/widget-types.enum";
import { QueueMusicOutlined, StickyNote2Outlined } from "@mui/icons-material";
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import useAddWidget from "../../hooks/useAddWidget";
import { useState } from "react";
import { createWidget } from "../../models/widget.model";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { logEvent } from "firebase/analytics";
import { analytics } from "../../firebase";

enum WidgetCategories {
	Audio = 'audio',
	Embed = 'embed'
}

const AudioWidgets = [
	{
		title: 'Spotify',
		description: 'Embed a spotify playlist or song',
		type: WidgetType.Spotify
	},
	{
		title: 'Ambient',
		description: 'Ambient',
		type: WidgetType.Ambient
	},
]

const ProductivityWidgets = [
	{
		title: 'Clock',
		description: 'Display the time',
		type: WidgetType.Clock
	},
];
const InspirationWidgets = [
	{
		title: 'Quote',
		description: 'See a new quote every day!',
		type: WidgetType.Quote
	}
];



export function WidgetPicker({ close }: any) {
	const addWidget = useAddWidget();

	function closePicker() {
		// console.log('closed called')
		close()
	}

	const create = (type: WidgetType) => {
		const newWidget = createWidget(type);
		addWidget(newWidget);
	}

	return (
		<S.Wrapper>
			<S.MenuHeader>
				<S.MenuTitle>Widgets</S.MenuTitle>
				<IconButton onClick={closePicker}>
					<CloseIcon style={{ fill: "var(--color-on-background)" }}></CloseIcon>
				</IconButton>
			</S.MenuHeader>

			<S.Widgets>
				<ClockWidget ></ClockWidget>
				<S.Widget onClick={() => create(WidgetType.Quote)}>
					<FormatQuoteIcon></FormatQuoteIcon>
					<div>Quote</div>
				</S.Widget>
				<S.Widget onClick={() => create(WidgetType.Spotify)}>
					<QueueMusicOutlined></QueueMusicOutlined>
					<div>Spotify</div>
				</S.Widget>
				<S.Widget onClick={() => create(WidgetType.StickyNote)}>
					<StickyNote2Outlined></StickyNote2Outlined>
					<div>Note</div>
				</S.Widget>
				<S.Widget onClick={() => create(WidgetType.Weather)}>
					<CloudOutlinedIcon></CloudOutlinedIcon>
					<div>Weather</div>
				</S.Widget>
				<S.Widget onClick={() => create(WidgetType.Timer)}>
					<AccessAlarmIcon></AccessAlarmIcon>
					<div>Timer</div>
				</S.Widget>
			</S.Widgets>

			<a className="text-sm opacity-70 ml-1 mt-1 cursor-pointer hover:underline" href="https://forms.gle/i9RJxQNyfVbYrM1M6" target="_blank" rel="noreferrer">
				<span>Suggest new widgets</span>
				<FontAwesomeIcon icon={faExternalLinkAlt} className="opacity-70 ml-1" size="xs"></FontAwesomeIcon>
			</a>
		</S.Wrapper>
	)
}

function ClockWidget() {
	const addWidget = useAddWidget();
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const handleClick = (event: any) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const create = (clockType: string) => {
		logEvent(analytics, `create_${clockType}`)
		const newWidget = createWidget(WidgetType.Clock, { clockType: clockType });
		addWidget(newWidget);
		handleClose();
	}

	return (
		<div>
			<S.Widget onClick={handleClick}>
				<AccessTimeIcon></AccessTimeIcon>
				<div>Clock</div>
			</S.Widget>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button',
				}}
			>
				<MenuItem onClick={() => create('clockOne')}>Clock V1</MenuItem>
				<MenuItem onClick={() => create('clockTwo')}>Clock V2</MenuItem>
			</Menu>
		</div>
	)
}