import * as S from './styles'

import CloseIcon from '@mui/icons-material/Close';

import { IconButton, Slider } from '@mui/material';
import { useRecoilState } from 'recoil';
import { backgroundState } from '../../stores/store';
import { BackgroundType } from '../../models/background-types.enum';
import useLocalStorage from '../../hooks/useLocalStorage';
import { MenuHeader, MenuHeaderLayout } from '../../GlobalStyles';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { useState } from 'react';
import { CategoryId } from '../../models/category.enum';
import { Room } from '../../models/room.interface';

const categories = [
	{
		icon: '🎅',
		name: 'Christmas',
		id: CategoryId.Christmas
	},
	{
		icon: '☕',
		name: 'Cafe',
		id: CategoryId.Cafe
	},
	{
		icon: '🌲',
		name: 'Nature',
		id: CategoryId.Nature
	},
	{
		icon: '🏖️',
		name: 'Beach',
		id: CategoryId.Beach
	},
	{
		icon: '🏙️',
		name: 'City',
		id: CategoryId.City
	},
	{
		icon: '📺',
		name: 'Animated',
		id: CategoryId.Animated
	}
]


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

	const [activeCategory, setActiveCategory] = useState<null | CategoryId>(null);
	const [activeRoom, setActiveRoom] = useState<null | Room>(null);

	const joinRoom = (categoryId: CategoryId) => {
		const background = {
			type: BackgroundType.Video,
			roomId: categoryId,
			value: videoRooms[categoryId as any]?.[0]
		}
		if (background.value) {
			setActiveCategory(categoryId);
			setBackground((old) => (background));
			saveBackground(background)
		}
	}

	const onClose = () => {
		close();
	}

	return (
		<S.Wrapper>
			<MenuHeaderLayout>
				<MenuHeader>Rooms</MenuHeader>
				<IconButton onClick={onClose}>
					<CloseIcon style={{ fill: "var(--color-on-background)" }}></CloseIcon>
				</IconButton>
			</MenuHeaderLayout>

			<S.RoomList>
				{categories.map((room, index) => (
					<S.Room key={index} onClick={() => joinRoom(room.id)} active={room.id === activeCategory}>
						<S.RoomIcon>{room.icon}</S.RoomIcon>
						<S.RoomName>{room.name}</S.RoomName>
					</S.Room>
				))}
			</S.RoomList>

			{
				activeCategory &&
				<S.ActiveContainer>
					<S.ActiveRoom>
						<S.RoomIcon>
							📺
						</S.RoomIcon>
						<div>
							<S.ActiveRoomName>Lo-Fi Girl</S.ActiveRoomName>
							<S.ActiveRoomOriginal>View original</S.ActiveRoomOriginal>
						</div>
						{/* <div> */}
						{/* <FavoriteBorderIcon></FavoriteBorderIcon> */}
						{/* <PlayCircleIcon></PlayCircleIcon> */}
						{/* </div> */}
					</S.ActiveRoom>
				</S.ActiveContainer>
			}



			{/* <Slider aria-label="Volume" /> */}


			{/* <S.SectionLayout>
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
			</S.PresetGrid> */}

		</S.Wrapper>
	);
}
