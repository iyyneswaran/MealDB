import React, { useEffect, useState } from 'react'
import LoadingSpinner from '../components/LoadingSpinner'
import { fetchCategories } from '../api/mealdb';
import { Link } from "react-router-dom";

const Home = () => {

  const [categories, setcategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategories()
      .then((res) => setcategories(res.data.categories))
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <LoadingSpinner />

  return (
    <div className='max-w-6xl mx-auto p-3'>
      <div className="text-center mb-10 mt-3">
        <h1 className='text-2xl md:text-3xl font-semibold text-emerald-900 tracking-tight'>Browse Meal category</h1>
        <p className='mt-3 text-lg text-gray-500 font-semibold'>Discover  delicious recipes from around the world</p>
        <div className="mt-4 flex justify-center">
          <div className="h-1 w-24 bg-emerald-600 rounded-full"></div>
        </div>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4'>
        {categories.map((cat) => (
          <Link to={`/category/${cat.strCategory}`} key={cat.idCategory} className='group cursor-pointer m-2 shadow group-hover:shadow-xl transition  rounded-lg p-3'>
            <img src={cat.strCategoryThumb} alt={cat.strCategory}
              className='w-full' />
            <p className='mt-2 text-emerald-800 font-medium text-center'>{cat.strCategory}</p>
          </Link>
        ))}
      </div>

    </div>
  );

}

export default Home;