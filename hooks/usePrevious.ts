import {useEffect, useRef} from 'react';

type IUsePrevious = <T>(state: T) => T;

const usePrevious: IUsePrevious = <T>(state) => {
    const ref = useRef<T | null>(null);

    useEffect(() => {
        ref.current = state;
    }, [state]);

    return ref.current;
};

export { usePrevious };