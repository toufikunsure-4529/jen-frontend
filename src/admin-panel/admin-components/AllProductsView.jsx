import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import productServiceDBappwrite from "../../backend/appwrite/adminProductMng";

function AllProductsView() {
  const [tableProductsData, setTableProductsData] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiResponse = await productServiceDBappwrite.getAllProducts();
        if (apiResponse && apiResponse.documents) {
          setTableProductsData(apiResponse.documents);
        } else {
          throw new Error("Unexpected data format");
        }
      } catch (error) {
        toast.error("Some occurred issue facing our end!");
        console.log(error);
      }
    };

    fetchData();
  }, []);

  console.log(tableProductsData);

  return (
    <div className="container mt-4">
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
              <th scope="col">Sell Price</th>
              <th scope="col">Warranty</th>
              <th scope="col">In Stock</th>
              <th scope="col">Delivery</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tableProductsData.length > 0 ? (
              tableProductsData.map((apiData, index) => (
                <tr key={index}>
                  <td>
                    <img
                      src={productServiceDBappwrite.getProductImgPreview(
                        apiData.productImageId
                      )}
                      alt={apiData.title}
                      className="img-fluid rounded"
                      style={{
                        height: "70px",
                        width: "70px",
                        objectFit: "cover",
                      }}
                    />
                  </td>
                  <td>{apiData.category ? apiData.category : "NA"}</td>
                  <td>{apiData.title}</td>
                  <td>{apiData.brand}</td>
                  <td>{apiData.manufecture}</td>
                  <td>₹{apiData.mrpPrice}</td>
                  <td>₹{apiData.price}</td>
                  <td>{apiData.warranty} Year</td>
                  <td className="text-success">{apiData.status}</td>
                  <td>{apiData.deliveryTime} days</td>
                  <td>
                    <div className="d-flex gap-2">
                      <button
                        className="btn btn-outline-primary btn-sm"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight"
                        aria-controls="offcanvasRight"
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
              ))
            ) : (
              <tr>
                <td colSpan="11" className="text-center">
                  No Products Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllProductsView;
