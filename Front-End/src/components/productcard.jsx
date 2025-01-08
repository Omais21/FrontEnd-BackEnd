import React, { useState } from "react";
import Heart from "react-heart";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";
import { useSelector } from "react-redux";

export default function ProductCard(Props) {
  const discountPrice = (
    Props.price -
    Props.discountPercentage * (Props.price / 100)
  ).toFixed(2);
  const [active, setActive] = useState(false);
  const darkMode = useSelector((state) => state.darkMode.darkMode);



  return (
    <div className={`relative w-[270px] min-h-80 my-4 bg-gray-100 ${darkMode?"bg-slate-600":"bg-[F5F5F5]"} rounded-md p-2 group hover:border-2 hover:border-black`}>
      {/* Main Card Container */}
      <div className="min-h-[250px] bg-secondary relative p-3 rounded">
        <div className="flex justify-between items-center">
          {/* Discount Badge */}
          <p className="bg-primary text-white h-8 w-16 rounded text-center flex items-center justify-center">
            -{Math.round(Props.cardDiscount)}%
          </p>
          {/* Heart Icon */}
          <div style={{ width: "2rem" }}>
            <Heart
              isActive={active}
              onClick={() => setActive(!active)}
              style={{
                cursor: "pointer",
              }}
            />
          </div>
        </div>

        {/* Product Image */}
        <img
          src={Props.cardImage}
          className="mx-auto -mt-8 max-h-40"
          alt={Props.cardName}
        />

        {/* Hover Effect: 'View on Cart' Text */}
        <Link to={`/product/${Props.id}`} className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-center bg-black text-white text-xs py-1 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded w-full">
          View Details
        </Link>
      </div>

      {/* Card Info */}
      <div className="flex flex-col gap-3">
        {/* Product Name */}
        <p className="pt-3 font-medium text-base">{Props.cardName}</p>
        {/* Price Section */}
        <p className="flex gap-3">
          <span className="text-primary font-medium">${discountPrice}</span>
          <span className="font-medium text-gray-500 line-through">
            ${Props.price}
          </span>
        </p>
        {/* Rating */}
        <div>
          <ReactStars
            count={5}
            value={Props.rating}
            size={24}
            color2={"#ffd700"}
            edit={false}
          />
        </div>
      </div>

      {/* Hover Border Effect */}
      <div className="absolute inset-0 border-2 border-transparent rounded-md group-hover:border-black pointer-events-none"></div>
    </div>
  );
}

