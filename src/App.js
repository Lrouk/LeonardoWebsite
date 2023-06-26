import React from 'react';

import { AboutUs, Chef, Footer, Gallery, Header, SpecialMenu, Dat, Newsletter } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Gallery />
    <Chef />
    <Dat />
    <Newsletter />
    <Footer />
  </div>
);

export default App;
