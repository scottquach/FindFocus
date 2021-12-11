import { useRecoilValue } from "recoil"
import styled from "styled-components"
import { BackgroundType } from "../models/background-types.enum"
import { backgroundState, globalVolumeState } from "../stores/store"
import Url from 'url-parse';
import ReactPlayer from 'react-player'

const BackgroundWrapper = styled.div`
	position: fixed;
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
	width: 100vw;
	height: 100vh;
	transform: scale(1.1);
`

export function Background() {

	const room = useRecoilValue(backgroundState);
	const volume = useRecoilValue(globalVolumeState);
	// console.log('Background', background)

	const buildYouTubeUrl = (youtubeUrl: string) => {
		const parsed = Url(youtubeUrl, true);
		return `https://www.youtube.com/embed/${parsed.query?.v}?autoplay=1&mute=${volume === 50 ? 0 : 1}&loop=1&controls=0&start=15&origin=https%3A%2F%2Flifeat.io&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1`
	}

	return (
		<BackgroundWrapper>
			{/* {background.type === BackgroundType.Image && <ImageBackground src={background.value} />} */}
			{/* {background.type === BackgroundType.Video && <VideoBackground url={buildYouTubeUrl(background.value)}  playing={true} volume={volume / 100} width="100%" height="100%" />} */}
			{ room && <VideoBackground url={buildYouTubeUrl(room.link)}  playing={true} volume={volume / 100} width="100%" height="100%" /> }
			{/* {background.type === BackgroundType.Video && <VideoBackground allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" src={buildYouTubeUrl(background.value)}> </VideoBackground>} */}
			{/* {background.type === BackgroundType.Color && <ColorBackground color={background.value} />} */}
			{/* {background.type === BackgroundType.Video && <VideoBackground allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" src="https://www.youtube.com/embed/eZe4Q_58UTU?autoplay=1&mute=1&controls=0&start=15&origin=https%3A%2F%2Flifeat.io&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1"> </VideoBackground>} */}
		</BackgroundWrapper>
	)
}