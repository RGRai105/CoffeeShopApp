import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style.css';
import Header from './Nav/Header';
import Footer from './Footer/Footer';
import Login from './Login/Login';
import Contact from './Footer/ContactUs/Contact';
import ProductCard from './component/Productcard';
import OrderBox from './component/OrderBox';
import LearnMore from './Footer/LearnMore/LearnMore';
import ShopList from './Nav/ShopList/ShopList';
import WhiteList from './Nav/WhiteList/WhiteList';
import ShopContainer from './component/ShopContainer';
import Menus from './Nav/Menus/menus';
import image from './image/janko-ferlic-h9Iq22JJlGk-unsplash.jpg';

function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        {/* Hero Section */}
        <div className="hero-section">
          <img src={image} alt="Beautiful Landscape" className="fullscreen" />
          <div className="hero-text">
            <h1>Welcome to Our Website</h1>
            <p>Where you find the best brew.</p>
            <a href="/ShopContainer" className="btn-primary">Shop Now</a>
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content">

          <Routes>
            <Route path="/" element={<ShopContainer />} />
            <Route path="/login" element={<Login />} />
            <Route path="/menus" element={<Menus />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/productcard" element={<ProductCard />} />
            <Route path="/shopcontainer" element={<ShopContainer />} />
            <Route path="/orderbox" element={<OrderBox />} />
            <Route path="/learnmore" element={<LearnMore />} />
            <Route path="/shoplist" element={<ShopList />} />
            <Route path="/whitelist" element={<WhiteList />} />
          </Routes>

          {/* Additional Features */}
          <section className="featured-section">
            <h2>Featured Products</h2>
          </section>

          <section className="cta-section">
            <h2>Want to Know More?</h2>
            <a href="/learnmore" className="btn-secondary">Learn More</a>
          </section>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
