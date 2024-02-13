import { signup } from "../redux/slices/mockServerSlice";
import { store } from "../store";
import { ERROR_CODES } from "./constants";

export const createNewUser = async (userData) => {
  const { users } = store.getState().mockServerSlice;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (users.find((user) => user.email === userData.email)) {
        const error = new Error("Account already exist");

        error.code = ERROR_CODES.ACCOUNT_ALREADY_EXIST;

        reject(error);
      } else {
        store.dispatch(signup(userData));
      }

      resolve();
    }, Math.random() * (2 - 1) + 1);
  });
};
