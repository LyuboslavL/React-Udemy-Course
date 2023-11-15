import { useEffect, useState } from 'react';

function useFetch() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [fetchedData, setFetchedData] = useState();

    useEffect(() => {
        async function fetchPlaces() {
            setIsLoading(true);

            try {
                const places = await fetchUserPlaces();
                setUserPlaces(places);
            } catch (error) {
                setError(error.message || `Failed loading user's places`);
            }

            setIsLoading(false);
        }

        fetchPlaces();
    }, []);
}