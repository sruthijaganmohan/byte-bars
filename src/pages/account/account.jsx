import React from "react";
import './account.css'
import lipsImage from "../../images/byte-bar-lips.png";
import { Sparkle } from "phosphor-react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

export const Account = () => {
    return (
    <div className="account-container">
        <div className="account">
        <div className="image-container">
        <img
            className="lips-image"
            src={lipsImage}
        />
        </div>

        <div className="details-container">
        <div className="hello" id="hello">
                <Sparkle size={48} color="#fff57f" weight="fill" style={{ marginLeft: "20px", marginRight: "20px" }}/>
                <h1>Hello User!</h1>
                <Sparkle size={48} color="#fff57f" weight="fill" style={{ marginLeft: "20px", marginRight: "20px" }}/>
        </div>
            <div className="account-shop-link">
                <Link id="account-details-link" to="/">
                    details
                </Link>    
            </div><br/><br/>

            <div className="account-shop-link">
                <Link id="account-orders-link" to="/">
                    orders
                </Link>    
            </div><br/><br/>
            
            <div className="account-shop-link">
                <Link id="account-shop-link" to="/shop">
                    shop
                </Link>    
            </div>
        </div>
        </div>
        <Footer/>
    </div>);
}