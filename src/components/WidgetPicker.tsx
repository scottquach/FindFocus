import { IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { WidgetPreview } from "./WidgetPreview";
import * as S from "./WidgetPicker.styles";
import { WidgetType } from "../models/widget-types.enum";

enum WidgetCategories {
	Audio = 'audio',
	Embed = 'embed'
}

const AudioWidgets = [
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
]

const ProductivityWidgets = [
	{
		title: 'Clock',
		description: 'Display the time',
		type: WidgetType.Clock
	},
	{
		title: 'Youtube Embed',
		description: 'Embed a youtube video',
		type: WidgetType.YouTube
	},
];
const InspirationWidgets = [
	{
		title: 'Quote',
		description: 'See a new quote every day!',
		type: WidgetType.Quote
	}
];



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
				<S.SectionTitle>AUDIO</S.SectionTitle>
				<S.WidgetCategory>
					<S.WidgetCategoryList>
						{AudioWidgets.map((widget) => {
							return <WidgetPreview key={widget.type} type={widget.type} title={widget.title} description={widget.description}></WidgetPreview>
						})}
					</S.WidgetCategoryList>
				</S.WidgetCategory>
				<S.SectionTitle>PRODUCTIVITY</S.SectionTitle>
				<S.WidgetCategoryList>
					{ProductivityWidgets.map((widget) => {
						return <WidgetPreview key={widget.type} type={widget.type} title={widget.title} description={widget.description}></WidgetPreview>
					})}
				</S.WidgetCategoryList>

				<S.SectionTitle>INSPIRATION</S.SectionTitle>
				<S.WidgetCategoryList>
					{InspirationWidgets.map((widget) => {
						return <WidgetPreview key={widget.type} type={widget.type} title={widget.title} description={widget.description}></WidgetPreview>
					})}
				</S.WidgetCategoryList>
				{/* <S.SectionTitle>EMBEDS</S.SectionTitle> */}
			</S.Categories>
		</S.Wrapper>
	)
}