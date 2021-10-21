import axios from "axios"
import { useEffect } from "react"
import styled from "styled-components"
import useCurrentLocation from "../../hooks/useCurrentLocation"
import { WidgetFrame } from "../WidgetFrame"


const Frame = styled(WidgetFrame)`

`

export function WeatherWidget() {

	const [location] = useCurrentLocation();

	useEffect(() => {
		loadCurrentWeather();
	}, [])

	function loadCurrentWeather() {
		axios.get("https://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=ba5b34d675cdbcd328126dd87b50ae3b")
			.then(response => {
				console.log(response);

			})

	}



	return (
		<Frame>
			Hello there
		</Frame>
	)
}