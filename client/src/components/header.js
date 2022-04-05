import React from 'react';
import suvalogo from './pics/Suva_CMYK.png';

const Header = () => {
  return <div className='Header'>
     <h1 className='Header-Title'>Sitzungszimmer - Finder</h1>
     <img src={suvalogo} alt="SUVA-LOGO"/>
  </div>;
}

export default Header;