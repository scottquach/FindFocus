import styled from "styled-components";
import { WidgetFrame } from "../WidgetFrame";

const Content = styled.iframe`
	width: 100%;
	height: 100%;
	padding-bottom: 1rem;
`

export function SpotifyWidget({ widgetId }: { widgetId: string }) {
	return (
		<WidgetFrame widgetId={widgetId}>
			<Content src="https://open.spotify.com/embed/artist/2wOqMjp9TyABvtHdOSOTUS" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></Content>
		</WidgetFrame>
	)
}