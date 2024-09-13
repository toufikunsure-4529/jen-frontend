import React, { useState } from "react";
import { toast } from "react-toastify";
import productServiceDBappwrite from "../../backend/appwrite/adminProductMng";

function AddProductForm() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
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
    productImageId: "",
  });

  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { id, value, files } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === false) {
      setValidated(true);
      return;
    }
    setLoading(true);

    try {
      let fileId = "";
      if (formData.productImg) {
        const fileUploadResponse =
          await productServiceDBappwrite.uploadProductImage(
            formData.productImg
          );
        if (fileUploadResponse) {
          fileId = fileUploadResponse.$id;
        }
      }

      const newProductData = { ...formData, productImageId: fileId };

      const addNewProduct = await productServiceDBappwrite.createNewProduct(
        newProductData
      );

      if (addNewProduct) {
        toast.success("Product Added successfully");
        setFormData({
          title: "",
          category: "",
          slug: "",
          brand: "",
          manufecture: "",
          mrpPrice: "",
          price: "",
          discountPercent: "",
          description: "",
          warranty: "",
          status: "",
          deliveryTime: "",
          productImg: null,
          productImageId: "",
        });
      }
    } catch (error) {
      toast.error(`Error adding product: ${error.message}`);
    } finally {
      setLoading(false);
      setValidated(true);
    }
  };

  return (
    <div className="container my-4">
      {/* <h3 className="text-center mb-4">Add New Product</h3> */}
      <form
        className={`row g-4 needs-validation ${
          validated ? "was-validated" : ""
        }`}
        noValidate
        onSubmit={handleSubmit}
      >
        <div className="col-md-6">
          <label htmlFor="title" className="form-label">
            Product Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Please provide a title.</div>
        </div>

        <div className="col-md-6">
          <label htmlFor="slug" className="form-label">
            Slug
          </label>
          <input
            type="text"
            className="form-control"
            id="slug"
            value={formData.slug}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Please provide a slug.</div>
        </div>

        <div className="col-md-6">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            className="form-select"
            id="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option disabled value="">
              Select Category
            </option>
            <option>SURAKSHA LPG HOSE</option>
            <option>LPG STOVES</option>
            <option>LPG CYLINDER TROLLEY</option>
            <option>KITCHEN & HOME APPLIANCES</option>
            <option>FLAME LIGHTER</option>
            <option>FLAME RETARDANT APRON</option>
            <option>FIRE EXTINGUISHERS</option>
          </select>
          <div className="invalid-feedback">Please select a category.</div>
        </div>

        <div className="col-md-6">
          <label htmlFor="brand" className="form-label">
            Brand
          </label>
          <input
            type="text"
            className="form-control"
            id="brand"
            value={formData.brand}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Please provide a brand.</div>
        </div>

        <div className="col-md-6">
          <label htmlFor="manufecture" className="form-label">
            Manufacturer
          </label>
          <input
            type="text"
            className="form-control"
            id="manufecture"
            value={formData.manufecture}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Please provide a manufacturer.</div>
        </div>

        <div className="col-md-6">
          <label htmlFor="mrpPrice" className="form-label">
            MRP
          </label>
          <input
            type="number"
            className="form-control"
            id="mrpPrice"
            value={formData.mrpPrice}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Please provide the MRP.</div>
        </div>

        <div className="col-md-6">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Please provide the price.</div>
        </div>

        <div className="col-md-6">
          <label htmlFor="discountPercent" className="form-label">
            Discount (%)
          </label>
          <input
            type="number"
            className="form-control"
            id="discountPercent"
            value={formData.discountPercent}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">
            Please provide a discount percentage.
          </div>
        </div>

        <div className="col-md-6">
          <label htmlFor="warranty" className="form-label">
            Warranty (Months)
          </label>
          <input
            type="number"
            className="form-control"
            id="warranty"
            value={formData.warranty}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">
            Please provide the warranty period.
          </div>
        </div>

        <div className="col-md-6">
          <label htmlFor="status" className="form-label">
            Status
          </label>
          <select
            className="form-select"
            id="status"
            value={formData.status}
            onChange={handleChange}
            required
          >
            <option disabled value="">
              Select Status
            </option>
            <option>Listed (Not Available for Customer)</option>
            <option>Live (Customer Can Search)</option>
            <option>Out of Stock</option>
            <option>Not Available Right Now</option>
          </select>
          <div className="invalid-feedback">Please select a status.</div>
        </div>

        <div className="col-md-6">
          <label htmlFor="deliveryTime" className="form-label">
            Delivery Time (Days)
          </label>
          <input
            type="number"
            className="form-control"
            id="deliveryTime"
            value={formData.deliveryTime}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Please provide delivery time.</div>
        </div>

        <div className="col-md-12">
          <label htmlFor="description" className="form-label">
            Product Description
          </label>
          <textarea
            className="form-control"
            id="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
          <div className="invalid-feedback">Please provide a description.</div>
        </div>

        <div className="col-md-12">
          <label htmlFor="productImg" className="form-label">
            Product Image
          </label>
          <input
            type="file"
            className="form-control"
            id="productImg"
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Please upload a product image.</div>
        </div>

        <div className="col-12 text-end">
          <button
            className="btn btn-secondary me-2"
            type="button"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            Cancel
          </button>
          <button className="btn btn-primary" type="submit">
            {loading ? (
              <>
                <span
                  className="spinner-border spinner-border-sm"
                  aria-hidden="true"
                ></span>
                <span> Please Wait...</span>
              </>
            ) : (
              "Add Product"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProductForm;
