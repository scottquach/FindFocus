import { useState, useEffect } from 'react';

function getSavedValue(key: string, initialValue: any) {
    // const savedValue = JSON.parse(localStorage.getItem(key));
    const val = localStorage.getItem(key);
	if (val) return JSON.parse(val);

    if (initialValue instanceof Function) return initialValue();
	return initialValue;
}

export default function useLocalStorage(key: string, initialValue: string = '') {
    const [value, setValue] = useState(() => {
        return getSavedValue(key, initialValue);
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value]);

    return [value, setValue];
}
