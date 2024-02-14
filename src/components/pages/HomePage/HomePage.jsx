import { useDispatch } from "react-redux";
import { COLORS } from "../../../utils/constants";
import Button from "../../atoms/Button/Button";
import { setToken } from "../../../redux/slices/tokenSlice";

const HomePage = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(setToken());
  };

  return (
    <div className="flex w-full h-full flex-col gap-7 justify-center text-center items-center text-white text-3xl md:text-5xl">
      <h1 className="animate-in slide-in-from-bottom-12 fade-in duration-500">
        Welcome to the home page!
      </h1>
      <Button
        onClick={handleLogOut}
        className="animate-in slide-in-from-bottom-12 fade-in duration-1000"
        color={COLORS.PRIM.DEFAULT}
      >
        Log Out
      </Button>
    </div>
  );
};

export default HomePage;
