import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  devices: [],
  brand: [],
  mobile: [],
  tablet: [],
  laptop: [],
};

export const repairSlice = createSlice({
  name: "repair",
  initialState,
  reducers: {
    addDevice: (state, action) => {
      state.devices = action.payload;
    },
    whichBrand: (state, action) => {
      state.brand = action.payload;
    },
    whichMobile: (state, action) => {
      state.mobile = action.payload;
    },
    whichTablet: (state, action) => {
      state.tablet = action.payload;
    },
    whichLaptop: (state, action) => {
      state.laptop = action.payload;
    },
  },
});

export const { whichBrand, addDevice, whichMobile, whichTablet, whichLaptop } =
  repairSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectDevices = (state) => state.repair.devices;
export const selectMobile = (state) => state.repair.mobile;
export const selectTablet = (state) => state.repair.tablet;
export const selectLaptop = (state) => state.repair.laptop;
export const selectBrand = (state) => state.repair.brand;

export default repairSlice.reducer;
