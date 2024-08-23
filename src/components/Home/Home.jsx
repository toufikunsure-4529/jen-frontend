import React from "react";
import PricingCard from "../Card/PricingCard";
import HomeCursol from "./HomeCursol";
import NavigationMenu from "./NavigationMenu";

function Home() {
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
