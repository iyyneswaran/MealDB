import React from 'react';
import { Link } from "react-router-dom";
import { useFavourites } from '../contexts/FavouriteContext';
import MealCard from '../components/MealCard';

const FavouritesMeal = () => {

  const { favourites } = useFavourites();

  return (
    <div className='max-w-6xl mx-auto p-4 bg-gray-50 min-h-screen'>
      <h1 className='text-2xl font-semibold mb-6 text-emerald-900'>💖 Favorite Meals</h1>

      {favourites.length === 0 ? (
        <p>
          You haven't added any favourites yet.
          <Link to='/' className='text-blue-600 underline ml-1'>
            Explore Meals
          </Link>
        </p>
      ) : (
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
          {favourites.map((meal) => (
            <MealCard key={meal.idMeal} meal={meal} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavouritesMeal;
