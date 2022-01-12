import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import useCurrentLocation from '../../../hooks/useCurrentLocation'
import { WidgetFrame } from '../../WidgetFrame'

const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	min-width: 5rem;
	min-height: 5rem;
`

export default function WeatherWidget({ widgetId }: { widgetId: string }) {
	let options = {
		enableHighAccuracy: true,
		timeout: 6000,
		maximumAge: 0,
	}
	const [location, error] = useCurrentLocation(options);
	const [weather, setWeather] = useState<any>({});
	const [place, setPlace] = useState<any>({});

	console.log(`Location ${JSON.stringify(location)} | city ${JSON.stringify(place)} | navigator ${JSON.stringify(navigator)} else ${error}`)

	useEffect(() => {
		// `https://api.weather.gov/points/47.8115879,-122.2973026`
		Axios.get(`https://api.weather.gov/points/${location?.latitude},${location?.longitude}`) // Only US | Research other apis
			.then((response: any) => {
				console.log(response)
				const relativeLocation = response.data.properties.relativeLocation.properties;
				setPlace({
					city: relativeLocation.city,
					state: relativeLocation.state,
				});
				return Axios.get(response.data.properties.forecast);
			})
			.then((response: any) => {
				console.log(response.data);
				const weatherObject = {
					...response.data?.properties?.periods[0]
				}
				setWeather(weatherObject);
			})
	}, [location])

	return (
		<WidgetFrame widgetId={widgetId}>
			<Content>
				<div className="flex justify-center">
					<div className="text-5xl font-semibold">{weather.temperature}</div>
				</div>
				<div className="font-semibold">{place.city}, {place.state}</div>
			</Content>
		</WidgetFrame>
	)
}
