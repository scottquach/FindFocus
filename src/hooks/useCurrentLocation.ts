import Axios from 'axios';
import { httpsCallable } from 'firebase/functions';
import { useEffect, useState } from 'react';
import { functions } from '../firebase';

export default function useCurrentLocation(options = {}) {
    const [value, setValue] = useState<{
        latitude: number;
        longitude: number;
        country: string;
        countryCode: string;
        region: string;
        regionCode: string;
        locality: string;
    }>();

    const [error, setError] = useState();

    const handleSuccess = (position: any) => {
        const { latitude, longitude } = position.coords;
        const params = {
            access_key: process.env.REACT_APP_POSITIONSTACK_API_KEY,
            query: `${latitude},${longitude}`, // lat,lon or ip address
            limit: 1,
        };

        setValue({
            latitude,
            longitude
        } as unknown as any)

        // const getLocationDetails = httpsCallable(functions, 'getLocationDetails');
        // getLocationDetails({
        //     ...params,
        // }).then(({ data }: any) => {
        //     console.log('RESULT', data);
            // setWeather({
            //     // ...data.main,
            //     // ...data.weather[0],
            //     // ...data.wind,
            //     main: data.weather[0].main,
            //     temp: `${Math.round(data.main.temp)}`,
            //     iconLinkWeatherApp: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
            // });
        // });

        // Axios.get('http://api.positionstack.com/v1/reverse', { params }).then((response: any) => {
        //     let data = response.data.data[0];
        //     setValue({
        //         latitude: data.latitude,
        //         longitude: data.longitude,
        //         country: data.country,
        //         countryCode: data.country_code,
        //         region: data.region,
        //         regionCode: data.region_code,
        //         locality: data.locality || data.neighbourhood,
        //     });
        // });
    };

    const handleError = (error: any) => {
        setError(error.message);
    };

    useEffect(() => {
        // Current setup gives more control over what to do in the different states
        if (navigator.geolocation) {
            navigator.permissions.query({ name: 'geolocation' }).then(function (result) {
                if (result.state === 'granted') {
                    navigator.geolocation.getCurrentPosition(handleSuccess, handleError, options);
                } else if (result.state === 'prompt') {
                    console.log('Prompt');
                } else if (result.state === 'denied') {
                    console.log("Show how to enable location according to the user's browser");
                }

                result.onchange = function () {
                    console.log(result.state);
                };
            });
        } else {
            console.error('Geolocation is not supported');
        }
    }, []);

    return [value, error];
}
