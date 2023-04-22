import React from "react";

export const Product = (props) => {
    const {id, productName, price, productImage} = props.data;
    return <div className="product">
            <img src={productImage} />
            <div className="description">
                <p> {productName} </p>
                <p> Rs.{price} </p>
            </div>
        </div>
};