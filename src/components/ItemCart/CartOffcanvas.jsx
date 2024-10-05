import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function CartOffcanvas({ isOpen, onClose }) {
  const navigate = useNavigate();
  const handleBrowse = () => {
    onClose();
    // navigate("/");
    window.location.href = "#product";
  };

  const cartItemData = useSelector((state) => state.cart.cartItem);

  console.log(cartItemData);

  return (
    <>
      <div
        className={`offcanvas offcanvas-end ${isOpen ? "show" : ""} `}
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabIndex="-1"
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
        style={{ visibility: isOpen ? "visible" : "hidden" }}
      >
        <div
          className="offcanvas-header text-white"
          style={{ backgroundColor: "#12335A" }}
        >
          <img src="/logo.png" alt="Jaman Enterprise" height={50} width={50} />
          <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
            Your Cart Item
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            onClick={onClose}
          ></button>
        </div>
        <div className="offcanvas-body bg-body-tertiary ">
          {cartItemData.length > 0 ? (
            <>
              {cartItemData.map((data, index) => (
                <div className="container" key={index}>
                  <div className="d-flex justify-content-between align-items-center border-bottom pb-3">
                    <div className="d-flex gap-3 align-items-center">
                      <img
                        src="/product1.jpg"
                        alt="Images"
                        className="img-fluid"
                        style={{ height: "80px", borderRadius: "8px" }}
                      />
                      <div>
                        <h5 className="mb-3" style={{ fontSize: "13px" }}>
                          {data.itemName}
                        </h5>
                        <div className="d-flex align-items-center">
                          <button className="btn btn-outline-dark btn-sm px-2">
                            -
                          </button>
                          <span className="mx-2">1</span>
                          <button className="btn btn-outline-dark btn-sm px-2">
                            +
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="text-end">
                      <h5 className="mb-2">₹{data.price}</h5>
                      <button className="btn btn-sm text-danger p-0">
                        <i className="bi bi-trash3"></i> Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <div className="d-flex gap-3 align-items-center mt-4">
                <input
                  type="text"
                  placeholder="Enter coupon code..."
                  className="form-control"
                  style={{
                    border: "1px solid #ccc",
                    padding: "10px",
                    borderRadius: "5px",
                    width: "250px",
                  }}
                />
                <button
                  type="button"
                  className="btn btn-primary  text-light"
                  style={{
                    borderRadius: "5px",
                    padding: "10px 20px",
                  }}
                >
                  Apply
                </button>
              </div>

              <div className="d-flex justify-content-between align-items-center mt-4">
                <h5 className="text-black fs-6 opacity-75">Subtotal</h5>
                <h5>₹1250</h5>
              </div>
              <p style={{ fontSize: "12px" }} className="text-secondary">
                Taxes and shipping calculated at checkout
              </p>
              <div className="d-grid gap-2">
                <button
                  type="button"
                  className="btn text-light"
                  style={{ backgroundColor: "#F11928" }}
                >
                  Checkout
                </button>
              </div>
            </>
          ) : (
            <div className="d-flex flex-column justify-content-center align-items-center ">
              <span>
                <i
                  className="bi bi-cart-x-fill text-warning"
                  style={{ fontSize: "50px", width: "24px", height: "24px" }}
                ></i>
              </span>
              <h3 className="h6">Your cart is empty</h3>
              <button
                className="btn text-light"
                onClick={handleBrowse}
                style={{ backgroundColor: "#F11928" }}
              >
                Browse Products
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default CartOffcanvas;
