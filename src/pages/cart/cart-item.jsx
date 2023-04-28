import React, { useContext } from "react";
import './cart.css'
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
    const {id, productName, price, productImage} = props.data;
    const {cartItems, addToCart, removeFromCart} = useContext(ShopContext);

    return (<div className="cart-item">
        <img src={productImage} />
        <div className="description">
            <p>{productName}</p>
            <p>Rs. {price}</p>
            <div className="count">
                <button onClick={() => removeFromCart(id)}> - </button>
                <input value={cartItems[id]}/>
                <button onClick={() => addToCart(id)}> + </button>
            </div>
        </div>
    </div>)
};