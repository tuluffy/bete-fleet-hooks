import {useEffect, useState} from 'react';

type IUseDebounce = <T>(value: T, delay: number) => T;

const useDebounce: IUseDebounce = <T>(value, delay = 0) => {
    const [debounceValue, setDebounceValue] = useState<T>(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(value);
        }, delay);

        return () => {
            clearInterval(handler);
        };
    }, [value, delay]);

    return debounceValue;
};

export { useDebounce };