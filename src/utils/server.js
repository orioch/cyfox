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
    }, Math.random() * (2000 - 500) + 500);
  });
};

export const login = async (userData) => {
  const { users } = store.getState().mockServerSlice;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find((user) => user.email === userData.email);

      if (user) {
        if (user.password === userData.password) {
          resolve(user.token);
        } else {
          const error = new Error("Password is incorrect");
          error.code = 401;
          reject(error);
        }
      } else {
        const error = new Error("Email not exist");
        error.code = 404;
        reject(error);
      }
    }, Math.random() * (2 - 1) + 1);
  });
};