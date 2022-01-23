import { FormControl, IconButton, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import { WidgetFrame } from "../../WidgetFrame";
import WeatherMinimal from "./WeatherMinimal";
import WeatherNerdy from "./WeatherNerdy";
import SettingsIcon from '@mui/icons-material/Settings';
import { WidgetSettings } from "../../WidgetSettings";
import { widgetById } from "../../../stores/store";
import { useRecoilValue } from "recoil";
import { WeatherContent } from "./styles";

export default function WeatherWidget({ widgetId }: { widgetId: string }) {
	const [open, setOpen] = useState(false);
	const widgetData = useRecoilValue(widgetById(widgetId));

	useEffect(() => {
		
	}, [])

	return (
		<WidgetFrame widgetId={widgetId}>
			<WeatherContent>
				{widgetData.data.weatherType === 'weatherMinimal' && <WeatherMinimal></WeatherMinimal>}
				{widgetData.data.weatherType === 'weatherNerdy' && <WeatherNerdy></WeatherNerdy>}
			</WeatherContent>
		</WidgetFrame>
	)
}

function WeatherSettings(originalSettings: any, stageUpdate: (data: any) => void) {
	const [weatherType, setWeatherType] = useState(originalSettings.clockType);

	const handleChange = (event: SelectChangeEvent) => {
		setWeatherType(event.target.value as string);
		stageUpdate({ weatherType: event.target.value as string });
	};

	return (
		<div>
			<FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
				<InputLabel>Weather type</InputLabel>
				<Select
					label="Weather Type"
					value={weatherType}
					onChange={handleChange}
				>
					<MenuItem value="weatherMinimal">Weather minimal</MenuItem>
					<MenuItem value="weatherNerdy">Weather nerdy</MenuItem>
				</Select>
			</FormControl>
		</div>
	)
}