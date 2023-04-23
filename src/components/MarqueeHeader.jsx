import React from 'react';
import { Sparkle } from "phosphor-react";
import './MarqueeHeader.css';

const MarqueeHeader = () => {
  return (
    <div className="marquee-header">
      <h1>
        <Sparkle size={24} color="#fff57f" weight="fill" style={{ marginLeft: "20px", marginRight: "20px" }}/>
        {`free gift on all orders above Rs. 699.`}
        <Sparkle size={24} color="#fff57f" weight="fill" style={{ marginLeft: "20px", marginRight: "20px" }}/>
        {`free delivery on all orders above Rs. 499.`}
        <Sparkle size={24} color="#fff57f" weight="fill" style={{ marginLeft: "20px", marginRight: "20px" }}/>
        {`free gift on all orders above Rs. 699.`}
        <Sparkle size={24} color="#fff57f" weight="fill" style={{ marginLeft: "20px", marginRight: "20px" }}/>
        {`free delivery on all orders above Rs. 499.`}
      </h1>
    </div>
  );
}

export default MarqueeHeader;
