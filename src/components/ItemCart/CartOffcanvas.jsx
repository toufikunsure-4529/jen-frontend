import React from "react";
import { useNavigate } from "react-router-dom";

function CartOffcanvas({ isOpen, onClose }) {
  const navigate = useNavigate();
  const handleBrowse = () => {
    onClose();
    // navigate("/");
    window.location.href = "#product";
  };

  return (
    <>
      <div
        className={`offcanvas offcanvas-end ${isOpen ? "show" : ""} `}
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabindex="-1"
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
        style={{ visibility: isOpen ? "visible" : "hidden" }}
      >
        <div class="offcanvas-header bg-warning text-white">
          <img src="/logo.png" alt="Jaman Enterprise" height={50} width={50} />
          <h5 class="offcanvas-title" id="offcanvasScrollingLabel">
            Your Cart Item
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            onClick={onClose}
          ></button>
        </div>
        <div class="offcanvas-body bg-body-tertiary">
          <div className="d-flex flex-column justify-content-center align-items-center ">
            <span>
              <i
                className="bi bi-cart-x-fill text-warning"
                style={{ fontSize: "50px", width: "24px", height: "24px" }}
              ></i>
            </span>
            <h3 className="h6">Your cart is empty</h3>
            <button className="btn btn-warning" onClick={handleBrowse}>
              Browse Products
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartOffcanvas;
