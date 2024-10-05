import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import productServiceDBappwrite from "../backend/appwrite/adminProductMng";
import PricingCard from "../components/Card/PricingCard";
import Description from "../components/Home/Description";
import HomeCursol from "../components/Home/HomeCursol";
import OurTeam from "../components/Home/OurTeam";
function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    document.title = "Jaman Enterprise";
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Customize the duration or any other settings here
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []); // Empty dependency array ensures this runs only once when the component mounts

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
    <div className="bg-body-tertiary ">
      <HomeCursol />
      <Description />
      {/* Dynamically render PricingCard for each unique category */}

      <OurTeam />
      <div>
        <div className="container mt-5">
          <p className=" text-secondary">New Product</p>
          <h5 className="fs-2 fw-semibold" style={{ color: "#072440" }}>
            Hand Picked Products
          </h5>
        </div>
        {categories.map((category) => (
          <PricingCard key={category} category={category} title={category} />
        ))}
      </div>
    </div>
  );
}

export default Home;
