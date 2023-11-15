import { useEffect, useState } from 'react';

export function useFetch(fetchFn) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [fetchedData, setFetchedData] = useState();

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);

            try {
                const data = await fetchFn();
                setFetchedData(data);
            } catch (error) {
                setError(error.message || `Failed to fetch data.`);
            }

            setIsLoading(false);
        }

        fetchData();
    }, [fetchFn]);

    return {
        isLoading,
        error,
        fetchedData
    };
}