import { FormControl, IconButton, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import { WidgetFrame } from "../../WidgetFrame";
import ClockOne from "./ClockOne";
import ClockTwo from "./ClockTwo";
import SettingsIcon from '@mui/icons-material/Settings';
import { WidgetSettings } from "../../WidgetSettings";
import { widgetById } from "../../../stores/store";
import { useRecoilValue } from "recoil";
import { ClockContent } from "./styles";

export default function ClockWidget({ widgetId }: { widgetId: string }) {
	const [dt, setDt] = useState(DateTime.local());
	const [open, setOpen] = useState(false);
	const widgetData = useRecoilValue(widgetById(widgetId));

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
		<WidgetFrame widgetId={widgetId}>
			<ClockContent>
				{widgetData.data.clockType === 'clockOne' && <ClockOne dt={dt}></ClockOne>}
				{widgetData.data.clockType === 'clockTwo' && <ClockTwo dt={dt}></ClockTwo>}
			</ClockContent>
		</WidgetFrame>
	)
}

function ClockSettings(originalSettings: any, stageUpdate: (data: any) => void) {
	const [clockType, setClockType] = useState(originalSettings.clockType);

	const handleChange = (event: SelectChangeEvent) => {
		setClockType(event.target.value as string);
		stageUpdate({ clockType: event.target.value as string });
	};

	return (
		<div>
			<FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
				<InputLabel>Clock type</InputLabel>
				<Select
					label="Clock Type"
					value={clockType}
					onChange={handleChange}
				>
					<MenuItem value="clockOne">Clock one</MenuItem>
					<MenuItem value="clockTwo">Clock Two</MenuItem>
				</Select>
			</FormControl>
		</div>
	)
}