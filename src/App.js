import React from 'react'
import Navbar from './components/Navbar'
import './app.css';
import Banner from './components/Banner';
import Product from './components/Product';

const App = () => {
  return (
    <div>
      <Navbar />
      <Product />
    </div>
  )
}

export default App