import { IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import styled from "styled-components";
import useDeleteWidget from "../hooks/useDeleteWidget";

const HeaderWrapper = styled.div`
	background-color: var(--color-primary);
	border-top-left-radius: var(--widget-border-radius);
	border-top-right-radius: var(--widget-border-radius);
	padding: 0 .5rem;
	cursor: move;
`

const Header = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
`

export function WidgetHeader({ widgetId }: any) {
	const deleteWidget = useDeleteWidget();


	const onCloseClick = () => {
		// console.log('clicked', widgetId);
		deleteWidget(widgetId);
	}

	const onFullScreenClick = () => { }

	return (
		<HeaderWrapper>
			<Header>
				<IconButton size="small" onClick={onCloseClick}>
					<CloseIcon fontSize="small" />
				</IconButton>
			</Header>
		</HeaderWrapper>
	)
}