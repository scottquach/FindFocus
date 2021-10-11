import styled from "styled-components";
import { WidgetFrame } from "../WidgetFrame";

const embedLinks = [
	'https://indify.co/widgets/live/clock/67znB36q09InEACNar7m',
	'https://indify.co/widgets/live/clock/luMtE0inLDoXPMOHkTC3',
	// 'https://www.clocklink.com/html5embed.php?clock=024&timezone=ACST&color=white&size=150&Title=&Message=&Target=&From=2021,1,1,0,0,0&Color=white',
	'',
	'',
]

const Content = styled.iframe`
	width: 100%;
	height: 100%;
	padding-bottom: 1rem;
`

export function ClockWidget({ widgetId }: { widgetId: string }) {
	return (
		<WidgetFrame widgetId={widgetId}>
			<Content src={embedLinks[0]} frameBorder="0"></Content>
		</WidgetFrame>
	)
}