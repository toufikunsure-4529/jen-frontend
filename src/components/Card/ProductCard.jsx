import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

function ProductCard() {
  const product = [
    {
      img: "/product1.jpg",
      title: "SURIYAA-POWER",
      price: "2200",
      description: "SURIYAA-POWER :SAFE FLAME",
    },
    {
      img: "/product1.jpg",
      title: "SURIYAA-POWER",
      price: "2200",
      description: "SURIYAA-POWER :SAFE FLAME",
    },
    {
      img: "/product1.jpg",
      title: "SURIYAA-POWER",
      price: "2200",
      description: "SURIYAA-POWER :SAFE FLAME",
    },
    {
      img: "/product1.jpg",
      title: "SURIYAA-POWER",
      price: "2200",
      description: "SURIYAA-POWER :SAFE FLAME",
    },
    {
      img: "/product1.jpg",
      title: "SURIYAA-POWER",
      price: "2200",
      description: "SURIYAA-POWER :SAFE FLAME",
    },
  ];

  return (
    <div className="container">
      <div className="row">
        {product.map((item, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card h-100">
              <div
                className="bg-warning px-2 d-flex py-3 align-items-center rounded-end-pill"
                style={{ height: "20px",width:"100px" }}
              >
                25% Off
              </div>
              <img src={item.img} className="card-img-top" alt={item.title} />
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <h5
                    className="card-title text-truncate"
                    style={{ fontSize: "14px" }}
                  >
                    {item.title}
                  </h5>
                  <div className="d-flex justify-content-center align-items-center gap-2">
                    <p className="text-decoration-line-through fs-6 text-success">
                      ₹2250
                    </p>
                    <p className="fw-bold fs-5">₹{item.price}</p>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <button className="btn btn-success btn-sm px-3">-</button>
                    <button className="btn btn-success btn-sm">1</button>
                    <button className="btn btn-success btn-sm px-3">+</button>
                  </div>
                  <a href="#" className="btn btn-warning btn-sm">
                    Add to Cart
                  </a>
                </div>
              </div>
              <p
                className="text-black-50"
                style={{ fontSize: "12px", marginLeft: "12px" }}
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCard;
