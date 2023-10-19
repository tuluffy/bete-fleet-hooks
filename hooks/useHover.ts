import {MutableRefObject, useCallback, useEffect, useRef, useState} from 'react';

type IUseHover = () => [MutableRefObject<HTMLElement>, boolean];

const useHover: IUseHover = () => {
    const ref = useRef<HTMLElement>(null);
    const [value, setValue] = useState<boolean>(false);

    const handleMouseover = useCallback(() => {
        setValue(true);
    }, []);

    const handleMouseout = useCallback(() => {
        setValue(false);
    }, []);

    useEffect(() => {
        const node = ref.current;

        if (node) {
            node.addEventListener('mouseover', handleMouseover);
            node.addEventListener('mouseout', handleMouseout);
        }

        return () => {
            node.removeEventListener('mouseover', handleMouseover);
            node.removeEventListener('mouseout', handleMouseout);
        };

    }, [ref.current]);

    return [ref, value];
};

export { useHover };