import { useState } from 'react';

function getCurrentLocation() {
    navigator.geolocation.getCurrentPosition(
        () => {},
        () => {}
    );
}

export default function useCurrentLocation() {
    const [value, setValue] = useState();

    return [value, setValue];
}
