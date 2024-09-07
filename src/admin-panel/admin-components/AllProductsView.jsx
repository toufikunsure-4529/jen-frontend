import React from "react";

function AllProductsView() {
  return (
    <div className="container mt-4">
      {/* <h5 className="text-center mb-4">All Products</h5> */}
      <div className="table-responsive productTable">
        <table className="table table-striped table-hover table-bordered align-middle">
          <thead className="table-info">
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Category</th>
              <th scope="col">Name</th>
              <th scope="col">Brand</th>
              <th scope="col">Manufacturer</th>
              <th scope="col">MRP</th>
              <th scope="col">Discount</th>
              <th scope="col">Warranty</th>
              <th scope="col">In Stock</th>
              <th scope="col">Delivery</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  src="/product1.jpg"
                  alt="Product"
                  className="img-fluid rounded"
                  style={{ height: "70px", width: "70px", objectFit: "cover" }}
                />
              </td>
              <td>Oven</td>
              <td>4B-SURYA-OVAL</td>
              <td>SAFE FLAME</td>
              <td>MALHOTRA INDUSTRIES</td>
              <td>₹4500</td>
              <td>50%</td>
              <td>1 Year</td>
              <td className="text-success">In Stock</td>
              <td>10 days</td>
              <td>
                <div className="d-flex gap-2">
                  <button
                    className="btn btn-outline-primary btn-sm"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Edit Product"
                  >
                    <i className="bi bi-pencil-fill"></i>
                  </button>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Delete Product"
                  >
                    <i className="bi bi-trash3-fill"></i>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src="/product1.jpg"
                  alt="Product"
                  className="img-fluid rounded"
                  style={{ height: "70px", width: "70px", objectFit: "cover" }}
                />
              </td>
              <td>Oven</td>
              <td>4B-SURYA-OVAL</td>
              <td>SAFE FLAME</td>
              <td>MALHOTRA INDUSTRIES</td>
              <td>₹4500</td>
              <td>50%</td>
              <td>1 Year</td>
              <td className="text-success">In Stock</td>
              <td>10 days</td>
              <td>
                <div className="d-flex gap-2">
                  <button
                    className="btn btn-outline-primary btn-sm"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Edit Product"
                  >
                    <i className="bi bi-pencil-fill"></i>
                  </button>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Delete Product"
                  >
                    <i className="bi bi-trash3-fill"></i>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src="/product1.jpg"
                  alt="Product"
                  className="img-fluid rounded"
                  style={{ height: "70px", width: "70px", objectFit: "cover" }}
                />
              </td>
              <td>Oven</td>
              <td>4B-SURYA-OVAL</td>
              <td>SAFE FLAME</td>
              <td>MALHOTRA INDUSTRIES</td>
              <td>₹4500</td>
              <td>50%</td>
              <td>1 Year</td>
              <td className="text-success">In Stock</td>
              <td>10 days</td>
              <td>
                <div className="d-flex gap-2">
                  <button
                    className="btn btn-outline-primary btn-sm"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Edit Product"
                  >
                    <i className="bi bi-pencil-fill"></i>
                  </button>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Delete Product"
                  >
                    <i className="bi bi-trash3-fill"></i>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src="/product1.jpg"
                  alt="Product"
                  className="img-fluid rounded"
                  style={{ height: "70px", width: "70px", objectFit: "cover" }}
                />
              </td>
              <td>Oven</td>
              <td>4B-SURYA-OVAL</td>
              <td>SAFE FLAME</td>
              <td>MALHOTRA INDUSTRIES</td>
              <td>₹4500</td>
              <td>50%</td>
              <td>1 Year</td>
              <td className="text-success">In Stock</td>
              <td>10 days</td>
              <td>
                <div className="d-flex gap-2">
                  <button
                    className="btn btn-outline-primary btn-sm"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Edit Product"
                  >
                    <i className="bi bi-pencil-fill"></i>
                  </button>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Delete Product"
                  >
                    <i className="bi bi-trash3-fill"></i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllProductsView;
