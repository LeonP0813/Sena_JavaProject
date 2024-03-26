import React, { useContext } from 'react';
import { StoreContext } from "../../context/storeContext"

export const Product = (props) => {
    const {id,prodName, price, prodPic} = props.data;
    const {addToCart, cartItems} = useContext(StoreContext);

    const cartItemsAmount = cartItems[id];

    console.log(cartItems)
  return ( 
    <div className='product'>
      <img src={prodPic}/>
      <div className="description">
        <p>
          <b>{prodName}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className='addToCartBttn' onClick={() => addToCart(id)}> 
        Añadir al carrito {cartItemsAmount > 0 && <> ({cartItemsAmount})</>}
      </button>
    </div>
  );
}
