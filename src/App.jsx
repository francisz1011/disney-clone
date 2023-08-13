import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Slider from './Slider'
import ProductionHouse from './Components/ProductionHouse'
import GenresList from './Components/Constant/GenresList'
import GenreMovieList from './Components/GenreMovieList'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {



  const [count, setCount] = useState(0)

  return (

   
      <div className="">
        
    
      <Header/> 

      <Slider/>

      <ProductionHouse/>
      
      <GenreMovieList/>
      
      
      </div>
  )
}

export default App
