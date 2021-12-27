import { useEffect } from 'react';

/**
 * Any changes to value are saved to local storage immediately after the change.
 * @param key
 * @param value
 */
export default function useSyncLocalStorage(key: string, value: any) {
    useEffect(() => {
        console.log('SAVING', key);
        localStorage.setItem(key, JSON.stringify(value));
    }, [value]);
}
