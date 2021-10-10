import * as S from './styles'
import CoffeeIcon from '@mui/icons-material/Coffee';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import { TextField, Tooltip } from '@mui/material';
import classNames from 'classnames';
import { useSetRecoilState } from 'recoil';
import { backgroundState } from '../../stores/store';
import { BackgroundType } from '../../models/background-types.enum';

const cateredImages = [
	'https://images.unsplash.com/photo-1475359524104-d101d02a042b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1594&q=80',
	'https://images.unsplash.com/photo-1484291470158-b8f8d608850d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
	'https://images.unsplash.com/photo-1517757910079-f57fd7f49a91?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2068&q=80',
	'https://images.unsplash.com/photo-1524778153300-4c80b64c322e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
	'https://images.unsplash.com/photo-1619199748576-75ae8022c73f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80'
]

const cateredVideos = {
	cafe: [],
	walk: [],
	beach: [],
	city: [],
}


const cateredColors = [
	'#DAF7DC',
	'#BEE7E8',
	'#EBBAB9',
	'#FFE4FA',
	'#212121'
]

export function BackgroundPicker({ close }: any) {
	const setBackground = useSetRecoilState(backgroundState);

	const setImageBackground = (imageUrl: string) => {
		setBackground((old) => ({
			type: BackgroundType.Image,
			value: imageUrl
		}));
	}

	const setVideoBackground = (videoUrl: string) => {
		setBackground((old) => ({
			type: BackgroundType.Video,
			value: videoUrl
		}));
	}

	const setColorBackground = (color: string) => {
		setBackground((old) => ({
			type: BackgroundType.Color,
			value: color
		}));
	}

	const onClose = () => {
		close();
	}


	return (
		<S.Wrapper>
			<S.MenuTitle>Backgrounds</S.MenuTitle>

			<S.SectionTitle>CATERED VIDEOS</S.SectionTitle>
			<S.PresetGrid>
				<Tooltip title="Cafe">
					<S.VideoPreset className={classNames({ 'selected': false })} onClick={() => setVideoBackground('https://www.youtube.com/watch?v=3nyuWu7dnTM&ab_channel=LauraAngelia')}>
						<CoffeeIcon></CoffeeIcon>
					</S.VideoPreset>
				</Tooltip>
				<Tooltip title="Walk">
					<S.VideoPreset className={classNames({ 'selected': false })} onClick={() => setVideoBackground('https://www.youtube.com/watch?v=eZe4Q_58UTU&t=1711s&ab_channel=NomadicAmbience')}>
						<DirectionsWalkIcon></DirectionsWalkIcon>
					</S.VideoPreset>
				</Tooltip>
				<Tooltip title="Beach">
					<S.VideoPreset className={classNames({ 'selected': false })} onClick={() => setVideoBackground('https://www.youtube.com/watch?v=DGIXT7ce3vQ&ab_channel=RelaxingSoundzzz')}>
						<BeachAccessIcon></BeachAccessIcon>
					</S.VideoPreset>
				</Tooltip>
				<Tooltip title="City">
					<S.VideoPreset className={classNames({ 'selected': false })} onClick={() => setVideoBackground('https://www.youtube.com/watch?v=AdUw5RdyZxI&ab_channel=EarthCam')}>
						<LocationCityIcon></LocationCityIcon>
					</S.VideoPreset>
				</Tooltip>
			</S.PresetGrid>

			<S.SectionTitle>CATERED IMAGES</S.SectionTitle>

			<S.ImagePresetGrid>
				{cateredImages.map((url) => {
					return <S.ImagePresetContainer key={url} onClick={() => setImageBackground(url)}>
						<S.ImagePreset src={url} />
					</S.ImagePresetContainer>
				})}
			</S.ImagePresetGrid>

			<S.SectionTitle>CATERED COLORS</S.SectionTitle>
			<S.PresetGrid>
				{cateredColors.map((color) => {
					return (
						<S.ColorPresetContainer key={color} onClick={() => setColorBackground(color)}>
							<S.ColorPreset color={color}></S.ColorPreset>
						</S.ColorPresetContainer>
					)
				})}
			</S.PresetGrid>


			{/* <Styles.SectionTitle>Custom backgrounds</Styles.SectionTitle>

			<Styles.CustomGrid>
				<Styles.Custom>
					<Styles.CustomHeader>YouTube Video</Styles.CustomHeader>
					<Styles.CustomDescription>Use your own custom video link for the background</Styles.CustomDescription>
					<TextField size="small"></TextField>
				</Styles.Custom>

				<Styles.Custom>
					<Styles.CustomHeader>Image URL</Styles.CustomHeader>
					<Styles.CustomDescription>Use your own image link for the background</Styles.CustomDescription>
					<TextField size="small"></TextField>
				</Styles.Custom>
			</Styles.CustomGrid> */}

		</S.Wrapper>
	);
}
