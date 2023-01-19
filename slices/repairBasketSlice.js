import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const getRepairBasketTotal = (repairitems) =>
  repairitems?.reduce((accumulator, currVal) => currVal.price + accumulator, 0);

export const repairBasketSlice = createSlice({
  name: "repairBasket",
  initialState,
  reducers: {
    addToRepairBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromRepairBasket: (state, action) => {
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
  },
});

export const { addToRepairBasket, removeFromRepairBasket } =
  repairBasketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectRepairItems = (state) => state.repairBasket.items;

export default repairBasketSlice.reducer;
