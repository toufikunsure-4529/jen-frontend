import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./AuthSlice";
import CartSlice from "./CartSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    cart: CartSlice
  }
})

export default store