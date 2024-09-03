import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
  cartItem: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
  totalQuantity: 1,
  showCart: true
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCartStore: (state, action) => {
      const newItemCart = {
        id: nanoid(),
        price: action.payload.price,
        itemName: action.payload.title,
        featuredImageId: action.payload.featuredImageId,
        quantity: action.payload.quantity,
        totalPrice: action.payload.price
      }
      state.cartItem.push(newItemCart)
      state.totalQuantity += 1
      localStorage.setItem("cartItems", JSON.stringify(state.cartItem))
    }
  }
})

export const { addToCartStore } = cartSlice.actions
export default cartSlice.reducer