import React, { useContext } from "react";
import './cart.css'
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";

export const Cart = () => {
    const {cartItems} = useContext(ShopContext);

    return (<div className="cart">
        <div className="cart-items">
            {PRODUCTS.map((product) => {
                if (cartItems[product.id] !== 0) {
                    return <CartItem data={product}/>;
                }
            })}
        </div>
    </div>)
};