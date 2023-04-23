import React from "react";
import './product.css'

export const Product = (props) => {
    const {id, productName, ingredients, price, productImage} = props.data;
    return <div className="product-container">
            <div className="product">
                <div className="image">
                    <img src={productImage} alt="product" />
                </div>
                <div className="description">
                    <p id="product-name"> {productName} </p>
                    <p id="product-ingredients"> {ingredients}</p>
                    <p id="product-price"> Rs.{price} </p>
                    <button className="add-to-cart">add to cart</button>
                </div>
            </div>  
        </div>
};