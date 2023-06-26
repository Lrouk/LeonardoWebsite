import React from 'react';
import { images } from '../../constants';

const newTab = url => {
  window.open(url)
}

const FindUs = () => (
  <div className="app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Hahashmonaim 94 Tel aviv, TLV mall, Israel</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', marginTop: '2rem' }}>Opening Hours</p>
        <p className="p__opensans">Sun-Thu: 10:00 am - 01:00 am</p>
        <p className="p__opensans">Fri-Sat: 10:00 am - 03:00 am</p>
      </div>
      <button className="custom__button" onClick={() => newTab('https://www.waze.com/live-map/directions/il/tel-aviv-district/tel-aviv-yafo/hahashmonaim-st-94?to=place.ChIJ6-yH-XdLHRUR6pQIXNGre1c')} style={{ margin: '2rem' }} >Visit Us</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus" />
    </div>
  </div>
);

export default FindUs;
