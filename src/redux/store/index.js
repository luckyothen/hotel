import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "../reducers/ui-reducer";

const store = configureStore({
  reducer: { uiReducer },
});

export default store;
