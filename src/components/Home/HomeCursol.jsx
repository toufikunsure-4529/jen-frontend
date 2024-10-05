import React from "react";

function HomeCursol() {
  return (
    <>
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ maxWidth: "100%", overflow: "hidden" }}
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide-to="0"
            className="active bg-danger"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            className="bg-danger"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            className="bg-danger"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          {/* First Carousel Item */}
          <div
            className="carousel-item active"
            data-bs-interval="5000"
            style={{
              height: "500px",
              backgroundImage: `url("/Domestic-Main-Banners.jpg")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundColor: "#12335A",
            }}
          >
            <div
              className="text-white d-flex flex-column justify-content-center align-items-start pe-lg-5  ps-lg-4 p-2"
              style={{ height: "100%", backgroundColor: "rgba(0, 0, 0, 0.4)" }}
            >
              <h2
                className="display-4 fw-bold mb-3"
                style={{ letterSpacing: "1px" }}
              >
                Discover Quality LPG Oven Parts
              </h2>
              <p className="lead mb-4" style={{ maxWidth: "600px" }}>
                Ensure the efficiency of your cooking with our premium LPG oven
                parts. Quality you can trust for all your culinary needs.
              </p>
              <button className="btn btn-outline-light btn-lg">Shop Now</button>
            </div>
          </div>

          {/* Second Carousel Item */}
          <div
            className="carousel-item"
            data-bs-interval="5000"
            style={{
              height: "500px",
              backgroundImage: `url("/bannerNew2.jpg")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundColor: "#12335A",
            }}
          >
            <div
              className="text-white d-flex flex-column justify-content-center align-items-start pe-lg-5  ps-lg-4 p-2"
              style={{ height: "100%", backgroundColor: "rgba(0, 0, 0, 0.4)" }}
            >
              <h2
                className="display-4 fw-bold mb-3"
                style={{ letterSpacing: "1px" }}
              >
                Premium LPG Oven Components
              </h2>
              <p className="lead mb-4" style={{ maxWidth: "600px" }}>
                Upgrade your cooking experience with our selection of
                high-quality LPG oven components, designed for reliability and
                performance.
              </p>
              <button className="btn btn-outline-light btn-lg">
                Explore Now
              </button>
            </div>
          </div>

          {/* Third Carousel Item */}
          <div
            className="carousel-item"
            style={{
              height: "500px",
              backgroundImage: `url("/cursol4.jpg")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundColor: "#12335A",
            }}
          >
            <div
              className="text-white d-flex flex-column justify-content-center align-items-start pe-lg-5  ps-lg-4 p-2"
              style={{ height: "100%", backgroundColor: "rgba(0, 0, 0, 0.4)" }}
            >
              <h2
                className="display-4 fw-bold mb-3"
                style={{ letterSpacing: "1px" }}
              >
                Reliable LPG Oven Accessories
              </h2>
              <p className="lead mb-4" style={{ maxWidth: "600px" }}>
                Discover a wide range of reliable accessories for your LPG ovens
                to ensure your cooking needs are fully met.
              </p>
              <button className="btn btn-outline-light btn-lg">
                View Products
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
            style={{ filter: "brightness(0.8)" }}
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
            style={{ filter: "brightness(0.8)" }}
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default HomeCursol;
