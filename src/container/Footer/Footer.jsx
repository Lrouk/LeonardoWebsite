import React from 'react';
import { FiFacebook, FiInstagram } from 'react-icons/fi'
import { CiLocationOn } from "react-icons/ci";
import { BsWhatsapp } from "react-icons/bs";
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (

  <div className="app__footer" id="contact">
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <button className='custom__buttonYellow'>Contact Us</button>
        <p className="p__opensans"><a href="https://www.google.com/maps/place/%D7%94%D7%97%D7%A9%D7%9E%D7%95%D7%A0%D7%90%D7%99%D7%9D+94,+%D7%AA%D7%9C+%D7%90%D7%91%D7%99%D7%91-%D7%99%D7%A4%D7%95%E2%80%AD/data=!4m2!3m1!1s0x151d4b77f987eceb:0x577babd15c0894ea?sa=X&ved=2ahUKEwjhurXMmr39AhWqYKQEHVqeBgAQ8gF6BAgXEAI" target="_blank"> <CiLocationOn /></a> Hahashmonaim 94 Tel Aviv, <br />TLV Mall, Israel</p>
        <p className="p__opensans">+972-54-4715497</p>
        <div className="app__footer-links_work1">
          <button className='custom__buttonYellow'>Working Hours</button>
          <p className="p__opensans">Sun-Thu: 10:00 AM - 01:00 AM</p>
          <p className="p__opensans">Fri-Sat: 10:00 AM - 03:00 AM</p>
        </div>
        <div className="app__footer-links_icons">
          <a href="https://www.facebook.com/" target="_blank"><FiFacebook /></a>
          <a href="https://www.instagram.com/" target="_blank"><FiInstagram /></a>
          <a href="http://wa.me/972544715497" target="_blank"><BsWhatsapp /></a>
        </div>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.leonardoFooter} alt="footer_log" />
      </div>
    </div>
    <div className="footer__copyright" >
      <p className="p__opensansNav">© {new Date().getFullYear()} Leonardo. All Rights Reserved</p>
    </div>
  </div>
);

export default Footer;