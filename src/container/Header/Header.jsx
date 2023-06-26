import React from 'react';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding " id="home">
    <div className="app__wrapper_img">
      <img src={images.Leonardo} alt="header img" />
    </div>
    <a type='button' className="custom__a">Cheers! Welcome to Leonardo</a>
  </div>
);

export default Header;
