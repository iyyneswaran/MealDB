import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import CategoryMeals from './pages/CategoryMeals'
import MealDetail from './pages/MealDetail'
import { FavouriteProvider } from './contexts/FavouriteContext'
import FavouritesMeal from './pages/FavouritesMeal'

function App() {

  return (
    <BrowserRouter>
      <FavouriteProvider>
        <Header />
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path={`/category/:category`} element={<CategoryMeals />} />
          <Route path={`/meal/:id`} element={<MealDetail />} /> 
          <Route path={`/favourites`} element={<FavouritesMeal />} /> 
        </Routes>
      </FavouriteProvider>
    </BrowserRouter>
  )
}

export default App
