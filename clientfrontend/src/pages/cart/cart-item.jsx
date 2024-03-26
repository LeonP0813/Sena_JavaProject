import React, {useContext} from 'react';
import { StoreContext } from '../../context/storeContext'


export const CartItem = (props) => {
    const {id,prodName, price, prodPic} = props.data;
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
    return <div className='cartItem'>
    <img src={prodPic} /> 
    <div className='description'>
        <p> 
            <b> {prodName}</b> 
        </p>
        <p> ${price} </p>
    </div>
    <div className='countHandler'>
        <button onClick={() => removeFromCart(id) }> - </button>
        <input value={cartItems[id]}/>
        <button onClick={() => addToCart(id) }> + </button>
    </div>
  </div>
}
