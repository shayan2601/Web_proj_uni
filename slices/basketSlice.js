import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  products: [],
  grade: [],
};

export const getBasketTotal = (item) =>
  item?.reduce((accumulator, currVal) => currVal.price + accumulator, 0);

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      );
      let newBasket = [...state.items];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        alert(
          `Cannot remove product (id: ${action.payload.id}) as its not in the basket`
        );
      }
      state.items = newBasket;
    },
    showProduct: (state, action) => {
      state.products = action.payload;
    },
    addGrade: (state, action) => {
      state.grade = action.payload;
    },
  },
});

export const { addToBasket, removeFromBasket, showProduct, addGrade } =
  basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;
export const selectProducts = (state) => state.basket.products;
export const selectGrade = (state) => state.basket.grade;

export default basketSlice.reducer;
