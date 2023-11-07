export async function fetchAvailablePlaces() {
    const response = await fetch('http://localhost:3000/places');
    const data = await response.json();

    if (!response.ok) {
        throw new Error('Oops, something went wrong :/');
    };

    return data.places;
}