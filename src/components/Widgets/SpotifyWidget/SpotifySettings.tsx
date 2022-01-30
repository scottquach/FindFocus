import { IconButton, Popper, Tooltip } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings';
import React, { useState } from 'react'
import styled from 'styled-components';
import { Input } from '../../../styles/Input';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';

export const SettingsContainer = styled.div`
    background-color: var(--color-background);
    border-radius: 12px;
	padding: 1rem;
	width: 20rem;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`

export default function SpotifySettings({ updateLink, currentLink }: { updateLink: (url: string) => void, currentLink: string }) {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const [link, setLink] = useState(currentLink);
	const open = Boolean(anchorEl);

	const handleClick = (event: any) => {
		setAnchorEl(anchorEl ? null : event.currentTarget);
	};

	const handleLinkChange = (event: any) => {
		setLink(event.target.value)
	}

	const saveCustomLink = () => {
		const tokens = link.split('/')
		const id = tokens[tokens.length - 1];
		updateLink(`https://open.spotify.com/embed/playlist/${id}`);
	}

	const resetLink = () => {
		setLink('https://open.spotify.com/embed/playlist/0vvXsWCC9xrXsKd4FyS8kM');
		updateLink('https://open.spotify.com/embed/playlist/0vvXsWCC9xrXsKd4FyS8kM');
	}

	return (
		<div>
			<IconButton size="small" onClick={handleClick}>
				<SettingsIcon sx={{ fill: "var(--color-primary)"}}></SettingsIcon>
			</IconButton>
			<Popper open={open} anchorEl={anchorEl}>
				<SettingsContainer>
					<div className="flex items-center justify-between mb-4">
						<div className="font-bold text-on-background">Settings</div>
						<IconButton sx={{ padding: .5 }} onClick={() => setAnchorEl(null)}>
							<CloseIcon fontSize="small" sx={{ fill: "var(--color-on-background)" }}></CloseIcon>
						</IconButton>
					</div>

					<div className="w-full mt-1">
						<div className="text-sm text-on-background opacity-75 font-semibold mb-1">Playlist URL</div>
						<Input placeholder="Spotify playlist URL" type="text" value={link} onChange={handleLinkChange}></Input>
					</div>
					<div className="flex justify-end">
						<Tooltip title="Save URL">
							<IconButton onClick={saveCustomLink}>
								<SaveIcon sx={{ fill: "var(--color-on-background)" }}></SaveIcon>
							</IconButton>
						</Tooltip>
						<Tooltip title="Reset">
							<IconButton onClick={resetLink}>
								<RestartAltIcon sx={{ fill: "var(--color-on-background)" }}></RestartAltIcon>
							</IconButton>
						</Tooltip>
					</div>
				</SettingsContainer>
			</Popper>
		</div>
	)
}
