import { configureStore } from "@reduxjs/toolkit";

import mockServerSlice from "./redux/slices/mockServerSlice";

export const store = configureStore({
  reducer: { mockServerSlice },
});
