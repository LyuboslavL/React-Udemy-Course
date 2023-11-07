import { useState, useEffect } from 'react';
import Places from './Places.jsx';
import Error from './Error.jsx';
import sortPlacesByDistance from '../loc.js';

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFatching, setIsFatching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchPlaces() {
      setIsFatching(true);

      try {
        const response = await fetch('http://localhost:3000/places');
        const data = await response.json();

        if (!response.ok) {
          throw new Error('Oops, something went wrong :/');
        };

        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(data.places, position.coords.latitude, position.coords.longitude);
          setAvailablePlaces(sortedPlaces);
        });

      } catch (error) {
        setError({ message: error.message || 'Error occured' });
      }

      setIsFatching(false);
    }

    fetchPlaces();
  }, []);

  if (error) {
    return <Error title="Ooops, something went wrong..." message={error.message} />
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFatching}
      loadingText="Loading places..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
