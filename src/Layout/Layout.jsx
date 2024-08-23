import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Preloader from "../Preloader";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

function Layout() {
  const [preloader, setPreloader] = useState(true);

  useEffect(() => {}, [
    setTimeout(() => {
      setPreloader(false);
    }, 2000),
  ]);

  return (
    <>
      {preloader ? (
        <Preloader />
      ) : (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
}

export default Layout;
