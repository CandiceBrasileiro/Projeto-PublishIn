import React from 'react';
import logo from './logo.svg';

const Nav = () => {

  return (
    <div className='flex justify-between #94a3b8'>
  <nav>
    <img src={logo} alt="Logomarca da página publishIn" />
    <input 
    name='btn'
    type='submit'
    value='login'
    />
      
  </nav>
  </div>
  )};

export default Nav;