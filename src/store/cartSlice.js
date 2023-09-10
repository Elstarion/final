import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: sessionStorage.getItem("cartItems")
    ? JSON.parse(sessionStorage.getItem("cartItems"))
    : [],
  cartItemsQuantity: 0,
  cartTotalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        ++state.cartItems[itemIndex].inCart;
      } else {
        const duplicateItem = { ...action.payload, inCart: 1 };
        state.cartItems.push(duplicateItem);
      }
      ++state.cartItemsQuantity;
      sessionStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    removeFromCart(state, action) {
      const filteredItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      state.cartItems = filteredItems;
      sessionStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );

      if (state.cartItems[itemIndex].inCart > 1) {
        --state.cartItems[itemIndex].inCart;
        sessionStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },

    clearCart(state) {
      state.cartItems = [];
      sessionStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    getTotal(state) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, inCart } = cartItem;
          const itemTotal = price * inCart;

          cartTotal.total += itemTotal;
          cartTotal.quantity += inCart;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );

      state.cartTotalPrice = total;
      state.cartItemsQuantity = quantity;
    },
  },
});

export const { addToCart, removeFromCart, decreaseCart, clearCart, getTotal } =
  cartSlice.actions;

export default cartSlice.reducer;
