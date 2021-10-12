import styled from "styled-components";
import { WidgetFrame } from "../WidgetFrame";

const Content = styled.iframe`
	width: 100%;
	height: 100%;
	padding-bottom: 1rem;
`

export function SoundCloudWidget({ widgetId }: { widgetId: string }) {
	return (
		<WidgetFrame widgetId={widgetId}>
			<Content scrolling="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/648636962&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></Content>
		</WidgetFrame>
	)
}