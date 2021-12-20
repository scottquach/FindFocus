import { ClickAwayListener, IconButton, Slider, Tooltip } from "@mui/material"
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import HideSourceIcon from '@mui/icons-material/HideSource';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import WidgetsIcon from '@mui/icons-material/Widgets';
import styled from "styled-components"
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { globalConfigState, globalGridVisibleState, globalVolumeState } from "../stores/store";

const UtilityBarLayout = styled.div`
		display: flex;
		justify-content: flex-end;
		align-items: flex-start;
		gap: .5rem;
		position: absolute;
		top: 1rem;
		right: 1rem;
	`

const Frame = styled.div`
	border-radius: 8px;
	background-color: var(--color-background);
	/* backdrop-filter: saturate(50%) blur(15px); */
`

export function UtilityBar() {

	function triggerFullscreen() {
		console.log('trigger overall fullscreen')
		// https://developers.google.com/web/fundamentals/native-hardware/fullscreen
		const doc = window.document as any;
		const docEl = doc.documentElement as any;

		const requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
		const cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

		if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
			requestFullScreen.call(docEl);
		}
		else {
			cancelFullScreen.call(doc);
		}
	}

	return (
		<UtilityBarLayout>
			<Tooltip title="Hide widgets">
				<GridToggle></GridToggle>
			</Tooltip>
			<VolumeSlider></VolumeSlider>
			<Frame>
				<IconButton onClick={triggerFullscreen} style={{ fill: "var(--color-on-background)" }}>
					<FullscreenIcon style={{ fill: "var(--color-on-background)" }}></FullscreenIcon>
				</IconButton>
				<IconButton>
					<AccountCircleIcon style={{ fill: "var(--color-on-background)" }}></AccountCircleIcon>
				</IconButton>
			</Frame>
		</UtilityBarLayout>
	)
}

const GridToggleDescription = styled.span`
	font-size: 14px;
	margin-left: .25rem;

`

function GridToggle() {

	const [state, setState] = useRecoilState(globalGridVisibleState);

	const onGridToggle = () => {
		setState((old) => {
			return !old;
		});
	}

	return (
		<Frame>
			<IconButton onClick={onGridToggle}>
				{state && <WidgetsIcon style={{ fill: "var(--color-on-background)" }}></WidgetsIcon>}
				{!state && <HideSourceIcon style={{ fill: "var(--color-on-background)" }}></HideSourceIcon>}
				{!state && <GridToggleDescription>Hiding widgets</GridToggleDescription>}
			</IconButton>
		</Frame>
	)
}

const VolumeMenu = styled.div<{ active: boolean }>`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: ${({ active }) => active ? '12rem' : 'auto'};
	padding-bottom: ${({ active }) => active ? '1rem' : '0rem'};
`

function VolumeSlider() {
	const [toggle, setToggle] = useState(false);
	const [volume, setVolume] = useRecoilState(globalVolumeState);
	// console.log('volume', volume)


	const handleVolumeChange = (event: any, newValue: number | number[]) => {
		// console.log('on Change', newValue)
		setVolume(newValue as number);
	}

	const toggleVolume = () => {
		if (volume != 50) {
			console.log('hi')
			setVolume(50);
		} else {
			setVolume(0);
			console.log('by');
		}
	}

	return (
		<ClickAwayListener onClickAway={() => setToggle(false)}>
			<Frame>
				<VolumeMenu active={toggle}>
					<IconButton onClick={() => setToggle(!toggle)}>
						{/* <IconButton onClick={() => toggleVolume()}> */}
						{volume >= 60 && <VolumeUpIcon style={{ fill: "var(--color-on-background)" }}></VolumeUpIcon>}
						{volume > 25 && volume < 60 && <VolumeDownIcon style={{ fill: "var(--color-on-background)" }}></VolumeDownIcon>}
						{volume > 0 && volume <= 25 && <VolumeMuteIcon style={{ fill: "var(--color-on-background)" }}></VolumeMuteIcon>}
						{volume == 0 && <VolumeOffIcon style={{ fill: "var(--color-on-background)" }}></VolumeOffIcon>}
					</IconButton>
					{toggle && <Slider orientation="vertical" value={volume} onChange={handleVolumeChange}></Slider>}
				</VolumeMenu>
			</Frame>
		</ClickAwayListener>
	)

}