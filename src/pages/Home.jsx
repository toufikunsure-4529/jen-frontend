import React, { useEffect } from "react";
import PricingCard from "../components/Card/PricingCard";
import HomeCursol from "../components/Home/HomeCursol";
import NavigationMenu from "../components/Home/NavigationMenu";

function Home() {
  useEffect(() => {
    document.title = "Jaman Enterprise";
  }, []);
  return (
    <>
      <div className="bg-body-tertiary">
        <NavigationMenu />
        <HomeCursol />
        <PricingCard />
      </div>
    </>
  );
}

export default Home;
