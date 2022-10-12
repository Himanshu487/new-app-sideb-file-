import React from 'react';
import Pay from '../Pay';
import { Link } from "react-router-dom";
// import PaymentForm from './PaymentForm'; 
const Basket = (props) => {
    const {cartItems,OnAdd,OnRemove}=props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty.toFixed(2) * c.id, 0);

    // a stands for previous value and c stands for current value and value after, comma is initial value
    // const taxPrice = itemsPrice * 0.14;
    const taxPrice = itemsPrice * 10/100;
    const shippingPrice = itemsPrice > 2000 ? 0 : 20;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
    <Pay totalPrice/>
    // <PaymentForm totalPrice/>
  return (
    <div>
   <aside className='block col-1'>
     <h2>Cart Items</h2>
      {cartItems.length === 0 && <div>Cart is Empty</div>}
        
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => OnRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => OnAdd(item)} className="add">
                +
              </button>
            </div>
            
            <div className="col-2 text-right">
              {/* {item.qty} x ${item.price.toFixed(2)} */}
              {item.qty} x ${item.id.toFixed(2)}
              {totalPrice}
            </div>
          </div>
        ))}
                {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
                ${shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={<Pay/>}>
              {/* () => alert('Implement Checkout!') */}
              <Link to="/pay" className='btn-link'>Checkout</Link>
              </button>
              
            </div>
          </>
        )}
      
    </aside>
    </div>
  )
}

export default Basket;