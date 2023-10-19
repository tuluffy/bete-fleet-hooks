import {useEffect, useRef, useState} from 'react';
import type {RefObject} from 'react';

type IUseOnClickOutside = <T>(ref: RefObject<HTMLElement>, handler: Function) => boolean;

const useOnClickOutside: IUseOnClickOutside = (ref, handler) => {
    const [isOutside, setIsOutside] = useState(false);

    const s = useRef();
    useEffect(() => {
        const listener = (event) => {
            if (!ref.current || ref.current.contains(event.target)) {
                setIsOutside(false);
                return;
            }

            setIsOutside(true);
            handler(event);
        };

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [ref, handler]);

    return isOutside;
};

export {useOnClickOutside};