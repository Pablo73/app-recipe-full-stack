const filterByIngredientQuery = `SELECT a.str_meal as strMeal, a.str_meal_thumb as strMealThumb, a.id as idMeal
FROM meals as a 
JOIN meals_ingredients_measures as b
ON a.id = b.id_meals 
JOIN ingredients as c 
ON b.id_ingredients = c.id
WHERE c.name_ingredient = :ingredientName;
`;

export default filterByIngredientQuery;
