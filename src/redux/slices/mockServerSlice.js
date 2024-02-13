import { createSlice } from "@reduxjs/toolkit";

import { uid } from "uid";

const initialState = { users: [] };

const mockServerSlice = createSlice({
  name: "mockServer",
  initialState,
  reducers: {
    signup(state, action) {
      state.users.push({ ...action.payload, token: uid() });
    },
  },
});

export const { signup } = mockServerSlice.actions;
export default mockServerSlice.reducer;
