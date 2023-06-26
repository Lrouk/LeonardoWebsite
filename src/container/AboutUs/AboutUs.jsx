import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const PDF_FILE_URL = process.env.REACT_APP_PDF_FILE_URL;

const downloadFileURL = (url) => {
  const aTag = document.createElement('a');
  aTag.href = url;
  aTag.setAttribute('download', '');
  document.body.appendChild(aTag);
  aTag.click();
  document.body.removeChild(aTag);
};


const AboutUs = () => (
  <div className="app__specialMenu flex__center section__padding" id="about">
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu-menu_heading">- About As</p>
        <div className="app__specialMenu_menuitems1">
          <p className="p__opensans">Welcome to Leonardo Cocktails Bar. Our bartenders craft perfect cocktails using only the finest ingredients. Our stylish and luxurious ambiance is perfect for any occasion, and our team is always happy to provide guidance and recommendations to help you find your perfect drink. Experience the taste and sophistication of Leonardo Cocktails Bar today.</p>
        </div>
        <a type='button' className="custom__a">Chase The New Flavour</a>
        <button onClick={() => { downloadFileURL(PDF_FILE_URL) }} type='button' className='custom__button'>See Full Menu</button>
      </div>

      <div className="app__specialMenu-menu_cocktails flex__center">
        <div className="app__specialMenu-menu_img zoomable-image">
          <img src={images.aboutUs} alt="menu img" />
        </div>
        <p className="app__specialMenu-menu_heading">- Our History</p>
        <div className="app__specialMenu_menuitems1">
          <p className="p__opensans">We opened in 2017 with a passion for crafting exceptional cocktails and creating unforgettable experiences for our customers. Our skilled bartenders use only the finest ingredients to craft unique and delicious cocktails. Whether you're grabbing drinks with friends or celebrating a special occasion, our cozy and stylish ambiance provides the perfect setting.</p>
        </div>
      </div>
    </div>
  </div>
);

export default AboutUs;
