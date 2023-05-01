import React, { useContext } from "react";
import './cart.css'
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer"

export const Cart = () => {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext);
    const subTotal = getTotalCartAmount();
    const deliveryCharge = subTotal >= 499 ? 0 : 49;

    return (
        <div className="cart-container">
            <div className="cart">
                <div className="cart-items">
                    {PRODUCTS.map((product) => {
                        if (cartItems[product.id] !== 0) {
                            return <CartItem data={product} />;
                        }
                    })}
                </div>
                {subTotal > 0 ? (
                    <div className="checkout">
                        <p>Subtotal: Rs. {subTotal} </p>
                        <p>Delivery charges: Rs. {deliveryCharge}</p>
                        <button className="cart-buttons">Rs. {subTotal + deliveryCharge}</button><br />
                        <button className="cart-buttons">Checkout</button>
                        <div className="shop-link">
                            <Link id="shop-link" to="/shop">
                                continue shopping
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div className="empty-cart">
                        <h1 id="empty-cart">your cart is empty!</h1>
                        <div className="shop-link">
                            <Link id="shop-link" to="/shop">
                                continue shopping
                            </Link>
                        </div>
                    </div>
                )}

            </div>
            <Footer />
        </div>
    )
};
