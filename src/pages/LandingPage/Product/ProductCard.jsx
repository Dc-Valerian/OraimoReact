import React from "react";
import CardProps from "./CardProps";

const ProductCard = () => {
  return (
    <div className="mt-10 flex items-center justify-center  flex-col gap-5 pb-10">
      ProductCard
      <div className=" w-[90%] gap-7 grid grid-cols-1 md:grid-cols-2">
        <CardProps
          text="power"
          image="https://cdn-img.oraimo.com/2024/08/22/670x330-1.jpg"
        />
        <CardProps
          text="Smart"
          image="https://cdn-img.oraimo.com/2024/08/22/670x330-1.jpg"
        />
        <CardProps
          text="Home Applicance"
          image="https://cdn-img.oraimo.com/2024/08/22/20240822-161312.jpg"
        />
        <CardProps
          text="personal care"
          image="https://cdn-img.oraimo.com/2024/11/15/pc-cl560.jpg"
        />
      </div>
    </div>
  );
};

export default ProductCard;
