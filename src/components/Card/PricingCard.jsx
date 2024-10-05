import React from "react";
import ProductCard from "./ProductCard";

function PricingCard({ category }) {
  return (
    <>
      <div className="container mb-5" id="product" data-aos="fade-up">
        {/* Title and divider */}
        <div className="d-flex align-items-center mb-3 mt-4">
          <div className="bg-dark bg-gradient text-uppercase text-white fw-medium px-3 py-2 rounded-pill">
            {category}
          </div>
          <div className="flex-grow-1 ms-3">
            <hr
              className="bg-success bg-gradient m-0"
              style={{ height: "3px" }}
            />
          </div>
        </div>
        {/* Product card */}
        <ProductCard category={category} />
      </div>
    </>
  );
}

export default PricingCard;
