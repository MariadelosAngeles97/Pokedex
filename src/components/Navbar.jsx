import { Logo, Moon, Sun } from './Icons';
import './Navbar.css'
import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <Logo />
      <div className='switch'>
      <Sun/>
        <label>
          <input type='checkbox' className='check-switch' hidden></input>
          <span className='slider'></span>
        </label>
        <Moon/>
      </div>
    </nav>
  );
}

export default Navbar;
