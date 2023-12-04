export async function fetchAvailableMeals() {
  const response = await fetch("http://localhost:3000/meals");
  const data = await response.json();

  if (!response.ok) {
    throw new Error(`Can't fetch available meals...`);
  }

  return data;
}
