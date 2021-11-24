import { faCloudRain, faCoffee, faDove, faFire, faPooStorm, faWater, faWind, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { Slider } from "@mui/material";
import { useEffect, useState } from "react";
import { WidgetFrame } from "../../WidgetFrame";
import * as S from './styles';
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../../firebase";
import useAudio from "../../../hooks/useAudio";

enum NoiseId {
	Rain = 'rain',
	Thunder = 'thunder',
	Wind = 'wind',
	Fire = 'fire',
	Water = 'water',
	Bird = 'bird',
	Cafe = 'cafe'
}

// Create a reference with an initial file path and name

const noisePaths: { [id: string]: string } = {
	[NoiseId.Rain]: 'ambient_audio/ambient_rain.mp3',
	[NoiseId.Thunder]: 'ambient_audio/ambient_thunder.mp3',
	[NoiseId.Wind]: 'ambient_audio/ambient_wind_storm.mp3',
	[NoiseId.Fire]: 'ambient_audio/ambient_fire.mp3',
	[NoiseId.Water]: 'ambient_audio/ambient_ocean_beach.mp3',
	[NoiseId.Bird]: 'ambient_audio/ambient_birds.mp3',
	[NoiseId.Cafe]: 'ambient_audio/ambient_cafe.mp3'
	// [NoiseId.Thunder]: 'ambient_audio/ambient_thunder.mp3',
	// [NoiseId.Thunder]: 'ambient_audio/ambient_thunder.mp3',
}

function Noise({ noiseId, icon }: { noiseId: NoiseId, icon: IconDefinition }) {
	const [playing, toggle, setAudio, volume, setVolume] = useAudio();

	useEffect(() => {
		getDownloadURL(ref(storage, noisePaths[noiseId]))
			.then(url => {
				console.log(url);
				setAudio(url);
			})
			.catch(console.error)
	}, [])

	const onVolumeSliderChange = (event: any, newValue: number | number[]) => {
		console.log(newValue);
		setVolume(newValue as number);
	}

	return (
		<S.Noise>
			<S.NoiseIcon icon={icon} size="2x" onClick={() => toggle()} active={playing ? 1 : 0}></S.NoiseIcon>
			{playing && <Slider size="small" value={volume} step={0.01} min={0} max={1} onChange={onVolumeSliderChange}></Slider>}
		</S.Noise>
	)
}


export function AmbientNoiseWidget({ widgetId }: any) {
	// const [_] = useState(new Audio());

	// const [active, setActive] = useState({
	// 	[NoiseId.Rain]: false,
	// 	[NoiseId.Thunder]: false,
	// 	[NoiseId.Wind]: false,
	// 	[NoiseId.Fire]: false,
	// 	[NoiseId.Water]: false,
	// 	[NoiseId.Bird]: false
	// });

	return (
		<WidgetFrame>
			<S.Content>
				<Noise noiseId={NoiseId.Rain} icon={faCloudRain}></Noise>
				<Noise noiseId={NoiseId.Thunder} icon={faPooStorm}></Noise>
				<Noise noiseId={NoiseId.Wind} icon={faWind}></Noise>

				<Noise noiseId={NoiseId.Fire} icon={faFire}></Noise>
				<Noise noiseId={NoiseId.Water} icon={faWater}></Noise>
				<Noise noiseId={NoiseId.Bird} icon={faDove}></Noise>
				<Noise noiseId={NoiseId.Cafe} icon={faCoffee}></Noise>
				{/* <S.Noise>
					<FontAwesomeIcon icon={faFire} size="2x"></FontAwesomeIcon>
					<Slider size="small"></Slider>
				</S.Noise>
				<S.Noise>
					<FontAwesomeIcon icon={faWater} size="2x"></FontAwesomeIcon>
					<Slider size="small"></Slider>
				</S.Noise>
				<S.Noise>
					<FontAwesomeIcon icon={faDove} size="2x"></FontAwesomeIcon>
					<Slider size="small"></Slider>
				</S.Noise> */}

			</S.Content>
		</WidgetFrame>
	)
}