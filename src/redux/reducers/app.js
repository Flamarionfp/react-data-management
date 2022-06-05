import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  min: 1,
  max: 10,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    updateMin: (state, action) => {
      state.min = action.payload;
    },
    updateMax: (state, action) => {
      state.max = action.payload;
    },
  },
});

export const { updateMin, updateMax } = appSlice.actions;

export default appSlice.reducer;
