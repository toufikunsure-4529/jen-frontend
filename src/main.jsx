import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Ensure you import the bundle for JS components

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App.jsx";
import AdminHomeLayout from "./Layout/AdminHomeLayout.jsx";
import AdminLoginLayout from "./Layout/AdminLoginLayout.jsx";
import Layout from "./Layout/Layout.jsx";
import AddProduct from "./admin-panel/pages-admin/AddProduct.jsx";
import Dashboard from "./admin-panel/pages-admin/Dashboard.jsx";
import "./index.css";
import Admin from "./pages/Admin.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import store from "./store/Store.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
      <Route path="/admin" element={<AdminLoginLayout />}>
        <Route index element={<Admin />} />
      </Route>
      <Route path="/admin/dash" element={<AdminHomeLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="/admin/dash/addproduct" element={<AddProduct />} />
      </Route>
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={router} />
      <ToastContainer />
    </StrictMode>
  </Provider>
);
