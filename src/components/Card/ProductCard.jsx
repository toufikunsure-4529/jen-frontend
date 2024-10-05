import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import productServiceDBappwrite from "../../backend/appwrite/adminProductMng";
import { addToCartStore } from "../../store/CartSlice";

function ProductCard({ category }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productServiceDBappwrite.getAllProducts();
        if (data && data.documents) {
          setProducts(data.documents);
        } else {
          toast.error("No products found");
        }
      } catch (error) {
        toast.error("Failed to fetch products");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const authStatus = useSelector((state) => state.auth.status);
  const dispatch = useDispatch();

  const addCart = (cartData) => {
    const { title, price, featuredImageId, description } = cartData;
    if (authStatus === false) {
      toast.warn("Please Login to continue!");
    } else {
      dispatch(addToCartStore({ title, price, featuredImageId, description }));
      toast.success("Cart added Successfully");
    }
  };

  // Filter products based on category
  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  return (
    <div className="container mb-5" id="product">
      <div className="container">
        <div className="row">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item, index) => (
              <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                <div
                  className={`card h-100 shadow-sm ${
                    item.status === "Out of Stock" ? "grayScale" : ""
                  }`}
                >
                  <div className="position-relative">
                    <img
                      src={productServiceDBappwrite.getProductImgPreview(
                        item.productImageId
                      )}
                      className="card-img-top"
                      alt={item.title}
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div
                      className="text-white px-2 d-flex py-2 align-items-center rounded-end-pill position-absolute top-0 start-0"
                      style={{
                        height: "auto",
                        width: "100px",
                      }}
                    >
                      {item.status === "Out of Stock" ? (
                        <span
                          className="position-absolute top-0 start-0 badge text-bg-danger"
                          style={{
                            borderRadius: "0 0 10px 0",
                            fontSize: "12px",
                            padding: "5px 10px",
                          }}
                        >
                          Out of Stock
                        </span>
                      ) : (
                        <>
                          {" "}
                          <span
                            className="position-absolute top-0 start-0 badge text-bg-danger"
                            style={{
                              borderRadius: "0 0 10px 0",
                              fontSize: "12px",
                              padding: "5px 10px",
                            }}
                          >
                            {item.discountPercent}% Off
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <h5
                        className="card-title text-truncate"
                        style={{ fontSize: "14px" }}
                      >
                        {item.title}
                      </h5>
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <p className="text-decoration-line-through fs-6 text-success mb-0">
                          ₹{item.mrpPrice}
                        </p>
                        <p className="fw-bold fs-5 mb-0">₹{item.price}</p>
                      </div>
                    </div>
                    <p className="text-black-50" style={{ fontSize: "12px" }}>
                      {item.description}
                    </p>
                    <div className="rating mb-3">
                      <i className="bi bi-star-fill text-success"></i>
                      <i className="bi bi-star-fill text-success"></i>
                      <i className="bi bi-star-fill text-success"></i>
                      <i className="bi bi-star-fill text-success"></i>
                      <i className="bi bi-star-half text-success"></i>
                    </div>
                    <div className="mt-auto d-flex justify-content-between align-items-center">
                      <button className="btn btn-outline-primary btn-sm">
                        Add to Wishlist
                      </button>
                      <button
                        className="btn btn-sm text-light btn-primary"
                        onClick={() => addCart(item)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No products found in this category.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
