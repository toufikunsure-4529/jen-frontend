import React from "react";
import ProductCard from "./ProductCard";

function PricingCard() {
  return (
    <>
      {/* Container for the entire card section */}
      <div className="container mb-5" id="product">
        {/* Title and divider */}
        <div className="d-flex align-items-center mb-3">
          <div className="bg-success bg-gradient text-uppercase text-white fw-medium px-3 py-2 rounded-pill">
            Appliances
          </div>
          <div className="flex-grow-1 ms-3">
            <hr
              className="bg-success bg-gradient m-0"
              style={{ height: "3px" }}
            />
          </div>
        </div>
        {/* Product card */}
        <ProductCard />
      </div>

      {/* Repeat for additional cards */}
      <div className="container mb-5" id="product">
        <div className="d-flex align-items-center mb-3">
          <div className="bg-success bg-gradient text-uppercase text-white fw-medium px-3 py-2 rounded-pill">
            Appliances
          </div>
          <div className="flex-grow-1 ms-3">
            <hr
              className="bg-success bg-gradient m-0"
              style={{ height: "3px" }}
            />
          </div>
        </div>
        <ProductCard />
      </div>
    </>
  );
}

export default PricingCard;
