import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import ClockOne from "./ClockOne";
import ClockTwo from "./ClockTwo";
import { Frame } from "./styles";

export default function ClockWidget({ widgetId }: { widgetId: string }) {
	const [dt, setDt] = useState(DateTime.local());

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
		</Frame>
	)
}