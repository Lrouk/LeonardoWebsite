import React, { useState } from 'react';
import './Newsletter.css';
import emailjs from 'emailjs-com';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [emailError, setEmailError] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleEmailChange = (event) => {
    const value = event.target.value;
    if (value.length <= 30) {
      setEmail(value);
      setIsValidEmail(event.target.validity.valid);
      setEmailError(event.target.validationMessage || (isValidEmailFormat(value) ? '' : 'Please enter a valid email address'));
    } else {
      setEmailError('Max Email length is 30 characters');
    }
  };

  const isValidEmailFormat = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return regex.test(email);
  };

  const handleSubscribe = () => {
    if (!email) {
      setEmailError('No email entered');
    } else if (isValidEmail && isValidEmailFormat(email)) {
      sendEmail(email);
      setEmail('');
      setShowPopup(true);
      document.body.classList.add('popup-open');
    } else {
      setEmailError('Please enter a valid email address');
    }
  };
  const closePopup = () => {
    setShowPopup(false);
    document.body.classList.remove('popup-open');
  };

  const sendEmail = (email) => {
    const templateParams = {
      to_email: email,
    };

    emailjs.send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      templateParams,
      process.env.REACT_APP_EMAILJS_TOKEN
    )
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('Error sending email. Please try again later.');
      });
  };

  return (
    <div className="app__newsletter section__padding">
      <div className="app__newsletter-heading">
        <h1 className="headtext__cormorant">- Subscribe to our Newsletters</h1>
      </div>
      <div className="app__newsletter-input">
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={handleEmailChange}
          required
          title="Please enter a valid email address"
        />
        <a className="custom__a">And never miss latest updates</a>
        <button className="custom__button" onClick={handleSubscribe} disabled={!isValidEmail}>
          Subscribe
        </button>
        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <div>
                <h2>Thank you for subscribing!</h2>
                <p>You have successfully subscribed to our newsletters.</p>
              </div>
              <button type='button' className='custom__button' onClick={closePopup}>
                Close</button>
            </div>
          </div>
        )}
      </div>
      {emailError && <p className="app__error">{emailError}</p>}
    </div>
  );
};

export default Newsletter;
