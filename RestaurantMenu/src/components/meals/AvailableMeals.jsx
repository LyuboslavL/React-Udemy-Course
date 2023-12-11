import MealItem from "./MealItem.jsx";
import { fetchAvailableMeals } from "../../../http.js";
import { useFetch } from "../hooks/useFetch.js";

import classes from "./AvailableMeals.module.css";

async function fetchMeals() {
  const meals = fetchAvailableMeals();

  return new Promise((resolve) => {
    resolve(meals);
  });
}

const AvailableMeals = ({ onSelectMeal }) => {
  const {
    isLoading,
    error,
    fetchedData: availableMeals,
  } = useFetch(fetchMeals, []);

  // if (error) {
  //   return <Error title="Something went wrong." message={error.message} />;
  // }

  return (
    <ul id={classes.meals}>
      {availableMeals.map((meal) => (
        <MealItem
          key={meal.id}
          meal={meal}
          onClick={() => addToCartHandler(meal)}
        />
      ))}
    </ul>
  );
};

export default AvailableMeals;
