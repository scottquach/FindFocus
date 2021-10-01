import { useEffect } from 'react';

export default function useUpdateLogger(value: any, tag: string = '') {
    useEffect(() => {
        if (tag) {
            console.log(tag, value);
        } else console.log(value);
    }, [value]);
}
