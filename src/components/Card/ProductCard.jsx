import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addToCartStore } from "../../store/CartSlice";

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
  ];

  const authStatus = useSelector((state) => state.auth.status);
  const dispatch = useDispatch();
  const [cartCounts, setCartCounts] = useState(Array(product.length).fill(1));

  const increaseCartItem = (index) => {
    setCartCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      if (newCounts[index] >= 5) {
        toast.warn("At a time 5 Product Cart ");
      } else {
        newCounts[index] += 1;
      }
      return newCounts;
    });
  };

  const decreaseCartItem = (index) => {
    setCartCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      if (newCounts[index] > 1) {
        newCounts[index] -= 1;
      }
      return newCounts;
    });
  };

  const addCart = (cartData) => {
    const { title, price, featuredImageId, description } = cartData;
    console.log(cartData);
    if (authStatus === false) {
      toast.warn("Please Login to continue!");
    } else {
      dispatch(addToCartStore({ title, price, featuredImageId, description }));
      toast.success("Cart added Successfully");
    }
  };

  return (
    <div className="container">
      <div className="row">
        {product.map((item, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="position-relative">
                <img
                  src={item.img}
                  className="card-img-top"
                  alt={item.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div
                  className="text-white bg-gradient bg-success px-2 d-flex py-2 align-items-center rounded-end-pill position-absolute top-0 start-0"
                  style={{ height: "20px", width: "100px" }}
                >
                  25% Off
                </div>
              </div>
              <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">

                <h5 className="card-title text-truncate" style={{ fontSize: "14px" }}>
                  {item.title}
                </h5>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <p className="text-decoration-line-through fs-6 text-success mb-0">
                    ₹2250
                  </p>
                  <p className="fw-bold fs-5 mb-0">₹{item.price}</p>
                </div>
                </div>
                <p className="text-black-50" style={{ fontSize: "12px" }}>
                  {item.description}
                </p>
                <div className="mb-3">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-half"></i>
                </div>
                <div className="mt-auto d-flex justify-content-between align-items-center">
                  <button className="btn btn-outline-danger btn-sm">
                    Add to Wishlist
                  </button>
                  <button
                    className="btn btn-dark btn-sm"
                    onClick={() => addCart(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCard;
