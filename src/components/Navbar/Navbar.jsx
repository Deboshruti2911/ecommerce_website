

import React, { useContext, useState } from 'react';
import './Navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
const Navbar= () => {

    const [menu,setMenu]= useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt=""/>
                <p>SHOPPER</p>

            </div>
           <ul className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration :"None"}} to="/">Shop</Link> {menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}} ><Link style={{textDecoration :"None"}} to="/mens">Men </Link>{menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration :"None"}} to="/womens">Women</Link> {menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration :"None"}} to="/kids">Kids</Link> {menu==="kids"?<hr/>:<></>}</li>
           </ul>
           <div className='nav-login-cart'>
            <Link to="/login"><button>Login</button></Link>
            <Link to="/cart"><img src={cart_icon} alt="" /></Link>
            <div className='nav-cart-count'>
            {getTotalCartItems()}
           </div>  

           </div>
           
        </div>
    );
};

export default Navbar;
