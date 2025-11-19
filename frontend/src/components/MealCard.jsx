import React from 'react';
import { Link } from 'react-router-dom';
import FavouriteButton from './FavouriteButton';
import { useFavourites } from '../contexts/FavouriteContext';

const MealCard = ({ meal }) => {
  const { toggle, isFavourite } = useFavourites();
  const fav = isFavourite(meal.idMeal);

  return (
    <div className='relative'>
      <FavouriteButton meal={meal} onToggle={toggle} isFav={fav} />

      <Link
        to={`/meal/${meal.idMeal}`}
        className='block rounded-lg overflow-hidden shadow hover:shadow-lg'
      >
        <img src={meal.strMealThumb} alt={meal.strMeal} className='w-full h-48 object-cover' />
        <div className="p-3 text-center">
          <p className='font-medium text-gray-800 truncate'>{meal.strMeal}</p>
        </div>
      </Link>
    </div>
  );
};

export default MealCard;
