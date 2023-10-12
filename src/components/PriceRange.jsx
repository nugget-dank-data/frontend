import React from "react";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

const CustomSlider = styled(Slider)(({ theme }) => ({
  color: "#7F56D9",
  "& .MuiSlider-thumb": {
    backgroundColor: "white",
    border: "2px solid #7F56D9",
  },
  "& .MuiSlider-thumb.MuiSlider-active": {
    border: `2px solid ${theme.palette.primary.main}`,
  },
  "& .MuiSlider-thumb.Mui-disabled": {
    border: `2px solid ${theme.palette.action.disabled}`,
  },
}));

const PriceRange = ({ range, handlePriceChanges, disabled }) => {
  const formatPrice = (value) => {
    return `$${value}`;
  };

  return (
    <div className="price z-[20]">
      <p>Price</p>
      <CustomSlider
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
