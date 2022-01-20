import { Dialog, getIconButtonUtilityClass, IconButton, TextField, Tooltip } from "@mui/material";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import SaveIcon from '@mui/icons-material/Save';
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import useUpdateWidget from "../../../hooks/useUpdateWidget";
import { widgetById } from "../../../stores/store";
import { WidgetFrame } from "../../WidgetFrame";
import { useEffect, useState } from "react";
import SpotifySettings from "./SpotifySettings";
// import { SpotifySettings } from "./SpotifySettings";

const SpotifyFrame = styled.iframe`
	width: 100%;
	height: 100%;
	border-radius: 8px;
	min-height: 175px;
`

const Content = styled.div`
	display: flex;
	flex-direction: column;
	margin: .25rem;
	/* gap: .25rem; */
	width: 100%;
	height: 100%:
`

const WidgetActions = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	margin-right: .25rem;
`

export function SpotifyWidget({ widgetId }: { widgetId: string }) {
	const updateWidget = useUpdateWidget();
	const widget = useRecoilValue(widgetById(widgetId));
	// console.log('Spotify widget', widgetId, widget);
	const { data } = widget;

	const [link, setLink] = useState(data.link ?? '');

	const updateLink = (link: string) => {
		const tokens = link.split('/')
		const id = tokens[tokens.length - 1];
		// console.log(id);
		setLink(link);
		updateWidget(widgetId, { link: `https://open.spotify.com/embed/playlist/${id}` });
	}

	return (
		<WidgetFrame widgetId={widgetId}>
			<Content>
				{data?.link && <SpotifyFrame src={data.link} frameBorder="0" width="100%" height="100%" allow="autoplay; encrypted-media;"></SpotifyFrame>}
				{!data?.link && <div>Click the settings to enter a Spotify playlist</div>}
				<WidgetActions>
					<SpotifySettings updateLink={updateLink} currentLink={link}></SpotifySettings>
				</WidgetActions>
			</Content>
		</WidgetFrame>
	)
}