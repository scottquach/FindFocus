import React, { useEffect, useState } from 'react'
import { WidgetFrame } from '../../WidgetFrame'
import { Actions, Content, Display, SettingsContainer } from './styles'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import StopIcon from '@mui/icons-material/Stop';
import { Button, CircularProgress, ClickAwayListener, IconButton, Popper, TextField, Zoom } from '@mui/material';
import { Duration } from 'luxon';
import CloseIcon from '@mui/icons-material/Close';
import { setInterval } from 'timers';
import { useRecoilValue } from 'recoil';
import { widgetById } from '../../../stores/store';
import SettingsIcon from '@mui/icons-material/Settings';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { Box } from '@mui/system';
import { Input } from '../../../styles/Input';
import useUpdateWidget from '../../../hooks/useUpdateWidget';
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../../../firebase';
import useAudio from '../../../hooks/useAudio';

export default function TimerWidget({ widgetId }: { widgetId: string }) {
	const [active, setActive] = useState(false);
	const { data } = useRecoilValue(widgetById(widgetId));
	const updateWidget = useUpdateWidget();
	const [duration, setDuration] = useState(Duration.fromObject({ minutes: data.minutes, seconds: data.seconds }))
	const [alarmUrl, setAlarmUrl] = useState('');

	useEffect(() => {
		let timeoutId: any;
		if (active && duration.toMillis() > 0) {
			timeoutId = setTimeout(() => {
				setDuration((prev) => prev.minus(Duration.fromMillis(1000)));
			}, 1000)
		} else {
			// toggle();

		}
		return () => clearTimeout(timeoutId)
	});

	useEffect(() => {
		if (duration.toMillis() === 0) {
			console.log('alarm!');
			(new Audio(alarmUrl)).play();
			// toggle();
		}
	}, [duration])

	useEffect(() => {
		getDownloadURL(ref(storage, 'alarm.mp3'))
			.then(url => {
				console.log(url);
				setAlarmUrl(url);
			});
	}, [])

	const start = () => {
		setActive(true);
	}

	const pause = () => {
		setActive(false);
	}

	const reset = () => {
		setActive(false);
		setDuration(Duration.fromObject({ minutes: data.minutes, seconds: data.seconds }));
	}

	const saveTime = (minutes: number, seconds: number) => {
		updateWidget(widgetId, {
			minutes: minutes,
			seconds: seconds
		});
		reset();
		setDuration(Duration.fromObject({ minutes, seconds }))
	}

	const zeroPad = (num: number, places: number) => String(num).padStart(places, '0');

	const formatSeconds = () => {
		return zeroPad(duration.shiftTo('hours', 'minutes', 'seconds', 'milliseconds').toObject().seconds!, 2);
	}

	const formatMinutes = () => {
		return zeroPad(duration.shiftTo('hours', 'minutes', 'seconds', 'milliseconds').toObject().minutes!, 2);
	}

	const progress = () => {
		return duration.toMillis() != 0 ? (duration.toMillis() / Duration.fromObject({ minutes: data.minutes, seconds: data.seconds }).toMillis()) * 100 : 100;
	}

	return (
		<WidgetFrame widgetId={widgetId}>
			<Content>
				<Display>
					<Box className="flex-col items-center justify-center w-12" color="primary">
						{duration.toMillis() !== 0 ?
							<CircularProgress className="mt-2" variant="determinate" thickness={22} size={42} value={progress()} color="primary" /> :
							<CheckCircleIcon fontSize="large" color="inherit"></CheckCircleIcon>
						}
					</Box>
					<div className="flex-col items-center justify-center">
						<div className="text-3xl text-primary font-bold flex gap-2 leading-7">
							<span >{formatMinutes()}</span>
							<span>:</span>
							<span className="w-10 text-left">{formatSeconds()}</span>
						</div>
						<div className="text-sm font-semibold text-primary opacity-70">Time remaining</div>
					</div>
					<div className="ml-auto flex gap-2">
						{
							active ?
								<div>
									<IconButton onClick={pause} sx={{ padding: .25, }}>
										<PauseIcon color="primary"></PauseIcon>
									</IconButton>
									<IconButton onClick={reset} sx={{ padding: .25 }}>
										<StopIcon color="primary"></StopIcon>
									</IconButton>
								</div>
								:
								<div>
									<IconButton onClick={start} sx={{ padding: 0 }}>
										<PlayArrowIcon color="primary"></PlayArrowIcon>
									</IconButton>
									{data.time !== duration.toMillis() && <IconButton onClick={reset} sx={{ padding: 0 }}>
										<RestartAltIcon color="primary"></RestartAltIcon>
									</IconButton>}
								</div>
						}
						<TimerSettings defaultMinutes={data.minutes} defaultSeconds={data.seconds} saveTime={saveTime}></TimerSettings>
					</div>
				</Display>
			</Content>
		</WidgetFrame>
	)
}

function TimerSettings({ defaultMinutes, defaultSeconds, saveTime }: { defaultMinutes: number, defaultSeconds: number, saveTime: any }) {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const [minutes, setMinutes] = useState(defaultMinutes);
	const [seconds, setSeconds] = useState(defaultSeconds);
	const [changed, setChanged] = useState(false);

	useEffect(() => {
		if (minutes != defaultMinutes || seconds != defaultSeconds) {
			setChanged(true);
		} else {
			setChanged(false);
		}
	}, [minutes, seconds])

	const handleClick = (event: any) => {
		setAnchorEl(anchorEl ? null : event.currentTarget);
	};

	const handleMinuteChange = (event: any) => {
		setMinutes(event.target.value)

	}
	const handleSecondChange = (event: any) => {
		setSeconds(event.target.value);
	}

	const handleSave = () => {
		saveTime(minutes, seconds);
		setChanged(false);
		setAnchorEl(null);
	}

	return (
		<div>
			<IconButton onClick={handleClick} sx={{ padding: 0, fill: "var(--color-primary)" }}>
				<SettingsIcon color="primary"></SettingsIcon>
			</IconButton>
			<Popper id="timer-settings-popper" open={open} anchorEl={anchorEl} transition>
				{({ TransitionProps }) => (
					<Zoom {...TransitionProps} timeout={100}>
						<SettingsContainer>
							<div className="flex items-center justify-between mb-4">
								<div className="font-bold text-primary">Settings</div>
								<IconButton sx={{ padding: .5 }} onClick={() => setAnchorEl(null)}>
									<CloseIcon fontSize="small" sx={{ fill: "var(--color-primary)" }}></CloseIcon>
								</IconButton>
							</div>
							<div className="flex gap-2 justify-start">
								<div className="w-32">
									<div className="text-primary">Minutes</div>
									<Input placeholder="Minutes" type="number" min={0} value={minutes} onChange={handleMinuteChange} required></Input>
								</div>
								<div className="w-32">
									<div className="text-primary">Seconds</div>
									<Input placeholder="Seconds" type="number" min={0} max={59} value={seconds} onChange={handleSecondChange} required></Input>
								</div>
							</div>
							<div className="flex justify-center mt-2">
								<Button onClick={handleSave} disabled={!changed} color="primary">Save</Button>
							</div>
						</SettingsContainer>
					</Zoom>
				)}
			</Popper>

		</div>
	)

}
