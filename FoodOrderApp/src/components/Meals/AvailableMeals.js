import React from 'react';

import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Pizza',
        description: 'Italy comes to you',
        price: 18.99,
    },
    {
        id: 'm3',
        name: 'Chicken fillet',
        description: 'For the fitness enthusiasts',
        price: 14.99
    },
    {
        id: 'm4',
        name: 'Texas Burger',
        description: 'A meal to cowboy for',
        price: 13.99
    },
]

const AvailableMeals = () => {
    return (
        <section>
            <Card>
                <ul className={classes.meals}>
                    {DUMMY_MEALS.map(meal => <MealItem
                        id={meal.id}
                        key={meal.id}
                        name={meal.name}
                        description={meal.description}
                        price={meal.price}
                    />)}
                </ul>
            </Card>
        </section>
    )
};

export default AvailableMeals;