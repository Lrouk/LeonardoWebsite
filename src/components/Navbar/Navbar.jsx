import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className='app__navbar'>
      <div className="app__navbar-login">
        <a href="#book" className="p__opensansNav1">Book A table</a>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensansNav"><a href="#home">Home</a></li>
        <li className="p__opensansNav"><a href="#about">About</a></li>
        <li className="p__opensansNav"><a href="#menu">Menu</a></li>
        <li className="p__opensansNav"><a href="#awards">Awards</a></li>
        <li className="p__opensansNav"><a href="#contact">Contact</a></li>
      </ul>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensansNav"><a href="#home">Home</a></li>
              <li className="p__opensansNav"><a href="#about">About</a></li>
              <li className="p__opensansNav"><a href="#menu">Menu</a></li>
              <li className="p__opensansNav"><a href="#awards">Awards</a></li>
              <li className="p__opensansNav"><a href="#contact">Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
};

export default Navbar;
