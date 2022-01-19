import { Box, ClickAwayListener, Divider, IconButton, Popper, Slider, Tooltip, Zoom } from "@mui/material"
import FullscreenIcon from '@mui/icons-material/Fullscreen';
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
import { logEvent } from "firebase/analytics";
import { analytics } from "../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import HelpIcon from '@mui/icons-material/Help';

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
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	padding: .10rem .25rem;
`

export function UtilityBar() {

	function triggerFullscreen() {
		// console.log('trigger overall fullscreen')
		logEvent(analytics, 'trigger_fullscreen');
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
			<VolumeSlider></VolumeSlider>
			<Frame className="flex">
				<GridToggle></GridToggle>
				<Tooltip title="Toggle fullscreen">
					<IconButton onClick={triggerFullscreen} style={{ fill: "var(--color-on-background)" }} size="small">
						<FullscreenIcon style={{ fill: "var(--color-on-background)" }}></FullscreenIcon>
					</IconButton>
				</Tooltip>
				<Profile></Profile>
			</Frame>
		</UtilityBarLayout >
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

		logEvent(analytics, 'grid_toggle');
	}

	return (
		// <Frame>

			<Tooltip title="Hide widgets">
				<IconButton onClick={onGridToggle} size="small">
					{state && <WidgetsIcon style={{ fill: "var(--color-on-background)" }}></WidgetsIcon>}
					{!state && <HideSourceIcon style={{ fill: "var(--color-on-background)" }}></HideSourceIcon>}
					{!state && <GridToggleDescription>Hiding widgets</GridToggleDescription>}
				</IconButton>
			</Tooltip>
		// </Frame>
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
					<IconButton onClick={() => setToggle(!toggle)} size="small">
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

function Profile() {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const id = open ? 'profile-popper' : undefined;

	const onSelect = (event: any) => {
		if (anchorEl) {
			setAnchorEl(null);
		} else {
			setAnchorEl(event.currentTarget);
		}
	}
	return (
		<div>
			<IconButton onClick={onSelect} size="small">
				<HelpIcon style={{ fill: "var(--color-on-background)" }}></HelpIcon>
			</IconButton>
			<Popper id={id} open={open} anchorEl={anchorEl}>
				<ClickAwayListener onClickAway={() => setAnchorEl(null)}>
					<Frame className="mt-2 mr-2 p-3 font-semibold">
						<div className="cursor-pointer mb-1 hover:text-blue-600">About us</div>
						<a className="flex gap-1 my-1 items-center cursor-pointer hover:text-blue-600" href="https://discord.gg/Nad9p7Np" target="_blank" rel="noreferrer">
							<FontAwesomeIcon icon={faDiscord}></FontAwesomeIcon>
							<span>Discord</span>

						</a>
						<div className="cursor-pointer my-1 hover:text-blue-600">Help and FAQ</div>
						<Divider sx={{ margin: '.5rem 0' }}></Divider>
						<div className="flex justify-around my-1">
							<FontAwesomeIcon className="cursor-pointer" icon={faInstagram}></FontAwesomeIcon>
							<FontAwesomeIcon className="cursor-pointer" icon={faTiktok}></FontAwesomeIcon>
							<FontAwesomeIcon className="cursor-pointer" icon={faEnvelope}></FontAwesomeIcon>

						</div>
					</Frame>
				</ClickAwayListener>
			</Popper>
		</div>
	)
}