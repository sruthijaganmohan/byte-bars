import React from "react";
import { Link } from "react-router-dom";

const Links = () => {
    return (
    <div className="links">
        <button><Link to="/shop">shop</Link></button>
        <button><Link to="/account">account</Link></button>
        <button><Link to="/cart">cart</Link></button>
    </div>
    );
  }

export default Links;