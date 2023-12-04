import MealItem from "./MealItem.jsx";
import { fetchAvailableMeals } from "../../../http.js";
import { useFetch } from "../hooks/useFetch.js";

async function fetchMeals() {
  const meals = fetchAvailableMeals();
  console.log(meals);
  return new Promise((resolve) => {
    resolve(meals);
  });
}

const AvailableMeals = (props) => {
  const {
    isLoading,
    error,
    fetchedData: availableMeals,
  } = useFetch(fetchMeals, []);

  console.log(availableMeals);

  // if (error) {return (<Error title="Something went wrong." message={error.message}/>)}

  return (
    <ul>
      {availableMeals.map((meal) => (
        <MealItem
          id={meal.id}
          key={meal.id}
          image={meal.image}
          name={meal.name}
          description={meal.description}
          price={meal.price}
        />
      ))}
    </ul>
  );
};

export default AvailableMeals;
