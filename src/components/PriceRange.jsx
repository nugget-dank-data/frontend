import React from "react";
import Slider from "@mui/material/Slider";

const PriceRange = ({ range, handlePriceChanges, disabled }) => {
  const formatPrice = (value) => {
    return `$${value}`;
  };

  return (
    <div className="price">
      <p>Price</p>
      <Slider
        value={range}
        onChange={handlePriceChanges}
        valueLabelDisplay="auto"
        min={0}
        max={300}
        getAriaValueText={formatPrice}
        disabled={disabled}
      />
      <div className="range-display text-center">
        {formatPrice(range[0])} - {formatPrice(range[1])}
      </div>
    </div>
  );
};

export default PriceRange;
