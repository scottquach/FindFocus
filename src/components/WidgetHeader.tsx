import { IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import styled from "styled-components";
import useDeleteWidget from "../hooks/useDeleteWidget";

const Header = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
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
		<Header>
			<WidgetTitle>Quote</WidgetTitle>
			<div>
				<IconButton size="small">
					<OpenInFullIcon fontSize="small" />
				</IconButton>
				<IconButton size="small" onClick={onCloseClick}>
					<CloseIcon fontSize="small" />
				</IconButton>
			</div>
		</Header>
	)
}