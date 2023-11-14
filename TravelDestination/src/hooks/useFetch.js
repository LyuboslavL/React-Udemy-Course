import { useEffect } from 'react';

function useFetch() {
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