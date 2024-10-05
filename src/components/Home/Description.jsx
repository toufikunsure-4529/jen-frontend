
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles
import React, { useEffect } from "react";

function Description() {


  return (
    <div className="container mt-5 mb-3">
      <div className="row align-items-center">
        <div className="col-lg-7 p-lg-5" data-aos="fade-right">
          <h3 style={{ fontSize: "35px", color: "#072440" }}>
            Choose the right brand used{" "}
            <span style={{ color: "#F11928" }}>LPG stoves</span>, oven parts,
            and <span style={{ color: "#F11928" }}>related products</span> from
            a trusted seller.
          </h3>
        </div>
        <div className="col-lg-5" data-aos="fade-left">
          <p style={{ color: "#392452", fontSize: "16px" }}>
            Explore our wide range of high-quality LPG stove and oven parts.
            From burners and regulators to knobs and hoses, we provide durable,
            reliable components to ensure your appliances run smoothly. Browse
            all our products and read more to find the perfect parts for your
            needs. Trusted by professionals!
          </p>
          <button className="btn btn-danger mt-3">
            Browse Products <i className="bi bi-arrow-right-circle ms-2"></i>{" "}
            {/* Right-side icon */}
          </button>{" "}
        </div>
      </div>
    </div>
  );
}

export default Description;
