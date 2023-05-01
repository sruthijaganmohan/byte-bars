import React from "react";
import { Link } from "react-router-dom";
import leoImage from '../../images/byte-bars-front-page.png';
import './home.css';
import logoImage from '../../images/byte-bars-logo.png';
import boxesImage from '../../images/byte-bars-box.png';
import manyBars from '../../images/byte-all.png';
import reviewer1 from '../../images/reviewer1.png';
import reviewer2 from '../../images/reviewer2.png';
import reviewer3 from '../../images/reviewer3.png';
import byteBarsHand from '../../images/byte-bars-hand.png';
import singularBar from '../../images/singular-byte-bar.png';
import { InstagramLogo, TwitterLogo, FacebookLogo } from "phosphor-react";

export const Home = () => {
    return (
        <div className="home-container">

            {/* section 1 */}
            <div className="section-1">
                <div className="section-1-image">
                    <img
                        className="leo-image"
                        src={leoImage}
                    />
                </div>
                <div className="section-1-home-links">
                    <div className="home-logo">
                        <img
                            className="logo-image"
                            src={logoImage}
                        />
                    </div>
                    <div className="home-links">
                        <Link id="home-shop-link" to="/shop">
                            shop
                        </Link>
                    </div><br /><br /><br />

                    <div className="home-links">
                        <Link id="home-account-link" to="/account">
                            account
                        </Link>
                    </div><br /><br /><br />

                    <div className="home-links">
                        <Link id="home-cart-link" to="/cart">
                            cart
                        </Link>
                    </div>
                </div>
            </div>

            {/* section 2 */}
            <div className="section-2">
                <div className="section-2-image">
                    <img
                        className="boxes-image"
                        src={boxesImage}
                    />
                </div>
            </div>

            {/* section 3 */}
            <div className="section-3">
                <div className="properties">
                    <h1>100% raw <br /> vegan <br /> gluten free</h1>
                </div>
                <div className="section-3-image">
                    <img
                        className="many-bars"
                        src={manyBars}
                    />
                </div>
            </div>

            {/* section 4 */}
            <div className="section-4">
                <div className="semi-circle" id="semi-circle-1">
                    <img
                        className="reviewer-1"
                        src={reviewer1}
                    />
                    <h1>Chatgpt</h1>
                    <h3>Ethical AI Language model</h3>
                    <p>"If you're looking for a delicious and healthier snack option, Byte Bars are a great choice.
                        Plus, Byte Bars is a company committed to sustainability, using eco-friendly packaging materials and locally-sourced ingredients."</p>
                </div>

                <div className="semi-circle" id="semi-circle-2">
                    <img
                        className="reviewer-2"
                        src={reviewer2}
                    />
                    <h1>Batman</h1>
                    <h3>Vigilante</h3>
                    <p>"Gotham city can be a tough place, but Byte Bars are the perfect snack for fueling up during a night of crime-fighting.
                        As Batman, I need to stay at my best, and Byte Bars provide a delicious and healthy option for keeping my energy levels up.
                        BATMANNNNNNNNNNN"</p>
                </div>

                <div className="semi-circle" id="semi-circle-3">
                    <img
                        className="reviewer-3"
                        src={reviewer3}
                    />
                    <h1>Dog</h1>
                    <h3>Husband, Father</h3>
                    <p>"woof"</p>
                </div>
            </div>

            {/* section 5 */}
            <div className="section-5">
                <div className="section-5-image">
                    <img
                        className="byte-bars-hands-image"
                        src={byteBarsHand}
                    />
                </div>
            </div>

            {/* section 6 */}
            <div className="section-6">
                <div className="home-contact">
                    <input placeholder="enter your email here" /><button className="subscribe">subscribe</button><br />
                    <button className="contact-us">contact us</button>
                    <div className="home-social-icons">
                        <a href='https://www.instagram.com/bytebars/?hl=en'><InstagramLogo size={112} color="#ffffff" weight="fill" /></a>
                        <a href='https://twitter.com/bytebar'><TwitterLogo size={112} color="#ffffff" weight="fill" /></a>
                        <a href='https://www.facebook.com/bytebars/'><FacebookLogo size={112} color="#ffffff" weight="fill" /></a>
                    </div>
                    <p className="home-footer">PO Box 17. Fake City: New Laven | Privacy Policy | Terms of Service</p>
                </div>
                <div className="section-6-image">
                    <img
                        className="singular-bar-image"
                        src={singularBar}
                    />
                </div>
            </div>

        </div>
    );
}