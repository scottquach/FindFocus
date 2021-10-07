import styled from "styled-components"

const BackgroundWrapper = styled.div`
	position: fixed;
	height: 100vh;
	width: 100vw;
	z-index: -1;
`

const ImageBackground = styled.img`
	height: 100%;
	width: 100%;
	overflow: hidden;
`

const ColorBackground = styled.div`
	height: 100%;
	width: 100%;
	background-color: var(--background-color);
`

const VideoBackground = styled.iframe`
	border: none;
	width: 100%;
	height: 100vh;
	transform: scale(1.3);
`

export function Background() {

	return (
		<BackgroundWrapper>
			<ImageBackground src="https://images.unsplash.com/photo-1475359524104-d101d02a042b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1594&q=80" />
			{/* <VideoBackground allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" src="https://www.youtube.com/embed/5qap5aO4i9A?autoplay=1&mute=1&controls=0&start=15&origin=https%3A%2F%2Flifeat.io&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1"> </VideoBackground> */}
			{/* <ColorBackground></ColorBackground> */}
		</BackgroundWrapper>
	)
}