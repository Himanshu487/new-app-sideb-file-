import React from 'react'
import "../App.css";

const Header = (props) => {
  return (
    <header>
    <div className='row-col'>
        <div className='new-india'>
          <a href='#/'><h1>Shop India</h1></a>
          </div>
        <div className='end-comp'>
          <a className='cart-it' href='#/'>Cart{''}
          {props.countCartItems?(<button className='badge'>{props.countCartItems.length}</button>):('')}
          </a>
          <a href="#/">Sign in</a>      
        </div>
    </div>
    </header>
  );
}

export default Header;