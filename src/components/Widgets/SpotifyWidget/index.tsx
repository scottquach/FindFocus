import { Dialog } from "@mui/material";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { widgetById } from "../../../stores/store";
import { WidgetFrame } from "../../WidgetFrame";
import { SpotifySettings } from "./SpotifySettings";

const Content = styled.iframe`
	width: 100%;
	height: 100%;
	padding-bottom: 1rem;
`

export function SpotifyWidget({ widgetId }: { widgetId: string }) {
	const [settingsOpen, setSettingsOpen] = useState(false);
	const widget = useRecoilValue(widgetById(widgetId));
	console.log('Spotify widget', widget);
	const { data } = widget;

	return (
		<WidgetFrame widgetId={widgetId}>
			{/* <button onClick={() => setSettingsOpen(!settingsOpen)}>Test</button> */}
			{ data?.link && <Content src={data.link} frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></Content>}
			{!data?.link && <div>Click the settings to enter a Spotify playlist</div>}
			<Dialog open={settingsOpen} onClose={() => setSettingsOpen(false)}>
				<SpotifySettings widgetId={widgetId}></SpotifySettings>
			</Dialog>
		</WidgetFrame>
	)
}