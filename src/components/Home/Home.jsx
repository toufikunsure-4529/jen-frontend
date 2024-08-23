import React from "react";
import HomeCursol from "./HomeCursol";
import NavigationMenu from "./NavigationMenu";

function Home() {
  return (
    <>
      <div className="bg-body-tertiary">
        <NavigationMenu />
        <HomeCursol />
        <div className="container bg-success-subtle py-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          dolorum magni deserunt tempora, aut quasi laboriosam quos dolores cum
          qui iure reiciendis esse beatae ad repudiandae omnis animi sequi
          ipsam!
        </div>
      </div>
    </>
  );
}

export default Home;
