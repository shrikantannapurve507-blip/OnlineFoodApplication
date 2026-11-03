
import { useState } from 'react';
import { Routes, Route } from 'react-router';

import './App.css';

import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home/Home';
import Menu from './components/pages/Menu/Menu';
import Cart from './components/pages/Cart/Cart';
import Contact from './components/pages/Contact/Contact';
import Footer from './components/pages/Footer/Footer';

import PlaceOrders from './components/PlaceOrder/PlaceOrder';
import AppDownload from './components/AppDownload/AppDownload';
import Login from './components/Login/Login';



function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin && (
        <Login setShowLogin={setShowLogin} />
      )}

      <Navbar setShowLogin={setShowLogin} />

      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/menu" element={<Menu />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="/placeorder" element={<PlaceOrders />} />

          <Route path="/app-download" element={<AppDownload />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
