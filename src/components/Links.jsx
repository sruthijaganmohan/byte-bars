import React from "react";
import { Link } from "react-router-dom";

const Links = () => {
    return (
    <div className="links">
        <Link to="/shop">shop</Link>
        <Link to="/account">account</Link>
        <Link to="/cart">cart</Link>
    </div>
    );
  }

export default Links;