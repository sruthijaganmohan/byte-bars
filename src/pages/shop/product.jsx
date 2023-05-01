import React, { useContext } from "react";
import './product.css';
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
    const { id, productName, ingredients, price, productImage } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);
    const cartItemAmount = cartItems[id];

    return (
        <div className="product-container">
            <div className="product">
                <div className="image">
                    <img src={productImage} alt="product" />
                </div>
                <div className="description">
                    <p id="product-name"> {productName} </p>
                    <p id="product-ingredients"> {ingredients}</p>
                    <p id="product-price"> Rs.{price} </p>
                    <button className="add-to-cart" onClick={() => addToCart(id)}>
                        add to cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
                    </button>
                </div>
            </div>
        </div>
    );
};