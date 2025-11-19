import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-emerald-900 text-white p-4 shadow">
      <nav className='max-w-6xl mx-auto flex flex-col sm:flex-row gap-4 items-center justify-between'>
        <div className='flex items-center gap-6'>
          <Link to="/" className='text-xl font-bold'>MealDB</Link>
          <Link to="/">Categories</Link>
          <Link to="/favourites">Favourites</Link>
        </div>

        <form className='flex gap-2'>
          <input type="text" className='bg-white px-3 py-1 rounded outline-none text-emerald-800 w-48 sm:w-64' placeholder='Search meals...'/>
          <button className='bg-white text-emerald-900 px-3 py-1 rounded hover:bg-emerald-100'>Search</button>
        </form>
      </nav>
    </header>
  )
}

export default Header