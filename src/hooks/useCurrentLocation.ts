import { useEffect, useState } from 'react';

export default function useCurrentLocation(options = {}) {
    const [value, setValue] = useState<{ latitude: number; longitude: number }>();
    const [error, setError] = useState();

    const handleSuccess = (position: any) => {
        const { latitude, longitude } = position.coords;

        setValue({
            latitude,
            longitude,
        });
    };

    const handleError = (error: any) => {
        setError(error.message);
    };

    useEffect(() => {
        // Current setup gives more control over what to do in the different states
        if (navigator.geolocation) {
            navigator.permissions.query({"name": "geolocation"}).then(function (result) {
                if (result.state === "granted") {
                    navigator.geolocation.getCurrentPosition(handleSuccess, handleError, options);
                } else if (result.state === "prompt") {
                    console.log('Prompt');
                } else if (result.state === "denied") {
                    console.log('Show how to enable location');
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
