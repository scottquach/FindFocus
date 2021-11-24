import * as S from './styles'

import CloseIcon from '@mui/icons-material/Close';

import { IconButton } from '@mui/material';
import { useRecoilState } from 'recoil';
import { backgroundState } from '../../stores/store';
import { BackgroundType } from '../../models/background-types.enum';
import useLocalStorage from '../../hooks/useLocalStorage';
import { MenuHeader, MenuHeaderLayout } from '../../GlobalStyles';

// const cateredImages = [
// 	'https://images.unsplash.com/photo-1475359524104-d101d02a042b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1594&q=80',
// 	'https://images.unsplash.com/photo-1484291470158-b8f8d608850d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
// 	'https://images.unsplash.com/photo-1517757910079-f57fd7f49a91?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2068&q=80',
// 	'https://images.unsplash.com/photo-1524778153300-4c80b64c322e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
// 	'https://images.unsplash.com/photo-1619199748576-75ae8022c73f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80'
// ]

const videoRooms: { [key: string]: string[] } = {
	cafe: ['https://www.youtube.com/watch?v=3nyuWu7dnTM&ab_channel=LauraAngelia'],
	walk: ['https://www.youtube.com/watch?v=eZe4Q_58UTU&t=1711s&ab_channel=NomadicAmbience'],
	beach: ['https://www.youtube.com/watch?v=DGIXT7ce3vQ&ab_channel=RelaxingSoundzzz'],
	city: ['https://www.youtube.com/watch?v=AdUw5RdyZxI&ab_channel=EarthCam'],
	window: ['https://www.youtube.com/watch?v=iLs04Z6uBqU&t=21s&ab_channel=RelaxationWindows4KNature']
}

const videoRoomBackgrounds: { [key: string]: string } = {
	cafe: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1471&q=80',
	walk: 'https://images.unsplash.com/photo-1549992609-7a9043b5bf6b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80',
	beach: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80',
	city: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
	window: 'https://images.unsplash.com/photo-1551524163-d00af9f12253?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1025&q=80'
}

enum VideoRoom {
	Cafe = 'cafe',
	Walk = 'walk',
	Beach = 'beach',
	City = 'city',
	Window = 'window',
}

// const cateredColors = [
// 	'#DAF7DC',
// 	'#BEE7E8',
// 	'#EBBAB9',
// 	'#FFE4FA',
// 	'#212121'
// ]

export function BackgroundPicker({ close }: any) {
	const [background, setBackground] = useRecoilState(backgroundState);
	const [_, saveBackground] = useLocalStorage('background', {});

	// const setImageBackground = (imageUrl: string) => {
	// 	const background = {
	// 		type: BackgroundType.Image,
	// 		value: imageUrl
	// 	}
	// 	setBackground((old) => (background));
	// 	saveBackground(background);
	// }

	// const setVideoBackground = (videoUrl: string) => {
	// 	const background = {

	// 		type: BackgroundType.Video,
	// 		value: videoUrl
	// 	}
	// 	setBackground((old) => (background));
	// 	saveBackground(background);
	// }

	const joinVideoRoom = (roomId: VideoRoom) => {
		const background = {
			type: BackgroundType.Video,
			roomId: roomId,
			value: videoRooms[roomId as any][0]
		}
		setBackground((old) => (background));
		saveBackground(background);
	}

	// const setColorBackground = (color: string) => {
	// 	const background = {
	// 		type: BackgroundType.Color,
	// 		value: color
	// 	}
	// 	setBackground((old) => (background));
	// 	saveBackground(background);
	// }

	const onClose = () => {
		close();
	}

	return (
		<S.Wrapper>
			<MenuHeaderLayout>
				<MenuHeader>Rooms</MenuHeader>
				<IconButton onClick={onClose}>
					<CloseIcon></CloseIcon>
				</IconButton>
			</MenuHeaderLayout>

			<S.SectionLayout>
				<span>🎥</span>
				<S.SectionTitle>VIDEO ROOMS</S.SectionTitle>
			</S.SectionLayout>
			<S.PresetGrid>
				<S.VideoRoom selected={background.roomId == VideoRoom.Cafe}  onClick={() => joinVideoRoom(VideoRoom.Cafe)}>
					<S.VideoImage src={videoRoomBackgrounds[VideoRoom.Cafe]} ></S.VideoImage>
					<S.VideoName className="">
						<span>☕️</span>
						<span>Cafe</span>
					</S.VideoName>
				</S.VideoRoom>
				<S.VideoRoom selected={background.roomId == VideoRoom.City} onClick={() => joinVideoRoom(VideoRoom.City)}>
					<S.VideoImage  src={videoRoomBackgrounds[VideoRoom.City]}></S.VideoImage>
					<S.VideoName >
						<span>🏙️</span>
						<span>City</span>
					</S.VideoName>
				</S.VideoRoom>
				<S.VideoRoom selected={background.roomId == VideoRoom.Beach} onClick={() => joinVideoRoom(VideoRoom.Beach)}>
					<S.VideoImage  src={videoRoomBackgrounds[VideoRoom.Beach]}></S.VideoImage>
					<S.VideoName >
						<span>🏖️️</span>
						<span>Beach</span>
					</S.VideoName>
				</S.VideoRoom>
				<S.VideoRoom selected={background.roomId == VideoRoom.Walk} onClick={() => joinVideoRoom(VideoRoom.Walk)}>
					<S.VideoImage  src={videoRoomBackgrounds[VideoRoom.Walk]}></S.VideoImage>
					<S.VideoName >
						<span>🚶‍♀️️</span>
						<span>Walk</span>
					</S.VideoName>
				</S.VideoRoom>
				<S.VideoRoom selected={background.roomId == VideoRoom.Window} onClick={() => joinVideoRoom(VideoRoom.Window)}>
					<S.VideoImage  src={videoRoomBackgrounds[VideoRoom.Window]}></S.VideoImage>
					<S.VideoName >
						<span>⬜</span>
						<span>Window</span>
					</S.VideoName>
				</S.VideoRoom>
			</S.PresetGrid>

			{/* <S.SectionLayout>
				<ImageIcon></ImageIcon>
				<S.SectionTitle>CATERED IMAGES</S.SectionTitle>
			</S.SectionLayout>

			<S.ImagePresetGrid>
				{cateredImages.map((url) => {
					return <S.ImagePresetContainer key={url} onClick={() => setImageBackground(url)}>
						<S.ImagePreset src={url} />
					</S.ImagePresetContainer>
				})}
			</S.ImagePresetGrid>

			<S.SectionLayout>
				<PaletteIcon></PaletteIcon>
				<S.SectionTitle>CATERED COLORS</S.SectionTitle>
			</S.SectionLayout>
			<S.PresetGrid>
				{cateredColors.map((color) => {
					return (
						<S.ColorPresetContainer key={color} onClick={() => setColorBackground(color)}>
							<S.ColorPreset color={color}></S.ColorPreset>
						</S.ColorPresetContainer>
					)
				})}
			</S.PresetGrid> */}
		</S.Wrapper>
	);
}
