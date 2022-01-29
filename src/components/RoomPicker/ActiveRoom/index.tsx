import { VolumeDown, VolumeUp } from '@mui/icons-material';
import { IconButton, Slider, Stack, Tooltip } from '@mui/material';
import { logEvent } from 'firebase/analytics';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { analytics } from '../../../firebase';
import { Categories, Category, CategoryId, getCategoryById } from '../../../models/category.model';
import { favoritesState, globalVolumeState } from '../../../stores/store';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import * as S from './styles';

export function ActiveRoom({ category, room, iterateRoom }: { category: any, room: any, iterateRoom: () => void }) {
	const [favorites, setFavorites] = useRecoilState(favoritesState);
	const [isFavorite, setIsFavorite] = useState(false);

	// console.log('CATEG', category);

	useEffect(() => {
		setIsFavorite(favorites.includes(room.id));
	}, [room])


	const onFavoriteToggle = () => {
		if (room) {
			const newState = !isFavorite;
			setIsFavorite(newState);
			setFavorites((old) => {
				const set = new Set(old);
				if (newState) {
					set.add(room.id);
				} else {
					set.delete(room.id);
				}
				return Array.from(set);
			})

			if (newState) {
				logEvent(analytics, 'favorite_true');
			} else {
				logEvent(analytics, 'favorite_false');
			}
		}
	}

	return (
		<S.ActiveRoom>
			<S.RoomMetaContainer>
				<S.RoomIcon>{getCategoryById(category)?.icon}</S.RoomIcon>
				<div className="flex-col justify-center items-start">
					<S.ActiveRoomName>{room?.name}</S.ActiveRoomName>
					<S.ActiveRoomOriginal href={room.link} target="_blank">View original</S.ActiveRoomOriginal>
				</div>
				<Tooltip title="Favorite">
					<IconButton onClick={onFavoriteToggle}>
						{isFavorite ?
							<FavoriteIcon style={{ fill: "#fb7185" }}></FavoriteIcon> :
							<FavoriteBorderIcon style={{ fill: "#fb7185" }}></FavoriteBorderIcon>
						}
					</IconButton>
				</Tooltip>
				<Tooltip title="Next room">
					<IconButton onClick={iterateRoom}>
						<ShuffleIcon style={{ fill: "var(--color-on-surface)" }}></ShuffleIcon>
					</IconButton>
				</Tooltip>
			</S.RoomMetaContainer>

			<VolumeRocker className="ml-auto mr-4"></VolumeRocker>
		</S.ActiveRoom>
	)

}


function VolumeRocker({ className }: any) {
	const [volume, setVolume] = useRecoilState(globalVolumeState);

	const handleVolumeChange = (event: Event, newValue: number | number[]) => {
		setVolume(newValue as number);
	};

	const handleQuickMute = () => {
		setVolume(0);
	}

	const handleQuickMax = () => {
		setVolume(75);
	}

	return (
		<Stack className={className} spacing={2} direction="row" sx={{ mb: 1, mt: 1, width: 200 }} alignItems="center">
			<VolumeOffIcon className="cursor-pointer" sx={{ fill: "var(--color-button)" }} onClick={handleQuickMute} />
			<Slider aria-label="Volume" size="small" value={volume} onChange={handleVolumeChange} />
			<VolumeUp className="cursor-pointer" sx={{ fill: "var(--color-button)" }} onClick={handleQuickMax} />
		</Stack>
	)

}