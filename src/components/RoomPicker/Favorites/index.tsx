import { Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { Categories, CategoryId } from "../../../models/category.model";
import { getRoomById, Rooms } from '../../../models/rooms.model';
import { favoritesState } from "../../../stores/store";

import * as S from './styles'

const getCategoryById = (id: CategoryId) => {
	return Categories.find((category) => category.id === id);
}

export function Favorites({ joinRoom }: { joinRoom: (roomId: string) => boolean }) {
	const [favorites] = useRecoilState(favoritesState);
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: any) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = (roomId: string) => {
		joinRoom(roomId);
		setAnchorEl(null);
	};

	const favoriteRooms = favorites?.map((roomId: string) => {
		const room = getRoomById(roomId);
		return room;
	}).filter(Boolean);

	return (
		<div>
			<S.FavoriteButton onClick={handleClick}>
				<div>💖</div>
				<S.RoomName>Favorites</S.RoomName>
			</S.FavoriteButton>
			<Menu
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'favorite-room',
				}}
			>
				{favorites.length > 0 ?
					favoriteRooms.map((room) => {
						return (
							<MenuItem key={room.id} onClick={(event) => handleClose(room.id)}>
								<span className="mr-2">{getCategoryById(room.category)?.icon}</span>
								<span>{room.name}</span>
							</MenuItem>
						)
					}) :
					<MenuItem onClick={() => setAnchorEl(null)}>
						<span className="mr-2">😥</span>
						<span>No favorites chosen</span>
					</MenuItem>
				}
			</Menu>

		</div>
	)
}