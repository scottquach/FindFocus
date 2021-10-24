import { ClickAwayListener, IconButton, Slider, Tooltip } from "@mui/material"
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import ShareTwoToneIcon from '@mui/icons-material/ShareTwoTone';
import FileDownloadTwoToneIcon from '@mui/icons-material/FileDownloadTwoTone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import WidgetsIcon from '@mui/icons-material/Widgets';
import styled from "styled-components"
import { useEffect, useState } from "react";
import { TimerOutlined, VolumeMute } from "@mui/icons-material";
import { useRecoilState } from "recoil";
import { globalVolumeState } from "../stores/store";

const UtilityBarLayout = styled.div`
		display: flex;
		justify-content: flex-end;
		align-items: flex-start;
		gap: .5rem;
		position: absolute;
		top: 1rem;
		right: 1rem;
		/* height: 2.5rem; */
	`

const Frame = styled.div`
	border-radius: 8px;
	/* color: white; */
	background-color: #ffffffd8;
	backdrop-filter: saturate(50%) blur(15px);
`

const BarButton = styled.div`
		border: 1px solid black;
		border-radius: 24px;
		margin-right: .5rem;
		background-color: var(--widget-background-color);

		:last-child {
			margin-right: 0rem;
		}
	`

export function UtilityBar() {
	function triggerFullscreen() {
		console.log('trigger overall fullscreen')
	}

	return (
		<UtilityBarLayout>
			<Frame>
				<IconButton>
					<WidgetsIcon></WidgetsIcon>
				</IconButton>
			</Frame>
			<VolumeSlider></VolumeSlider>
			<Frame>
				<IconButton>
					<FullscreenIcon></FullscreenIcon>
				</IconButton>
				<IconButton>
					<AccountCircleIcon></AccountCircleIcon>
				</IconButton>

			</Frame>
		</UtilityBarLayout>
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

	return (
		<ClickAwayListener onClickAway={() => setToggle(false)}>
			<Frame>
				<VolumeMenu active={toggle}>
					<IconButton onClick={() => setToggle(!toggle)}>
						{volume >= 50 && <VolumeUpIcon></VolumeUpIcon>}
						{volume != 0 && volume < 50 && <VolumeDownIcon></VolumeDownIcon>}
						{volume == 0 && <VolumeOffIcon></VolumeOffIcon>}
					</IconButton>
					{toggle && <Slider orientation="vertical" value={volume} onChange={handleVolumeChange}></Slider>}
				</VolumeMenu>
			</Frame>
		</ClickAwayListener>
	)

}