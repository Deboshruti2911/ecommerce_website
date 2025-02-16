import React, { useContext } from 'react';
import './CartItem.css';
import { ShopContext } from '../../context/ShopContext';
import remove_icon from '../assets/cart_cross_icon.png';

const CartItems = () => {
  const { all_product, cartItems, removeFromCart, getTotalCartAmount} = useContext(ShopContext);

  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      <hr />

      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
            <div className="cartitems-format cartitems-format-main" key={e.id}>
              <img className='carticon-product-icon' src={e.image} alt={e.name} />
              <p>{e.name}</p>
              <p>${e.new_price}</p>
              <button className='cartitems-quantity'>{cartItems[e.id]}</button>
              <p>${e.new_price * cartItems[e.id]}</p>
              <img
              className="cartitems-remove-icon"
                src={remove_icon}
                alt="Remove"
                onClick={() => removeFromCart(e.id)}
                // className="remove-icon"
              />
            </div>
            </div>
          );
        }
        return null;

      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
            <h1>cart Totals</h1>
            <div>
                <div className="cartitems-total-item">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                
                <div className="cartitems-total-item">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                
                <div className="cartitems-total-item">
<h3>Total</h3>
<h3>$ {getTotalCartAmount()}</h3>
                </div>
            </div>
            <button>Proceed To Checkout</button>
        </div>
        <div className="cartitems-promocode">
            <p>If you have a promo code enter it here </p>
            <div className='caritems-promobox'>
                <input type="text" placeholder='promo code' />
                <button>Submit</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
