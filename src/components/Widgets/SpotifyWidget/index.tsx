import { Dialog, IconButton, TextField, Tooltip } from "@mui/material";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import SaveIcon from '@mui/icons-material/Save';
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import useUpdateWidget from "../../../hooks/useUpdateWidget";
import { widgetById } from "../../../stores/store";
import { WidgetFrame } from "../../WidgetFrame";
import { useEffect, useState } from "react";
// import { SpotifySettings } from "./SpotifySettings";

const SpotifyFrame = styled.iframe`
	width: 100%;
	height: 100%;
	border-radius: 8px;
`

const Content = styled.div`
	display: flex;
	flex-direction: column;
	margin: .25rem;
	gap: .5rem;
`

const WidgetActions = styled.div`
	display: flex;
	align-items: center;

`

export function SpotifyWidget({ widgetId }: { widgetId: string }) {
	const updateWidget = useUpdateWidget();
	const widget = useRecoilValue(widgetById(widgetId));
	// console.log('Spotify widget', widgetId, widget);
	const { data } = widget;

	const [link, setLink] = useState('');
	const handleLinkChange = (e: any) => setLink(e.target.value);


	const updateLink = () => {
		// console.log(link);
		const tokens = link.split('/')
		const id = tokens[tokens.length - 1];
		// console.log(id);
		updateWidget(widgetId, { link: `https://open.spotify.com/embed/playlist/${id}` });
	}

	const resetLink = () => {
		updateWidget(widgetId, { link: 'https://open.spotify.com/embed/playlist/0vvXsWCC9xrXsKd4FyS8kM' });
	}

	return (
		<WidgetFrame widgetId={widgetId}>
			<Content>
				{data?.link && <SpotifyFrame src={data.link} frameBorder="0" allow="autoplay; encrypted-media;"></SpotifyFrame>}
				{!data?.link && <div>Click the settings to enter a Spotify playlist</div>}
				{/* <SpotifyFrame src={data.link} frameBorder="0"></SpotifyFrame> */}
				<WidgetActions>
					<TextField id="outlined-basic" value={link} onChange={handleLinkChange} placeholder="Your Spotify playlist URL" size="small" variant="outlined" />
					<Tooltip title="Save URL">
						<IconButton onClick={updateLink}>
							<SaveIcon></SaveIcon>
						</IconButton>
					</Tooltip>
					<Tooltip title="Reset">
						<IconButton onClick={resetLink}>
							<RestartAltIcon></RestartAltIcon>
						</IconButton>
					</Tooltip>
				</WidgetActions>
			</Content>
		</WidgetFrame>
	)
}