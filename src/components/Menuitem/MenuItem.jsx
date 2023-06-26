import React from 'react';
import './MenuItem.css';

const MenuItem = ({ title, price }) => (
  <div className='app__menuitem'>
    <div className='app__menuitem-head'>
      <div className='app__menuitem-name'>
        <p className="p__cormorant" style={{ color: '#0C0C0C' }}>{title}</p>
      </div>
      <div className='app__menuitem-price'>
        <p className="p__cormorant" style={{ color: '#0C0C0C' }}>{price}</p>
      </div>
    </div>
  </div>
);

export default MenuItem;
