import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useCurrentLocation from '../../../hooks/useCurrentLocation';
import { WidgetFrame } from '../../WidgetFrame';

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
	margin: 0rem 0rem 1rem 0rem
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

	useEffect(() => {
		//Axios.get("http://api.openweathermap.org/data/2.5/weather", { params }) // ?lat=${location?.latitude}&lon=${location?.longitude}&appid=${API_KEY}
		let params = {
			lat: location?.latitude,
			lon: location?.longitude,
			units: "",
			appid: process.env.REACT_APP_WEATHER_API_KEY,
		};

		params.units = (location?.countryCode === "USA") ? "imperial" : "metric";

		setPlace({
			city: location?.locality,
			country: location?.country,
			countryCode: location?.countryCode,
			region: location?.region,
			regionCode: location?.regionCode,
		});

		Axios.get("http://api.openweathermap.org/data/2.5/weather", { params }) // https://openweathermap.org/current
			.then((response: any) => {
				let data = response.data;
				console.log(data)
				setWeather({
					// ...data.main,
					// ...data.weather[0],
					// ...data.wind,
					main: data.weather[0].main,
					temp: `${Math.round(data.main.temp)} ${(location?.countryCode === "USA") ? "°F" : "°C"}`,
					iconLinkWeatherApp: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
				});
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
				<div className="text-on-background font-semibold mt-4">{place.city}</div>
				<TempForecastContent>
					<div className="text-5xl text-on-background font-semibold ml-4">{weather.temp}</div>
					<div className="flex flex-col justify-center">
						<img 
							src={weather.iconLinkWeatherApp}
							alt={weather.main}
							width="auto"
							height="auto"
						/>
						<div className="text-base text-on-background italic font-light hover:font-bold">{weather.main}</div>
					</div>
				</TempForecastContent>
			</Content>
		</WidgetFrame>
	)
}
