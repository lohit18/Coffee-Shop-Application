import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const count = useSelector((state) => state.cart.value);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container">
      <div className="title">
        <h1>Coffee Shop</h1>
      </div>
      
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
      
      <div className={`sub-items ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/"><div className="item">Coffee Beans</div></Link>
        <Link to="/instacoffee"><div className="item">Insta Pour Coffee</div></Link>
        <Link to="/equipment"><div className="item">Coffee Equipments</div></Link>
        <Link to="/about"><div className="item">About Us</div></Link>
        <Link to="/locations"><div className="item">Coffee Locations</div></Link>
        <Link to="/cart" className="item">
          <div>Cart ({count.length})</div>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
