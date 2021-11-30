import { Dialog, TextField } from "@mui/material";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { widgetById } from "../../../stores/store";
import { WidgetFrame } from "../../WidgetFrame";
// import { SpotifySettings } from "./SpotifySettings";

const SpotifyFrame = styled.iframe`
	width: 100%;
	height: 100%;
	border-radius: 8px;
`

const Content = styled.div`
	display: flex;
	flex-direction: column;
	margin: .5rem;
	gap: .5rem;
`

export function SpotifyWidget({ widgetId }: { widgetId: string }) {
	// const [settingsOpen, setSettingsOpen] = useState(false);
	const widget = useRecoilValue(widgetById(widgetId));
	console.log('Spotify widget', widgetId, widget);
	const { data } = widget;

	return (
		<WidgetFrame widgetId={widgetId}>
			<Content>
				{data?.link && <SpotifyFrame src={data.link} frameBorder="0" allow="autoplay; encrypted-media;"></SpotifyFrame>}
				{!data?.link && <div>Click the settings to enter a Spotify playlist</div>}
				{/* <SpotifyFrame src={data.link} frameBorder="0"></SpotifyFrame> */}
				{/* <TextField id="outlined-basic" placeholder="Your Spotify playlist URL" size="small" variant="outlined" /> */}
			</Content>
		</WidgetFrame>
	)
}