import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Preloader from "../../Preloader";
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
          setIsLoading(false);
        } else {
          toast.error("No products found");
        }
      } catch (error) {
        toast.error("Failed to fetch products");
      } finally {
        // Ensure loading state is set to false in both success and failure cases
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // console.log(products);

  const authStatus = useSelector((state) => state.auth.status);
  const dispatch = useDispatch();

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
    <div className="container mb-5" id="product">
      {/* Title and divider */}
      <div className="d-flex align-items-center mb-3">
        <div className="bg-success bg-gradient text-uppercase text-white fw-medium px-3 py-2 rounded-pill">
          Appliances
        </div>
        <div className="flex-grow-1 ms-3">
          <hr
            className="bg-success bg-gradient m-0"
            style={{ height: "3px" }}
          />
        </div>
      </div>
      {/* Product card */}
      <div className="container">
        {isLoading ? (
          <Preloader />
        ) : (
          <>
            <div className="row">
              {products.map((item, index) => (
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
                        className="text-white bg-gradient bg-success px-2 d-flex py-2 align-items-center rounded-end-pill position-absolute top-0 start-0"
                        style={{ height: "auto", width: "100px" }}
                      >
                        {item.status === "Out of Stock" ? (
                          "Out of Stock"
                        ) : (
                          <>{item.discountPercent}% Off</>
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
          </>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
