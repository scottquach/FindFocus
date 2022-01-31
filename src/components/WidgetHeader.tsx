import { IconButton, Tooltip } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import styled from "styled-components";
import RemoveIcon from '@mui/icons-material/Remove';
import useDeleteWidget from "../hooks/useDeleteWidget";

const HeaderWrapper = styled.div`
	display: flex;
	justify-contents: space-between;
	align-items: center;
	width: 100%;
	border-top-left-radius: var(--widget-border-radius);
	border-top-right-radius: var(--widget-border-radius);
	padding: .15rem .5rem;
	cursor: grab;
`

const HeaderTitle = styled.div`
	font-weight: 600;
	opacity: 70%;
	font-size: 14px;
	margin-left: .25rem;
	color: var(--color-primary);
`

const HeaderActions = styled.div`
	margin-left: auto;
`

export function WidgetHeader({ widgetId, title, deleteWidget }: any) {

	const onCloseClick = () => {
		deleteWidget(widgetId);
	}

	const onFullScreenClick = () => { }

	return (
		<HeaderWrapper className="WidgetHeader shadow-sm">
			<HeaderTitle>{title}</HeaderTitle>
			<HeaderActions>
				<Tooltip title="Remove">
					<IconButton size="small" onClick={onCloseClick} >
						<RemoveIcon fontSize="inherit" style={{ fill: "var(--color-primary)"}} />
					</IconButton>
				</Tooltip>
			</HeaderActions>
		</HeaderWrapper>
	)
}