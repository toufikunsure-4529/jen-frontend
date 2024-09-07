import React, { useState } from "react";
import { toast } from "react-toastify";

function AddProductForm() {
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    brand: "",
    manufecture: "",
    mrpPrice: "",
    price: "",
    description: "",
    discountPercent: "",
    warranty: "",
    status: "",
    deliveryTime: "",
    productImg: null,
  });
  const [validated, setValidated] = useState(false);

  const handleChange = (event) => {
    const { id, value, files } = event.target;
    setFormData({
      ...formData,
      [id]: files ? files[0] : value,
    });
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();

    if (form.checkValidity() === false) {
      event.preventDefault();
    }

    if (formData) {
      toast.success("Product Added Successfully");
      console.log(formData);
    }
    setValidated(true);
    setFormData({
      title: "",
      slug: "",
      brand: "",
      manufecture: "",
      mrpPrice: "",
      price: "",
      description: "",
      discountPercent: "",
      warranty: "",
      status: "",
      deliveryTime: "",
      productImg: "null",
    });
  };

  return (
    <>
      <div className="pb-4">
        <form
          className={`row g-3 needs-validation ${
            validated ? "was-validated" : ""
          }`}
          noValidate
          onSubmit={handleSubmit}
        >
          {/* Title Input */}
          <div className="col-md-6 form-floating mb-2">
            <input
              type="text"
              className="form-control form-control-sm"
              id="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
            <label htmlFor="title">Title</label>
            <div className="invalid-feedback">Title is required</div>
          </div>

          {/* Slug Input */}
          <div className="col-md-6 form-floating mb-2">
            <input
              type="text"
              className="form-control form-control-sm"
              id="slug"
              value={formData.slug}
              onChange={handleChange}
              required
            />
            <label htmlFor="slug">Slug</label>
            <div className="invalid-feedback">Slug is required</div>
          </div>

          {/* Brand Input */}
          <div className="col-md-6 form-floating mb-2">
            <input
              type="text"
              className="form-control form-control-sm"
              id="brand"
              value={formData.brand}
              onChange={handleChange}
              required
            />
            <label htmlFor="brand">Brand</label>
            <div className="invalid-feedback">Brand is required</div>
          </div>

          {/* Manufecture Input */}
          <div className="col-md-6 form-floating mb-2">
            <input
              type="text"
              className="form-control form-control-sm"
              id="manufecture"
              value={formData.manufecture}
              onChange={handleChange}
              required
            />
            <label htmlFor="manufecture">Manufecture</label>
            <div className="invalid-feedback">Manufecture is required</div>
          </div>

          {/* MRP Price Input */}
          <div className="col-md-6 form-floating mb-2">
            <input
              type="number"
              className="form-control form-control-sm"
              id="mrpPrice"
              value={formData.mrpPrice}
              onChange={handleChange}
              required
            />
            <label htmlFor="mrpPrice">MRP</label>
            <div className="invalid-feedback">MRP is required</div>
          </div>

          {/* Price Input */}
          <div className="col-md-6 form-floating mb-2">
            <input
              type="number"
              className="form-control form-control-sm"
              id="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
            <label htmlFor="price">Price</label>
            <div className="invalid-feedback">Price is required</div>
          </div>

          {/* Description Input */}
          <div className="col-md-12 form-floating mb-2">
            <textarea
              className="form-control form-control-sm"
              id="description"
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
            <label htmlFor="description">Description</label>
            <div className="invalid-feedback">Description is required</div>
          </div>

          {/* Discount Percent Input */}
          <div className="col-md-6 form-floating mb-2">
            <input
              type="number"
              className="form-control form-control-sm"
              id="discountPercent"
              value={formData.discountPercent}
              onChange={handleChange}
              required
            />
            <label htmlFor="discountPercent">Discount</label>
            <div className="invalid-feedback">Discount is required</div>
          </div>

          {/* Warranty Period Input */}
          <div className="col-md-6 form-floating mb-2">
            <input
              type="number"
              className="form-control form-control-sm"
              id="warranty"
              value={formData.warranty}
              onChange={handleChange}
              required
            />
            <label htmlFor="warranty">Warranty Period</label>
            <div className="invalid-feedback">Warranty is required</div>
          </div>

          {/* Status Dropdown */}
          <div className="col-md-6 form-floating mb-2">
            <select
              className="form-select form-select-sm"
              id="status"
              value={formData.status}
              onChange={handleChange}
              required
            >
              <option disabled value="">
                Choose...
              </option>
              <option>Listed (Not Available for customer)</option>
              <option>Live (Customer Can search)</option>
              <option>Out of stock</option>
              <option>Not Available Right Now</option>
            </select>
            <label htmlFor="status">Status</label>
            <div className="invalid-feedback">Status is required</div>
          </div>

          {/* Delivery Time Input */}
          <div className="col-md-6 form-floating mb-2">
            <input
              type="number"
              className="form-control form-control-sm"
              id="deliveryTime"
              value={formData.deliveryTime}
              onChange={handleChange}
              required
            />
            <label htmlFor="deliveryTime">Delivery Time</label>
            <div className="invalid-feedback">Delivery Time is required</div>
          </div>

          {/* Product Image Input */}
          <div className="col-md-12 form-floating mb-2">
            <input
              type="file"
              className="form-control form-control-sm"
              id="productImg"
              onChange={handleChange}
              required
            />
            <label htmlFor="productImg">Upload Product Image</label>
            <div className="invalid-feedback">Product image is required</div>
          </div>

          {/* Buttons */}
          <div className="col-12 d-flex gap-2 justify-content-end">
            <button
              className="btn btn-danger"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              Cancel
            </button>
            <button className="btn btn-primary" type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddProductForm;
