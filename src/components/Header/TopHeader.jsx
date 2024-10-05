import React from "react";

function TopHeader() {
  return (
    <div
      className="w-100 h-auto"
      style={{
        paddingTop: "12px",
        paddingBottom: "11px",
        background: `linear-gradient(100deg, rgba(24, 50, 88, 1) 5%, rgba(24, 50, 88, 0.8436) 20%, rgba(110, 40, 69, 0.9136) 35%, rgba(237, 25, 41, 1) 91%)`,
      }}
    >
      <div className="container d-flex justify-content-between align-items-center">
        <div className="text-light d-flex align-items-center gap-4 ">
          <p className="mb-0" style={{ fontSize: "14px" }}>
            24x7 Live Technical Support
          </p>
          <p className="mb-0" style={{ fontSize: "14px" }}>
            info@jamanenterprise.com
          </p>
          <p className="mb-0" style={{ fontSize: "14px" }}>
            Customer Services: +91 8001074096
          </p>
        </div>
        <div className="d-flex gap-4">
          <i className="bi bi-facebook text-white social-links"></i>
          <i className="bi bi-twitter text-white social-links"></i>
          <i className="bi bi-instagram text-white social-links"></i>{" "}
          <i className="bi bi-linkedin text-white social-links"></i>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
