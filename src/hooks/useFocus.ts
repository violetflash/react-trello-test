import { useRef, useEffect } from 'react';

export const useFocus = () => {
    let ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        ref.current?.focus();
    }, []);

    return ref;
};
