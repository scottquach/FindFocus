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
	const [location, error] = useCurrentLocation();
	const [weather, setWeather] = useState<any>({});
	const [city, setCity] = useState<any>();

	useEffect(() => {
		Axios.get(`https://api.weather.gov/points/47.8115879,-122.2973026`)
			.then((response: any) => {
				const relativeLocation = response.data.properties.relativeLocation.properties;
				setCity({
					city: relativeLocation.city,
				})
				return Axios.get(response.data.properties.forecast)
			})
			.then((response: any) => {
				console.log(response.data);
				const weatherObject = {
					...response.data?.properties?.periods[0]
				}
				setWeather(weatherObject);
			})
	}, [location])
	console.log('location', location);

	return (
		<WidgetFrame widgetId={widgetId}>
			<Content>
				<div className="flex justify-center">
					<div className="text-5xl font-semibold">{weather.temperature}</div>
				</div>
				<div className="font-semibold">Chandler, Arizona</div>
			</Content>
		</WidgetFrame>
	)
}
