import React from 'react';

const MarqueeHeader = () => {
  return (
    <div className="marquee-header">
      <marquee>
        {`Free gift on all orders above Rs. 699. `}
        {`Free delivery on all orders above Rs. 499.`}
      </marquee>
    </div>
  );
}

export default MarqueeHeader;