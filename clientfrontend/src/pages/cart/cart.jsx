import React, { useContext } from 'react'
import { PRODUCTS } from '../../components/products'
import { Product } from '../shop/product'
import { StoreContext } from '../../context/storeContext'
import { CartItem } from './cart-item'
import "./cart.css";

export const Cart = () => {
  const { cartItems } = useContext(StoreContext);
  return (
    <div className='cart'> 
    <div>
      <h1> Tus productos </h1>
    </div>
    <div className='cartItems'> 
      {PRODUCTS.map((Product) => {
        if (cartItems[Product.id] !== 0) {
          return <CartItem data={Product} />;
        }
      })}
    </div>
    </div>
  )
}
