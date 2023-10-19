import {useCallback, useEffect, useState} from 'react';

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    const handlerResize = useCallback(() => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    }, []);

    useEffect(() => {
        window.addEventListener('resize', handlerResize);

        return () => {
            window.removeEventListener('resize', useWindowSize);
        };
    }, []);

    return windowSize;
};

export { useWindowSize };