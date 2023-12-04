import MealItem from "./MealItem.jsx";

const AvailableMeals = (props) => {
  return (
    <ul>
      {DUMMY_MEALS.map((meal) => (
        <MealItem
          id={meal.id}
          key={meal.id}
          img={meal.image}
          name={meal.name}
          description={meal.description}
          price={meal.price}
        />
      ))}
    </ul>
  );
};

export default AvailableMeals;
