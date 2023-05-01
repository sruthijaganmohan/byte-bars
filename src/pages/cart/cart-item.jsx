import React, { useContext } from "react";
import './cart.css'
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import "./cart-item.css"

export const CartItem = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

    return (<div className="cart-item-container">
        <div className="cart-item">
            <div className="image">
                <img id="img" src={productImage} />
            </div>
            <div className="description">
                <p>{productName}</p>
                <p>Rs. {price}</p>
                <div className="count">
                    <button id="sub" onClick={() => removeFromCart(id)}> - </button>
                    <input value={cartItems[id]} />
                    <button id="add" onClick={() => addToCart(id)}> + </button>
                </div>
            </div>
        </div>
    </div>)
};