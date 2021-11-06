import { IconButton } from "@mui/material";
import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import { WidgetFrame } from "../../WidgetFrame";
import ClockOne from "./ClockOne";
import ClockTwo from "./ClockTwo";
import SettingsIcon from '@mui/icons-material/Settings';
import { Frame } from "./styles";
import { WidgetSettings } from "../../WidgetSettings";

export default function ClockWidget({ widgetId }: { widgetId: string }) {
	const [dt, setDt] = useState(DateTime.local());
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const timerID = setInterval(
			() => setDt(DateTime.local()),
			1000
		);

		return () => {
			clearInterval(timerID);
		}
	}, [])

	return (
		<Frame>
			<ClockOne dt={dt}></ClockOne>
			{/* <ClockTwo dt={dt}></ClockTwo> */}
			<IconButton onClick={() => setOpen(!open)}>
				<SettingsIcon></SettingsIcon>
			</IconButton>
			<WidgetSettings
				settings={<div></div>}
				open={open} close={() => setOpen(false)}></WidgetSettings>
		</Frame>
	)
}