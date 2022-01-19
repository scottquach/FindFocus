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

const TempForecastContent = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
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

	// console.log(`Location ${JSON.stringify(location)} | city ${JSON.stringify(place)} | navigator ${JSON.stringify(navigator)} else ${error}`)

	const params = {
		lat: location?.latitude,
		lon: location?.longitude,
		units: "imperial",
		appid: process.env.REACT_APP_WEATHER_API_KEY,
	}

	useEffect(() => {
		//Axios.get("http://api.openweathermap.org/data/2.5/weather", { params }) // ?lat=${location?.latitude}&lon=${location?.longitude}&appid=${API_KEY}
		Axios.get("http://api.openweathermap.org/data/2.5/weather", { params }) // https://openweathermap.org/current
			.then((response: any) => {
				let data = response.data;
				console.log(data);
				setWeather({
					...data.main,
					...data.weather[0],
					...data.wind,
					iconLink: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
				});
				setPlace({
					city: data.name,
					country: data.sys.country,
				});

				console.log(place, weather);
			});

		// `https://api.weather.gov/points/47.8115879,-122.2973026`
		// Axios.get(`https://api.weather.gov/points/${location?.latitude},${location?.longitude}`) // Only US | Research other apis
		// 	.then((response: any) => {
		// 		console.log(response)
		// 		const relativeLocation = response.data.properties.relativeLocation.properties;
		// 		setPlace({
		// 			city: relativeLocation.city,
		// 			state: relativeLocation.state,
		// 		});
		// 		return Axios.get(response.data.properties.forecast);
		// 	})
		// 	.then((response: any) => {
		// 		console.log(response.data);
		// 		const weatherObject = {
		// 			...response.data?.properties?.periods[0]
		// 		}
		// 		setWeather(weatherObject);
		// 	})
	}, [location])

	return (
		<WidgetFrame widgetId={widgetId}>
			<Content>
				<TempForecastContent>
					<div className="text-5xl font-semibold ml-4">{Math.round(weather.temp)}°</div>
					<div className="flex flex-col justify-center">
						<img 
							src={weather.iconLink}
							alt={weather.main}
							width="auto"
							height="auto"
						/>
						<div className="text-base italic font-light hover:font-bold">{weather.main}</div>
					</div>
				</TempForecastContent>
				<div className="font-semibold">{place.city}</div>
			</Content>
		</WidgetFrame>
	)
}
