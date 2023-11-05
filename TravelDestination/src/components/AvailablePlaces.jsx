import { useState, useEffect } from 'react';
import Places from './Places.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFatching, setIsFatching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);

  useEffect(() => {
    async function fetchPlaces() {
      setIsFatching(true);
      const response = await fetch('http://localhost:3000/places');
      const data = await response.json();
      setAvailablePlaces(data.places); 
      setIsFatching(false);
    }

    fetchPlaces();
  }, [])

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
