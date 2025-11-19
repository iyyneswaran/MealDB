import React from 'react';
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";

const FavouriteButton = ({ meal, onToggle, isFav }) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        onToggle(meal);
      }}
      className={`cursor-pointer absolute top-2 right-2 p-2 rounded-full shadow 
      ${isFav ? 'bg-red-500 text-white' : 'bg-white text-red-600'}`}
    >
      {isFav ? <IoIosHeart /> : <IoIosHeartEmpty />}
    </button>
  );
};

export default FavouriteButton;
