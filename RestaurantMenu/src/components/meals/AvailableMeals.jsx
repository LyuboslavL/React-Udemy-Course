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

const AvailableMeals = (props) => {
  const {
    isLoading,
    error,
    fetchedData: availableMeals,
  } = useFetch(fetchMeals, []);

  // if (error) {return (<Error title="Something went wrong." message={error.message}/>)}

  return (
    <ul id={classes.meals}>
      {availableMeals.map((meal) => (
        <MealItem
          id={meal.id}
          key={meal.id}
          image={meal.image}
          name={meal.name}
          description={meal.description}
          price={meal.price}
          onClick={() => addToCartHandler(meal)}
        />
      ))}
    </ul>
  );
};

export default AvailableMeals;
