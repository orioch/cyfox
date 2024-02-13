import { signup } from "../redux/slices/mockServerSlice";

export const createNewUser = ({ userData, dispatch }) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      dispatch(signup(userData));
      resolve();
    }, Math.random() * (5000 - 1000) + 1000);
  });
};
