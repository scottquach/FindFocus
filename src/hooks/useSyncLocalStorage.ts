import { useEffect } from 'react';

/**
 * Any changes to value are saved to local storage immediately after the change.
 * @param key
 * @param value
 */
export default function useSyncLocalStorage(key: string, value: any) {
    console.log('SAVING', key);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value]);
}
