import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import Preloader from "../Preloader";
import authServiceAppwrite from "../backend/appwrite/auth";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { login as storeLogin } from "../store/AuthSlice";

function Layout() {
  const [preloader, setPreloader] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  //Pre Loading Animation Methods
  useEffect(() => {
    setTimeout(() => {
      setPreloader(false);
    }, 2000);
  }, []);

  //Every Time Get current user info Globally
  useEffect(() => {
    authServiceAppwrite
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(storeLogin({ userData }));
        }
      })
      .finally(() => setIsLoading(false));
  }, [isLoading]);

  return (
    <>
      {preloader ? (
        <Preloader />
      ) : (
        <>
          <Header />
          {isLoading ? <Preloader /> : <Outlet />}
          <Footer />
        </>
      )}
    </>
  );
}

export default Layout;
