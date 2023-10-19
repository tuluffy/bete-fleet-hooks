import {useEffect, useRef} from 'react';

type Compare = <T>(previous: T, next: T) => boolean;

const useMemoCompare = <T>(next: T, compare: Compare): T => {
    const previousRef = useRef<T>();
    const previous = previousRef.current;

    const isEqual = compare(previous, next);

    useEffect(() => {
        if (!isEqual) {
            previousRef.current = next;
        }
    });

    return isEqual ? previous : next;
}

export { useMemoCompare };