import { IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import styled from "styled-components";
import { WidgetFrame } from "./WidgetFrame";
import { WidgetPreview } from "./WidgetPreview";
import * as S from "./WidgetPicker.styles";
import { WidgetType } from "../models/widget-types.enum";

enum WidgetCategories {
	Audio = 'audio',
	Embed = 'embed'
}

const WidgetList =
	[
		{
			title: 'Spotify',
			description: 'Embed a spotify playlist or song',
			type: WidgetType.Spotify
		},
		{
			title: 'SoundCloud',
			description: 'Play SoundlCloud playlists',
			type: WidgetType.SoundCloud
		},
		{
			title: 'Youtube Embed',
			description: 'Embed a youtube video',
			type: WidgetType.YouTube
		},
		{
			title: 'Quote',
			description: 'See a new quote every day!',
			type: WidgetType.Quote
		}
	]


export function WidgetPicker({ close }: any) {

	function closePicker() {
		console.log('closed called')
		close()
	}

	function addWidget() {

	}

	return (
		<S.Wrapper>
			<S.MenuHeader>
				<S.MenuTitle>Explore Widgets</S.MenuTitle>
				<IconButton onClick={closePicker}>
					<CloseIcon></CloseIcon>
				</IconButton>
			</S.MenuHeader>
			<S.Categories>
				<S.WidgetCategory>
					{/* <S.WidgetCategoryHeader>Audio</S.WidgetCategoryHeader> */}
					<S.WidgetCategoryList>
						{WidgetList.map((widget) => {
							return <WidgetPreview key={widget.type} type={widget.type} title={widget.title} description={widget.description}></WidgetPreview>
						})}
					</S.WidgetCategoryList>
				</S.WidgetCategory>
				{/* <S.WidgetCategory>
					<S.WidgetCategoryHeader>Embed</S.WidgetCategoryHeader>
					<S.WidgetCategoryList>
						{WidgetList.embed.map((widget) => {
							return <WidgetPreview key={widget.id} title={widget.title} description={widget.description}></WidgetPreview>
						})}
					</S.WidgetCategoryList>
				</S.WidgetCategory> */}
			</S.Categories>
		</S.Wrapper>
	)
}