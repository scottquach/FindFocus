import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Content, ForecastContent } from './styles';
import useCurrentLocation from '../../../hooks/useCurrentLocation';
import { WidgetFrame } from '../../WidgetFrame';

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

		Axios.get("https://api.openweathermap.org/data/2.5/weather", { params }) // https://openweathermap.org/current
			.then((response: any) => {
				let data = response.data;
				console.log(data)
				setWeather({
					// ...data.main,
					// ...data.weather[0],
					// ...data.wind,
					main: data.weather[0].main,
					temp: `${Math.round(data.main.temp)}`,
					iconLinkWeatherApp: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
				});
			});

	}, [location])

	return (
        <Content>
            <div className="text-on-background font-semibold mt-2">{place.city}</div>
            <ForecastContent>
                <div className="text-5xl text-on-background font-semibold ml-4">
					{weather.temp}<span className="text-xs text-on-background">{(location?.countryCode === "USA") ? "°F" : "°C"}</span>
				</div>
                <div className="flex flex-col justify-center">
                    <img 
                        src={weather.iconLinkWeatherApp}
                        alt={weather.main}
                        width="65px"
                        height="65px"
                    />
                    <div className="text-base text-on-background italic font-light hover:font-bold">{weather.main}</div>
                </div>
            </ForecastContent>
        </Content>
	)
}
