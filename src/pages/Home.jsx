import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import productServiceDBappwrite from "../backend/appwrite/adminProductMng";
import PricingCard from "../components/Card/PricingCard";
import HomeCursol from "../components/Home/HomeCursol";

function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    document.title = "Jaman Enterprise";
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productServiceDBappwrite.getAllProducts();
        if (data && data.documents) {
          // Extract unique categories from products
          const uniqueCategories = [
            ...new Set(data.documents.map((product) => product.category)),
          ];
          setCategories(uniqueCategories);
        } else {
          toast.error("No products found");
        }
      } catch (error) {
        toast.error("Failed to fetch products");
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="bg-body-tertiary">
      <HomeCursol />

      {/* Dynamically render PricingCard for each unique category */}

      {/* still update */}
      <div className="container my-4">
        <div
          className="alert alert-warning text-center p-3"
          style={{
            backgroundColor: "#ffc107",
            color: "#000",
            borderRadius: "8px",
          }}
        >
          <div className="d-flex align-items-center justify-content-center mb-2">
            <i
              className="bi bi-exclamation-triangle-fill"
              style={{ fontSize: "24px", marginRight: "8px" }}
            ></i>
            <h4 className="mb-0">Attention!</h4>
          </div>
          <div>
            We apologize for the inconvenience. Our services will be unavailable
            for a few days as we upgrade our entire system. We will restore
            services shortly.
          </div>
        </div>
      </div>
      {categories.map((category) => (
        <PricingCard key={category} category={category} title={category} />
      ))}
    </div>
  );
}

export default Home;
