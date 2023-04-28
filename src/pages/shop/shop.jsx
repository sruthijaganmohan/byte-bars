import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import './shop.css';

export const Shop = () => {
    return( 
    <div className="shop-container">
        <div className="shop"> 
            <div className="products">
                {PRODUCTS.map((product) => (
                    <Product data={product}/>
                ))}
            </div>
            <div className="cart-link">
                <Link id="cart-link" to="/cart">cart</Link>
            </div>        
            <div>
                <Footer/>
            </div>
        </div>
    </div>
    );
}