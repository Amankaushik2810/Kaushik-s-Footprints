import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCategory from './pages/ShopCategory'; // Correct capitalization here
import LoginSignup from './pages/LoginSignup';
import Shop from './pages/shop';
import Footer from './components/Footer/Footer';
import women_banner from './components/Assets/banner_women.png';
import men_banner from './components/Assets/banner_mens.png';
import kids_banner from './components/Assets/banner_kids.png';
import Product from './pages/product';
import Cart from './pages/cart'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Placeorder from './components/PlaceOrder/Placeorder';

function App() {
  return (
    <div>
      <BrowserRouter>
      <ToastContainer/>
        <Navbar />
        <Routes>
          <Route path='/shop' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} /> {/* Correct capitalization */}
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} /> {/* Correct capitalization */}
          <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid" />} /> {/* Correct capitalization */}
          <Route path='/product' element={<Product />} />
          {/* <Route path='/:productId' element={<Product />} /> */}
          <Route path="/product/:productId" element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
          <Route path='/order' element={<Placeorder />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
