import { useEffect } from 'react';

export default function useUpdateLogger(value: any, tag = '') {
    useEffect(() => {
        if (tag) {
            console.log(tag, value);
        } else console.log(value);
    }, [value]);
}
