import React from "react";
import { FaStar } from "react-icons/fa";

const SellerCard = () => {
  return (
    <div className="p-3 w-[400px] ">
      <div className="bg-[white] group relative overflow-hidden">
        <div className="relative">
          <img
            src="https://cdn-img.oraimo.com/fit-in/360x360/KE/product/2024/01/26/OPB-1301-680-1.png"
            alt=""
            className=" bg-[#f8f8f8] w-full h-48 object-contain rounded-xl"
          />

          <div className="flex absolute bottom-3 left-4 items-center gap-1  text-sm bg-[white] px-2 py-1  rounded-lg">
            <span>4.7</span>
            <FaStar className="text-green-500" />
            <span className="text-gray-400">(545)</span>
          </div>
        </div>
        <h3 className="font-semibold mt-2 text-sm">PowerBank</h3>
        <hr />

        <h3 className="font-semibold mt-2 text-sm">PowerBank</h3>
        <hr />
        <h3 className="font-semibold mt-2 text-sm">PowerBank</h3>

        <div className="mt-2">
          <span className="font-bold">₦3939</span>
          <span className="line-through text-gray ml-2 text-sm">₦43848</span>
        </div>

        <div className="absolute inset-0 bg-[black/40] flex items-end justify-center gap-3 pb-4 opacity-0 group-hover:opacity-100 transition">
          <button className="bg-white border border-black px-3 py-1 rounded-full text-sm">
            Learn More
          </button>
          <button className="bg-black text-white px-3 py-1 rounded-full text-sm">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellerCard;
