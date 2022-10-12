import React from 'react';

const Product = (props) => {
    const {product,OnAdd}=props;
  return (
    <div className='cont'>
      <img className="small" src={product.image} alt={product.title} />
      <h3 className='title-width-adj'>{product.title}</h3>
      <p>{product.category}</p>
      <div className='cont-id'>${product.price}</div>
      <div className='btnn'>
        <button className='cont-add' onClick={() => OnAdd(product)}>Add To Cart</button>
      </div>
    </div>

  )
}

export default Product;