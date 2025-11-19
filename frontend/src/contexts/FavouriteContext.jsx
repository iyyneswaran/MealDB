import { createContext, useContext, useEffect, useState } from "react";

const FavouriteContext = createContext();
const STORAGE_KEY = 'mealdb_favourites';

const loadFavouritesFromStorage = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.error('Failed to load favourites from storage', err);
    return [];
  }
};

export const FavouriteProvider = ({ children }) => {
  const [favourites, setFavourites] = useState(loadFavouritesFromStorage);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favourites));
    } catch (err) {
      console.log(err);
    }
  }, [favourites]);

  const toggle = (meal) => {
    setFavourites((prev) => {
      const exists = prev.some((m) => m.idMeal === meal.idMeal);
      return exists
        ? prev.filter((m) => m.idMeal !== meal.idMeal)
        : [...prev, meal];
    });
  };

  const isFavourite = (id) => favourites.some((m) => m.idMeal === id);

  return (
    <FavouriteContext.Provider value={{ favourites, toggle, isFavourite }}>
      {children}
    </FavouriteContext.Provider>
  );
};

export const useFavourites = () => {
  const context = useContext(FavouriteContext);
  if (!context) {
    throw new Error("useFavourites must be used within FavouriteProvider");
  }
  return context;
};
