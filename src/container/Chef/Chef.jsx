import React from 'react';
import { images } from '../../constants'
import './Chef.css';

const Chef = () => (
  <div className="app__chef app__wrapper section__padding" id="awards">
    <div className="app__wrapper_img">
      <a href="#book" className='custom__button'>Book a Table</a>
      <a className="custom__a">Your Ultimate Happy Place</a>
    </div>
    <div className="app__wrapper_info">
      <h1 className="headtext__cormorant">- Awards & Recognition</h1>
      <div className="app__chef-content">
        <button className='custom__button'>01</button>
        <p className="p__opensans">Five years in a row on the <b>World's 50 Best Bars</b> list.</p>
      </div>
      <div className="app__chef-content">
        <button className='custom__button'>02</button>
        <p className="p__opensans">First place in last year's <b>Time Out Bar Awards</b>.</p>
      </div>
      <div className="app__chef-content">
        <button className='custom__button'>03</button>
        <p className="p__opensans">Listed in the top cocktails of the 2022 <b>Michelin Guide</b>.</p>
      </div>
      <div className="app__chef-content">
        <button className='custom__button'>04</button>
        <p className="p__opensans">Third place in the <b>Class Bar Awards</b>.</p>
      </div>
    </div>
    <div className="app__wrapper1">
      <img src={images.awards} alt="award" className="enlarge-image" />
    </div>
  </div>
);

export default Chef;
