import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";
import repairReducer from "../slices/repairSlice";
import repairBasketReducer from "../slices/repairBasketSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    repair: repairReducer,
    repairBasket: repairBasketReducer,
  },
});
