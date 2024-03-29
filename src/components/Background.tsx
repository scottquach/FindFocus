import { useRecoilValue } from "recoil"
import styled from "styled-components"
import { backgroundState, globalVolumeState } from "../stores/store"
import Url from 'url-parse';
import YouTube, { PlayerVars } from 'react-youtube';
import { useEffect, useState } from "react";
import ReactPlayer from 'react-player'
import { Loader } from "./Loader";
import toast from "react-hot-toast";


const BackgroundWrapper = styled.div`
	position: absolute;
	height: 100vh;
	width: 100vw;
	z-index: -1;
`

const ImageBackground = styled.img`
	height: 100%;
	width: 100%;
	max-height: 100vh;
	max-width: 100vw;
	object-fit: cover;
`

const ColorBackground = styled.div`
	height: 100%;
	width: 100%;
	background-color: ${props => props.color};
`

const VideoBackground = styled(ReactPlayer)`
	border: none;
	/* width: 100vw;
	height: 100vh; */
	transform: scale(1.15);
	z-index: 0;
`

export function Background() {
	const room = useRecoilValue(backgroundState);
	const volume = useRecoilValue(globalVolumeState);
	const [mute, setMute] = useState(true);

	const [loading, setLoading] = useState(true);

	const config = {
		youtube: {
			playerVars: {
				start: 60
			}
		}
	}

	useEffect(() => {
		if (volume != 0) {
			setMute(false);
		} else {
			setMute(true);
		}
	}, [volume]);

	useEffect(() => {
		if (room) {
			setLoading(true);
			toast.success(`Joined "${room?.name}"`)
		}
	}, [0, room]);

	const onStart = () => {
		if (loading) {
			setLoading(false);
		}
	}

	// console.log('default', room)


	return (
		<BackgroundWrapper>
			{loading && <Loader></Loader>}
			{room && <VideoBackground config={config} url={`${room.link}`} width="100%" height="100%" volume={volume / 100} muted={mute} loop={true} playsinline={true} playing={true} controls={false} onStart={onStart} onProgress={onStart} onPlay={onStart} />}
		</BackgroundWrapper>
	)
}