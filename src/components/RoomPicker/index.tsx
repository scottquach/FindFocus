import * as S from './styles'

import CloseIcon from '@mui/icons-material/Close';

import { Button, IconButton, Menu, MenuItem, Slider, Stack, Tooltip } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import { useRecoilState } from 'recoil';
import { backgroundState, favoritesState, globalVolumeState } from '../../stores/store';
import { useEffect, useState } from 'react';
import { Categories, Category, CategoryId } from '../../models/category.model';
import { Room } from '../../models/room.interface';
import { getRoomById, Rooms } from '../../models/rooms.model';
import useSyncLocalStorage from '../../hooks/useSyncLocalStorage';
import { VolumeDown, VolumeUp, SkipNext } from '@mui/icons-material';
import { MenuHeader, MenuHeaderLayout } from '../../styles/MenuHeaders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { logEvent } from 'firebase/analytics';
import { analytics } from '../../firebase';
import { Favorites } from './Favorites';
import { ActiveRoom } from './ActiveRoom';
import toast from 'react-hot-toast';

export function BackgroundPicker({ close }: any) {
	const [room, setRoom] = useRecoilState(backgroundState);
	const [favorites, setFavorites] = useRecoilState(favoritesState);
	useSyncLocalStorage('background', room);
	useSyncLocalStorage('favorites', favorites);

	const [activeCategory, setActiveCategory] = useState<null | CategoryId>(null);

	useEffect(() => {
		if (room) {
			setActiveCategory(room.category);
		}
	}, [room])

	const joinCategory = (categoryId: CategoryId) => {
		const activeRoomIndex = Rooms[categoryId].findIndex(x => x.id == room?.id);
		if ((activeRoomIndex + 1) < Rooms[categoryId].length) {
			const newRoom = Rooms[categoryId][(activeRoomIndex + 1)];
			setActiveCategory(newRoom.category);
			setRoom((_) => newRoom);
			logEvent(analytics, `category_join_${categoryId}`)
			// toast.success(`Joined "${newRoom?.name}"`)
		}
	}

	const joinRoomById = (roomId: string) => {
		const newRoom = getRoomById(roomId);
		if (newRoom) {
			setActiveCategory(newRoom.category);
			setRoom((_) => newRoom);
			// toast.success(`Joined "${newRoom?.name}"`)
			return true;
		} else {
			return false;
		}
	}

	const iterateRoom = () => {
		logEvent(analytics, 'iterate_room');
		if (activeCategory) {
			let currIndex = Rooms[activeCategory].findIndex(x => x.id === room?.id);
			let newRoom: Room;
			if (currIndex === Rooms[activeCategory].length - 1) {
				newRoom = Rooms[activeCategory][0];
			} else {
				const test = currIndex + 1;
				newRoom = Rooms[activeCategory][test];
			}
			setActiveCategory(newRoom.category);
			setRoom((_) => newRoom);
		}
	}

	const isCategoryActive = (id: CategoryId) => {
		return id === activeCategory;
	}

	const onClose = () => {
		close();
	}

	return (
		<S.Wrapper>
			<div className="p-4">
				<MenuHeaderLayout>
					<div>
						<MenuHeader>Join rooms by category</MenuHeader>
						<a className="text-sm opacity-70 cursor-pointer hover:underline" href="https://forms.gle/6w91DeiLotXakNMA6" target="_blank" rel="noreferrer">
							<span className="text-on-background">Suggest a new rooms</span>
							<FontAwesomeIcon icon={faExternalLinkAlt} className="opacity-70 ml-1 text-on-background" size="xs"></FontAwesomeIcon>
						</a>
					</div>
					<Favorites className="ml-auto mr-2" joinRoom={joinRoomById}></Favorites>
					<IconButton onClick={onClose}>
						<CloseIcon style={{ fill: "var(--color-on-background)" }}></CloseIcon>
					</IconButton>
				</MenuHeaderLayout>

				<S.CategoryList>
					{Categories.map((category, index) => (
						<Tooltip key={index} title="Click to reshuffle">
							<S.CategoryWrapper key={index} active={isCategoryActive(category.id)}>
								<S.Category onClick={() => joinCategory(category.id)} active={isCategoryActive(category.id)}>
									<S.CategoryIcon>{category.icon}</S.CategoryIcon>
									<S.CategoryName>{category.name}</S.CategoryName>
								</S.Category>
							</S.CategoryWrapper>
						</Tooltip>
					))}
				</S.CategoryList>
			</div>

			<ActiveRoom category={activeCategory as unknown as Category} room={room} iterateRoom={iterateRoom}></ActiveRoom>
		</S.Wrapper>
	);
}


