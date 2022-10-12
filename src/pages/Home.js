import React from 'react';
import '../App.css';
import Data from '../Data';

import Main from '../components/Main';
import Basket from '../components/Basket';
import { useState } from 'react';
import Header from '../components/Header';
// import { FaHome } from 'react-icons/fa';
// import Nav from './Nav';


function Home() {
  const {products}=Data;
  const [cartItems,setCartItems]=useState([]);

  const OnAdd=(product)=>{
    const exist= cartItems.find((x)=>x.id === product.id)
    if(exist){
      setCartItems(
        cartItems.map((x)=>x.id === product.id ? {...exist, qty:exist.qty+1} :x))
    }
    // the above condition-->is basically to increased the quantity of the same product.
    else{
      setCartItems([...cartItems, { ...product, qty: 1 }])
      // this condition, is used when a new(unique item get's added)
    }
  }
  const OnRemove=(product)=>{
    const exist= cartItems.find((x)=>x.id === product.id)

    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
      // the above condition is for the removal of only unique item in the cart
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
        // the above condition is for the removal of more than one item.
      );
    }
  }

  return (
   <>
  
  <div className='App'>
  
<Header> countCartItems={cartItems.length}</Header>

<div className="col-md-12 sidebar-transition">
  
  <div className='col-md-9'>
  <Main products={products} OnAdd={OnAdd}/> 
  </div>
  <div className='col-md-3'>
  <Basket cartItems={cartItems} OnAdd={OnAdd} OnRemove={OnRemove}/>
  </div>
  </div>
  </div>


   </>
  );
}

export default Home;




