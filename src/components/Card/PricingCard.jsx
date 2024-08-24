import React from "react";
import ProductCard from "./ProductCard";

function PricingCard() {
  return (
    <>
      <div className="container mb-5">
        <div className="bg-warning w-25 text-uppercase text-white fw-medium px-2 py-2 rounded-top-pill rounded-end-pill">
          Appliances
        </div>
        <div className="bg-warning w-100" style={{ height: "3px" }}></div>
      </div>
      <ProductCard />
    </>
  );
}

export default PricingCard;
