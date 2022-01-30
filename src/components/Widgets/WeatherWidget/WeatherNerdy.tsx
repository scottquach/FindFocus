import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Content, ForecastContent } from './styles'
import useCurrentLocation from '../../../hooks/useCurrentLocation';
import { WidgetFrame } from '../../WidgetFrame';
import { functions } from '../../../firebase';
import { httpsCallable } from 'firebase/functions';

export default function WeatherNerdy() {
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
        if (location?.latitude && location.longitude) {
            let params = {
                lat: location?.latitude,
                lon: location?.longitude,
                units: (location?.countryCode === "USA") ? "imperial" : "metric",
                // appid: process.env.REACT_APP_WEATHER_API_KEY,
            };
            setPlace({
                city: location?.locality,
                country: location?.country,
                countryCode: location?.countryCode,
                region: location?.region,
                regionCode: location?.regionCode,
            });
            console.log(params);

            const getWeather = httpsCallable(functions, 'getWeather');
            getWeather({
                ...params
            }).then(({ data }: any) => {
                // console.log("RESULT", data);
                setWeather({
                    ...data.main,
                    ...data.weather[0],
                    ...data.wind,
                    main: data.weather[0].main,
                    temp: `${Math.round(data.main.temp)}`,
                    iconLinkWeatherApp: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
                });
            })
        }

        // Axios.get("https://api.openweathermap.org/data/2.5/weather", { params }) // https://openweathermap.org/current
        //     .then((response: any) => {
        //         let data = response.data;
        //         console.log(data)
        //         setWeather({
        //             ...data.main,
        //             ...data.weather[0],
        //             ...data.wind,
        //             main: data.weather[0].main,
        //             temp: `${Math.round(data.main.temp)}`,
        //             iconLinkWeatherApp: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        //         });
        //     });
    }, [location])

    return (
        <Content>
            <div className="text-on-background font-semibold my-2">{place.city}</div>
            <ForecastContent>
                <div className="flex flex-col justify-center">
                    <div className="flex flex-col justify-center mx-2">
                        <span className="text-xs text-on-background">Temperature</span>
                        <div className="text-4xl text-on-background font-semibold">
                            {weather.temp}<span className="text-xs text-on-background">{(location?.countryCode === "USA") ? "°F" : "°C"}</span>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center">
                        <div className="flex flex-col justify-center mx-2">
                            <span className="text-xs text-on-background">Max</span>
                            <div className="text-1xl text-on-background font-semibold">{Math.round(weather.temp_max)}</div>
                        </div>
                        <div className="flex flex-col justify-center mx-2">
                            <span className="text-xs text-on-background">Feels like</span>
                            <div className="text-1xl text-on-background font-semibold">{Math.round(weather.feels_like)}</div>
                        </div>
                        <div className="flex flex-col justify-center mx-2">
                            <span className="text-xs text-on-background">Min</span>
                            <div className="text-1xl text-on-background font-semibold">{Math.round(weather.temp_min)}</div>
                        </div>
                    </div>
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
            {/* <div className="text-xs text-on-background italic font-light">
                *All units are according to the <span className="font-semibold">{params.units} </span>system
            </div> */}
        </Content>
    )
}
