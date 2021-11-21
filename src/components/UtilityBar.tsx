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
import { globalConfigState, globalVolumeState } from "../stores/store";

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
	background-color: #ffffffd8;
	backdrop-filter: saturate(50%) blur(15px);
`

export function UtilityBar() {

	function triggerFullscreen() {
		console.log('trigger overall fullscreen')
		// https://developers.google.com/web/fundamentals/native-hardware/fullscreen
		var doc = window.document as any;
		var docEl = doc.documentElement as any;

		var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
		var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

		if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
			requestFullScreen.call(docEl);
		}
		else {
			cancelFullScreen.call(doc);
		}
	}

	return (
		<UtilityBarLayout>
			<GridToggle></GridToggle>
			<VolumeSlider></VolumeSlider>
			<Frame>
				<IconButton onClick={triggerFullscreen}>
				<FullscreenIcon></FullscreenIcon>
				</IconButton>
				<IconButton>
					<AccountCircleIcon></AccountCircleIcon>
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

	const [state, setState] = useRecoilState(globalConfigState);

	const onGridToggle = () => {
		setState((old) => {
			return {
				...old,
				gridVisible: !old.gridVisible
			}
		});
	}

	return (
		<Frame>
			<IconButton onClick={onGridToggle}>
				{state.gridVisible && <WidgetsIcon></WidgetsIcon>}
				{!state.gridVisible && <HideSourceIcon></HideSourceIcon>}
				{!state.gridVisible && <GridToggleDescription>Hiding widgets</GridToggleDescription>}
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

	// useEffect(() => {
	// 	let timeout: any;
	// 	if (toggle) {
	// 		timeout = setTimeout(() => {
	// 			setToggle(false);
	// 		}, 3000)
	// 	}
	// 	return function () {
	// 		if (timeout) {
	// 			clearTimeout(timeout);
	// 		}
	// 	}
	// }, [toggle])

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
						{volume >= 60 && <VolumeUpIcon></VolumeUpIcon>}
						{volume > 25 && volume < 60 && <VolumeDownIcon></VolumeDownIcon>}
						{volume > 0 && volume <= 25 && <VolumeMuteIcon></VolumeMuteIcon>}
						{volume == 0 && <VolumeOffIcon></VolumeOffIcon>}
					</IconButton>
					{toggle && <Slider orientation="vertical" value={volume} onChange={handleVolumeChange}></Slider>}
				</VolumeMenu>
			</Frame>
		</ClickAwayListener>
	)

}