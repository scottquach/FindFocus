import { IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import styled from "styled-components";
import { WidgetFrame } from "./WidgetFrame";
import { WidgetPreview } from "./WidgetPreview";
import * as S from "./WidgetPicker.styles";

enum WidgetCategories {
	Audio = 'audio',
	Embed = 'embed'
}

const WidgetList = {
	audio: [
		{
			id: 'spotify',
			title: 'Spotify',
			description: 'Embed a spotify playlist or song'
		},
		{
			id: 'soundcloud',
			title: 'SoundCloud',
			description: 'Play SoundlCloud playlists'
		},
		{
			id: 'study_board',
			title: 'Study board',
			description: 'Nice study music'
		}
	],
	embed: [
		{
			id: 'youtube',
			title: 'Youtube Embed',
			description: 'Embed a youtube video'
		},
		{
			id: 'generic_embed',
			title: 'Generic embed',
			description: 'Embed your own website!'
		}
	]
}

export function WidgetPicker({ close }: any) {

	function closePicker() {
		console.log('closed called')
		close()
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
					<S.WidgetCategoryHeader>Audio</S.WidgetCategoryHeader>
					<S.WidgetCategoryList>
						{WidgetList.audio.map((widget) => {
							return <WidgetPreview key={widget.id} title={widget.title} description={widget.description}></WidgetPreview>
						})}
					</S.WidgetCategoryList>
				</S.WidgetCategory>
				<S.WidgetCategory>
					<S.WidgetCategoryHeader>Embed</S.WidgetCategoryHeader>
					<S.WidgetCategoryList>
						{WidgetList.embed.map((widget) => {
							return <WidgetPreview key={widget.id} title={widget.title} description={widget.description}></WidgetPreview>
						})}
					</S.WidgetCategoryList>
				</S.WidgetCategory>
			</S.Categories>
		</S.Wrapper>
	)
}