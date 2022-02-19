import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Content, ForecastContent } from './styles';
import useCurrentLocation from '../../../hooks/useCurrentLocation';
import { WidgetFrame } from '../../WidgetFrame';
import { httpsCallable } from 'firebase/functions';
import { functions } from '../../../firebase';

export default function WeatherMinimal() {
	let options = {
		enableHighAccuracy: true,
		timeout: 6000,
		maximumAge: 0,
	}
	const [location, error] = useCurrentLocation(options);
	const [weather, setWeather] = useState<any>({});
	const [place, setPlace] = useState<any>({});

	useEffect(() => {
		console.error('Error getting location', error);
	}, [error])

	useEffect(() => {
		if (location?.latitude && location.longitude) {
			let params = {
				lat: location?.latitude,
				lon: location?.longitude,
				units: "",
			};

			params.units = (location?.countryCode === "USA") ? "imperial" : "metric";

			setPlace({
				city: location?.locality,
				country: location?.country,
				countryCode: location?.countryCode,
				region: location?.region,
				regionCode: location?.regionCode,
			});


			const getWeather = httpsCallable(functions, 'getWeather');
			getWeather({
				...params
			}).then(({ data }: any) => {
				console.log("RESULT", data);
				setWeather({
					// ...data.main,
					// ...data.weather[0],
					// ...data.wind,
					main: data.weather[0].main,
					temp: `${Math.round(data.main.temp)}`,
					iconLinkWeatherApp: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
				});
			})
		}

	}, [location])

	return (
		<Content>
			<div className="text-primary font-semibold mt-2">{place.city}</div>
			<ForecastContent>
				<div className="text-5xl text-primary font-semibold ml-4">
					{weather.temp}<span className="text-xs text-primary">{(location?.countryCode === "USA") ? "°F" : "°C"}</span>
				</div>
				<div className="flex flex-col justify-center">
					<img
						src={weather.iconLinkWeatherApp}
						alt={weather.main}
						width="65px"
						height="65px"
					/>
					<div className="text-base text-primary italic font-light hover:font-bold">{weather.main}</div>
				</div>
			</ForecastContent>
		</Content>
	)
}
