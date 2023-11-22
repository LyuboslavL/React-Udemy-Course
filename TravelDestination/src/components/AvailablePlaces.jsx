import { useState, useEffect } from "react";
import Places from "./Places.jsx";
import Error from "./Error.jsx";
import sortPlacesByDistance from "../loc.js";
import { fetchAvailablePlaces } from "../http.js";
import { useFetch } from "../hooks/useFetch.js";

export default function AvailablePlaces({ onSelectPlace }) {
  const {
    isLoading,
    error,
    fetchedData: availablePlaces,
    setFetchedData: setAvailablePlaces,
  } = useFetch(fetchAvailablePlaces, []);

  // useEffect(() => {
  //   async function fetchPlaces() {
  //     setIsFetching(true);

  //     try {
  //       const places = await fetchAvailablePlaces();

  //       navigator.geolocation.getCurrentPosition((position) => {
  //         const sortedPlaces = sortPlacesByDistance(places, position.coords.latitude, position.coords.longitude);
  //         setAvailablePlaces(sortedPlaces);
  //         setIsFetching(false);
  //       });

  //     } catch (error) {
  //       setError({ message: error.message || 'Error occured' });
  //       setIsFetching(false);
  //     }
  //   }

  //   fetchPlaces();
  // }, []);

  if (error) {
    return (
      <Error title="Ooops, something went wrong..." message={error.message} />
    );
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isLoading}
      loadingText="Loading places..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
