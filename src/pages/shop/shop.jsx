import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

export const Shop = () => {
    return( 
    <div className="shop">
        <div className="products">
            {PRODUCTS.map((product) => (
                <Product data={product}/>
            ))}
        </div>
        <div>
            <button><Link to="/cart">cart</Link></button>
        </div>        
        <div>
            <Footer/>
        </div>
    </div>
    );
}