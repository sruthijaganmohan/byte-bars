import './App.css';
import React from 'react';
import MarqueeHeader from './components/MarqueeHeader';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/home';
import { Shop } from './pages/shop/shop';
import { Account } from './pages/account/account';
import { Cart } from './pages/cart/cart';


const App = () => {
  return (
    <div className="App">
      <Router>
        <MarqueeHeader/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/shop" element={<Shop/>}></Route>
          <Route path="/account" element={<Account/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
