import * as Styles from './styles'
import CoffeeIcon from '@mui/icons-material/Coffee';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import { TextField } from '@mui/material';
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

const cateredVideos = [
	'https://www.youtube.com/embed/5qap5aO4i9A',
	'https://www.youtube.com/embed/eZe4Q_58UTU',
	'',
	''

]

const cateredColors = [
	'#F5EDF0',
	'#BEE7E8',
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

	const onClose = () => {
		close();
	}


	return (
		<Styles.Wrapper>
			<Styles.MenuTitle>Backgrounds</Styles.MenuTitle>

			<Styles.SectionTitle>CATERED VIDEOS</Styles.SectionTitle>
			<Styles.PresetGrid>
				<Styles.Preset className={classNames({ 'selected': true })} onClick={() => setVideoBackground('https://www.youtube.com/watch?v=3nyuWu7dnTM&ab_channel=LauraAngelia')}>
					<CoffeeIcon></CoffeeIcon>
				</Styles.Preset>
				<Styles.Preset className={classNames({ 'selected': true })} onClick={() => setVideoBackground('https://www.youtube.com/watch?v=eZe4Q_58UTU&t=1711s&ab_channel=NomadicAmbience')}>
					<DirectionsWalkIcon></DirectionsWalkIcon>
				</Styles.Preset>
				<Styles.Preset>
					<BeachAccessIcon></BeachAccessIcon>
				</Styles.Preset>
				<Styles.Preset>
					<LocationCityIcon></LocationCityIcon>
				</Styles.Preset>
			</Styles.PresetGrid>

			<Styles.SectionTitle>CATERED IMAGES</Styles.SectionTitle>

			<Styles.ImagePresetGrid>
				{cateredImages.map((url) => {
					return <Styles.ImagePresetContainer key={url} onClick={() => setImageBackground(url)}>
						<Styles.ImagePreset src={url} />
					</Styles.ImagePresetContainer>
				})}
			</Styles.ImagePresetGrid>

			<Styles.SectionTitle>CATERED COLORS</Styles.SectionTitle>

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

		</Styles.Wrapper>
	);
}
