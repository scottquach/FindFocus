import { IconButton, Tooltip } from "@mui/material"
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import ShareTwoToneIcon from '@mui/icons-material/ShareTwoTone';
import styled from "styled-components"

export function UtilityBar() {
	const UtilityBar = styled.div`
		display: flex;
		justify-content: flex-end;
		position: absolute;
		top: 1rem;
		right: 1rem;
		/* height: 2.5rem; */
	`

	const BarButton = styled.div`
		border: 1px solid lightgray;
		border-radius: 24px;
		margin-right: .5rem;

		:last-child {
			margin-right: 0rem;
		}
	`

	function triggerFullscreen() {
		console.log('trigger overall fullscreen')
	}

	return (
		<UtilityBar>
			<BarButton>
				<Tooltip title="Share">
					<IconButton size="small" onClick={triggerFullscreen}>
						<ShareTwoToneIcon></ShareTwoToneIcon>
					</IconButton>
				</Tooltip>
			</BarButton>
			<BarButton>
				<Tooltip title="Fullscreen">
					<IconButton size="small" onClick={triggerFullscreen}>
						<FullscreenIcon></FullscreenIcon>
					</IconButton>
				</Tooltip>
			</BarButton>
		</UtilityBar>
	)

}