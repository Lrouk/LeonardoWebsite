import React from 'react';
import { MenuItem } from '../../components'
import { images, data } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <div>
        <img src={images.menuDrinks} alt="menu img" />
      </div>
      <h1 className="headtext__cormorant">- Today's special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine">
        <button className='custom__buttonYellow'>Beer & Wine</button>
        <div className="app__specialMenu_menuitems">
          {data.wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} />
          ))}
        </div>
      </div>


      <div className="app__specialMenu-menu_cocktails">
        <button className='custom__buttonYellow'>Cocktails</button>
        <div className="app__specialMenu_menuitems">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default SpecialMenu;
