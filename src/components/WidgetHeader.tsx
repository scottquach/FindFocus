import { IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import styled from "styled-components";
import useDeleteWidget from "../hooks/useDeleteWidget";

const HeaderWrapper = styled.div`
	display: flex;
	justify-contents: space-between;
	align-items: center;
	width: 100%;
	/* background-color: var(--color-primary); */
	/* fill: var(--color-on-primary); */
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
`

const HeaderActions = styled.div`
	margin-left: auto;
	/* display: flex;
	justify-content: flex-end;
	align-items: center; */
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
				<IconButton size="small" onClick={onCloseClick}>
					{/* <CloseIcon fontSize="small" style={{ fill: "var(--color-on-primary)"}}/> */}
					<CloseIcon fontSize="small" />
				</IconButton>
			</HeaderActions>
		</HeaderWrapper>
	)
}