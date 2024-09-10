import React from "react";
import AddProductForm from "../admin-components/AddProductForm";
import AllProductsView from "../admin-components/AllProductsView";

function AddProduct() {
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <p className="h5">Products</p>
          <div
            className="btn btn-primary text-uppercase"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
            title="Add Product"

          >
            Add Product
          </div>

          <div
            className="offcanvas offcanvas-end"
            style={{ width: "500px" }}
            tabIndex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <div className="offcanvas-header d-flex justify-content-between align-items-center">
              <h5 className="offcanvas-title" id="offcanvasRightLabel">
                Add Product
              </h5>
              <button
                type="button"
                className="btn btn-outline-danger"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                Close
              </button>
            </div>
            <div className="offcanvas-body">
              <AddProductForm />
            </div>
          </div>
        </div>
        <AllProductsView />
      </div>
    </>
  );
}

export default AddProduct;
