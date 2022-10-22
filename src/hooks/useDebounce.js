import { useEffect, useState } from 'react';

function useDebounce(value, delay) {
    const [debounced, setDebounced] = useState(value);

    useEffect(() => {
        const setTime = setTimeout(() => {
            setDebounced(value);
        }, delay);

        return () => {
            clearTimeout(setTime);
        };
    }, [value, delay]);

    return debounced;
}

export default useDebounce;
