import { combineReducers, configureStore } from "@reduxjs/toolkit";

import mockServerSlice from "./redux/slices/mockServerSlice";
import tokenSlice from "./redux/slices/tokenSlice";
import persistStore from "redux-persist/es/persistStore";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  mockServerSlice: persistReducer(
    { key: "root", storage: storage },
    mockServerSlice
  ),
  tokenSlice: tokenSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
