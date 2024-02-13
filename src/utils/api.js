import { signup } from "../redux/slices/mockServerSlice";

export const createNewUser = async ({ userData, dispatch }) => {
  await dispatch(signup(userData));
};
