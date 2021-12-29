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
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(handleSuccess, handleError, options);
        } else {
            console.error('Geolocation is not supported');
        }
    }, []);

    return [value, error];
}
