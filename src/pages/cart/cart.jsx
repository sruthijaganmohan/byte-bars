import React, { useContext } from "react";
import './cart.css'
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";

export const Cart = () => {
    const {cartItems, getTotalCartAmount} = useContext(ShopContext);
    const subTotal = getTotalCartAmount();

    return (<div className="cart">
        <div className="cart-items">
            {PRODUCTS.map((product) => {
                if (cartItems[product.id] !== 0) {
                    return <CartItem data={product}/>;
                }
            })}
        </div>
        <div className="checkout">
            <p>Subtotal: Rs.{subTotal} </p>
            <p>Delivery charges: Rs. 49</p>
            <button>Rs. {subTotal + 49}</button>
        </div>
    </div>)
};