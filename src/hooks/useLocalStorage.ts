import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialData: T) {
    const [ data, setData ] = useState<T>(() => {
        const dataFromLocalStorage = localStorage.getItem(key);

        if (dataFromLocalStorage) {
            return JSON.parse(dataFromLocalStorage);
        }
        localStorage.setItem(key, JSON.stringify(initialData));
        return initialData;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(data));
    }, [data]);

    return [
        data,
        setData
    ] as const;
}