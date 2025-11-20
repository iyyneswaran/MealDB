import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFavourites } from '../contexts/FavouriteContext';
import { fetchMealById } from '../api/mealdb';
import LoadingSpinner from '../components/LoadingSpinner';

const MealDetail = () => {

  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [toggle, isFavourite] = useFavourites();

  useEffect(() => {
    setLoading(true);
    fetchMealById(id)
      .then((res) => setMeal(res.data.meals?.[0] || null))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!meal) {
    return <p className='text-center text-xl mt-20 text-gray-600'>Meal not found.</p>;
  }

  const indgredients = [];
  for (let i = 1; i <= 20; i ++) {
    const ing = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ing?.trim()) indgredients.push(`${measure} ${ing}`);
  }

  return (
    <div className='max-w-4xl mx-auto p-6'>
      d
    </div>
  )
}

export default MealDetail