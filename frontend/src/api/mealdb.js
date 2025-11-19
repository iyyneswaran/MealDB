import axios from 'axios';
const BASE = 'https://www.themealdb.com/api/json/v1/1';


// categories of meals
export const fetchCategories = () => axios.get(`${BASE}/categories.php`);

// meals by category
export const fetchMealByCategories = (cat) => axios.get(`${BASE}/filter.php?c=${cat}`);

// meal details by id
export const fetchMealById = (id) => axios.get(`${BASE}/lookup.php?i=${id}`);

// search meals by name
export const searchMeals = (query) => axios.get(`${BASE}/search.php?s=${query}`);