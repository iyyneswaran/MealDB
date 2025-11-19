import { useEffect, useState } from "react";

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

export default function useFavourites() {
    const [favourites, setfavourites] = useState(loadFavouritesFromStorage);
    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(favourites));
        }
        catch {
            (err) => { console.log(err) }
        }
    }, [favourites]);

    const toggle = (meal) => {
        setfavourites((prev) => {
            const exists = prev.some((m) => m.idMeal === meal.idMeal);

            return exists ? prev.filter((m) => m.idMeal !== meal.idMeal) : [...prev, meal];
        });
    };

    const isFavourite = (meal) => favourites.some((m) => m.idMeal === meal.idMeal);
    return { favourites, toggle, isFavourite };
}