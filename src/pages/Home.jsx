import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import productServiceDBappwrite from "../backend/appwrite/adminProductMng";
import PricingCard from "../components/Card/PricingCard";
import HomeCursol from "../components/Home/HomeCursol";
import NavigationMenu from "../components/Home/NavigationMenu";

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
      <NavigationMenu />
      <HomeCursol />

      {/* Dynamically render PricingCard for each unique category */}
      {categories.map((category) => (
        <PricingCard key={category} category={category} title={category} />
      ))}
    </div>
  );
}

export default Home;
