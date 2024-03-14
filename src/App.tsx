import React from 'react';
import logo from './logo.svg';
import './App.css';
import './css/fontawesome.css';
import './css/fontawesome.min.css';
import './css/slick-theme.css';
import './css/slick-theme.min.css';
import './css/slick.min.css';
import './css/templatemo.css';
import './css/templatemo.min.css'
import Hearder from './components/Hearder';
import Slide from './components/Slide';
import Products from './components/Products';
import Footer from './components/Footer';
import './js/custom';
import './js/templatemo';
import './webfonts/fa-brands-400.svg';
import './webfonts/fa-regular-400.svg';
import './webfonts/fa-solid-900.svg';
import './webfonts/slick.svg'


function App() {
  const menuItems = ["Home", "About", "Shop", "Contact"];
  return (
    <>
    <Hearder menuItems ={menuItems}/>
    <Slide/>
   <Products/>
   <Footer/> 
    </>
  );
}

export default App;
