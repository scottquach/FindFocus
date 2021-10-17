import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Slider } from "@mui/material";
import * as S from './styles';

export function AmbientNoiseWidget() {
	return (
		<div>
			<S.Noise>
				<FontAwesomeIcon icon="cloud-rain"></FontAwesomeIcon>
				<Slider></Slider>
			</S.Noise>




		</div>
	)
}