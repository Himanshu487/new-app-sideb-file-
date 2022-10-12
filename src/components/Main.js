import React, { useEffect, useState } from 'react'
import "../App.css";
import Product  from './Product';

const Main = (props) => {
    // const {products,OnAdd}=props;

    const{OnAdd}=props;

    const[users,setUsers]=useState([]);
    
    const getUsers= async ()=>{
      const response= await fetch('https://fakestoreapi.com/products');
      setUsers(await response.json());      
      console.log(response);
    }
     useEffect(()=>{
       getUsers();
     },[]);

  return (
    <>
    <main className='block col-2'>
      <h2>Products</h2>
      <div className='rowww col-xs-12'>
        {users.map((pro) => {
          return(
          <Product key={pro.id} product={pro} OnAdd={OnAdd}></Product>
        )})}
      </div>
    </main>
    </>
  )
}

export default Main;