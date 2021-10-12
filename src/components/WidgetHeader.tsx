import { Divider, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import styled from "styled-components";
import useDeleteWidget from "../hooks/useDeleteWidget";
import SettingsIcon from '@mui/icons-material/Settings';

const HeaderWrapper = styled.div`
`

const Header = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	padding: 0 .5rem .20rem .75rem;
`

const WidgetTitle = styled.div`
	margin-right: auto;
	font-weight: 500;
`

export function WidgetHeader({ widgetId }: any) {
	const deleteWidget = useDeleteWidget();


	const onCloseClick = () => {
		console.log('clicked');
		deleteWidget(widgetId);
	}

	const onFullScreenClick = () => { }

	return (
		<HeaderWrapper>
			<Header>
				<WidgetTitle>Quote</WidgetTitle>
				<div>
					<IconButton size="small">
						<OpenInFullIcon fontSize="small" />
					</IconButton>
					<IconButton size="small" onClick={onCloseClick}>
						<SettingsIcon fontSize="small" />
					</IconButton>
					<IconButton size="small" onClick={onCloseClick}>
						<CloseIcon fontSize="small" />
					</IconButton>
				</div>
			</Header>
			<Divider />
		</HeaderWrapper>
	)
}