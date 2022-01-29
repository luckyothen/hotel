import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isSlideDownNav: false,
  },
  reducers: {
    slideDownNav(state, action) {
      state.isSlideDownNav = !state.isSlideDownNav;
    },
    slideUpNav(state, action) {
      state.isSlideDownNav = false;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
