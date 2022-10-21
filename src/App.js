import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Categories from './components/Categories';
import Category from './components/Category';
import Footer from './components/Footer';
import Home from './components/Home';
import NavBar from './components/Navbar';
import Product from './components/Product';
import Vendors from './components/Vendors';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Categories' element={<Categories />} />
        <Route path='/Product' element={<Product />} />
        <Route path='/Vendors' element={<Vendors />} />
        <Route path='/About' element={<About />} />
        <Route path='/category/:slug' element={<Category />} />
      </Routes>
      <div className="max-w-full">
				<Footer />
			</div>
    </BrowserRouter>
  )
}

export default App;