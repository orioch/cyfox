import { createSlice } from "@reduxjs/toolkit";

import { ERROR_CODES } from "../../utils/constants";
import { uid } from "uid";

const initialState = { users: [] };

const mockServerSlice = createSlice({
  name: "mockServer",
  initialState,
  reducers: {
    signup(state, action) {
      if (state.users.find((user) => user.email === action.payload.email)) {
        const error = new Error("Account already exist");

        error.code = ERROR_CODES.ACCOUNT_ALREADY_EXIST;

        throw error;
      } else {
        state.users.push({ ...action.payload, token: uid() });
      }
    },
    login(state, action) {
      const user = state.users.find(
        (user) => user.email === action.payload.email
      );

      if (user) {
        if (user.password === action.payload.password) {
          return user.token;
        } else {
          const error = new Error("Password is incorrect");
          error.code = 401;
          throw error;
        }
      } else {
        const error = new Error("Email not exist");
        error.code = 404;
        throw error;
      }
    },
  },
});

export const { signup, login } = mockServerSlice.actions;
export default mockServerSlice.reducer;
