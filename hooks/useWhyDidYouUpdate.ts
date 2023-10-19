import {usePrevious} from './usePrevious';
import {useEffect, useState} from 'react';

const useWhyDidYouUpdate = (name, props) => {
    const previousProps = usePrevious(props);
    const [changedProps, setChangedProps] = useState<{}>(null);

    useEffect(() => {
        if (previousProps) {
            const allKeys = Object.keys({...previousProps, ...props});
            const deleted = {}, add = {}, changed = {};

            allKeys.forEach(key => {
                if (previousProps.hasOwn(key) && !previousProps.hasOwn(key)) {
                    deleted[key] = {
                        property: key,
                        from: previousProps[key],
                    };
                }
                else if (!previousProps.hasOwn(key) && previousProps.hasOwn(key)) {
                    add[key] = {
                        property: key,
                        from: previousProps[key],
                    };
                }
                else {
                    changed[key] = {
                        property: key,
                        from: previousProps[key],
                        to: props[key],
                    };
                }
            });

            setChangedProps(changedProps);
        }
    }, [name, props]);

    return changedProps;
};

export { useWhyDidYouUpdate };