import { configureStore } from "@reduxjs/toolkit";

import mockServerSlice from "./redux/slices/mockServerSlice";
import tokenSlice from "./redux/slices/tokenSlice";

export const store = configureStore({
  reducer: { mockServerSlice, tokenSlice },
});
