import React, { useEffect, useState } from 'react'
import { WidgetFrame } from '../../WidgetFrame'
import { Content } from './styles'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import StopIcon from '@mui/icons-material/Stop';
import { CircularProgress, IconButton } from '@mui/material';
import { Duration } from 'luxon';
import { setInterval } from 'timers';
import { useRecoilValue } from 'recoil';
import { widgetById } from '../../../stores/store';

// const useTimer = (startTime) => {
// 	const [time, setTime] = useState(startTime)
// 	const [intervalID, setIntervalID] = useState(null)
// 	const hasTimerEnded = time <= 0
// 	const isTimerRunning = intervalID != null

// 	const update = () => {
// 		setTime(time => time - 1)
// 	}
// 	const startTimer = () => {
// 		if (!hasTimerEnded && !isTimerRunning) {
// 			setIntervalID(setInterval(update, 1000))
// 		}
// 	}
// 	const stopTimer = () => {
// 		clearInterval(intervalID)
// 		setIntervalID(null)
// 	}
// 	// clear interval when the timer ends
// 	useEffect(() => {
// 		if (hasTimerEnded) {
// 			clearInterval(intervalID)
// 			setIntervalID(null)
// 		}
// 	}, [hasTimerEnded])
// 	// clear interval when component unmounts
// 	useEffect(() => () => {
// 		clearInterval(intervalID)
// 	}, [])
// 	return {
// 		time,
// 		startTimer,
// 		stopTimer,
// 	}
// }

export default function TimerWidget({ widgetId }: { widgetId: string }) {
	const [active, setActive] = useState(false);
	const { data } = useRecoilValue(widgetById(widgetId));
	const [duration, setDuration] = useState(Duration.fromMillis(data.time ?? 1000))

	const start = () => {
		setActive(true);
	}

	const pause = () => {
		setActive(false);
	}

	useEffect(() => {
		// console.log('playing toggled');
		let timeoutId: any;
		if (active && duration.toMillis() > 0) {
			timeoutId = setTimeout(() => {
				// console.log('substracting', duration.toString());
				setDuration((prev) => prev.minus(Duration.fromMillis(1000)));
			}, 1000)
		}
		return () => clearTimeout(timeoutId)
	});

	const reset = () => {
		setActive(false);
		setDuration(Duration.fromMillis(data.time));
	}

	const zeroPad = (num: number, places: number) => String(num).padStart(places, '0');

	const formatSeconds = () => {
		return zeroPad(duration.shiftTo('hours', 'minutes', 'seconds', 'milliseconds').toObject().seconds!, 2);
	}

	const formatMinutes = () => {
		return zeroPad(duration.shiftTo('hours', 'minutes', 'seconds', 'milliseconds').toObject().minutes!, 2);
	}

	const progress = () => {
		return duration.toMillis() != 0 ? (duration.toMillis() / data.time) * 100 : 100;
	}

	return (
		<WidgetFrame widgetId={widgetId}>
			<Content>
				<div className="flex-col items-center">
					<div>
						<CircularProgress variant="determinate" thickness={6} size={34} value={progress()} />
					</div>
					<div>
						{
							active ?
								<div>
									<IconButton onClick={pause}>
										<PauseIcon></PauseIcon>
									</IconButton>
									<IconButton onClick={reset}>
										<StopIcon></StopIcon>
									</IconButton>
								</div>
								:
								<IconButton onClick={start}>
									<PlayArrowIcon></PlayArrowIcon>
								</IconButton>
						}
					</div>
				</div>
				<div className="flex-col items-center">
					<div className="text-4xl font-bold flex gap-2">
						<span >{formatMinutes()}</span>
						<span>:</span>
						<span className="w-10 text-left">{formatSeconds()}</span>
					</div>
					<div className="text-sm font-semibold opacity-70">Time remaining</div>
				</div>
			</Content>
		</WidgetFrame>
	)
}
