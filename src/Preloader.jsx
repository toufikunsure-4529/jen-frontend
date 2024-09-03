import React from "react";

function Preloader() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      {/* <div className="spinner-grow text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-secondary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-success" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-danger" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>*/}
      <img src="/0_4Gzjgh9Y7Gu8KEtZ.gif" alt="Loading..." />
    </div>
  );
}

export default Preloader;
