import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import Logo from "../../Icons/Logo";
import Button from "../../atoms/Button/Button";
import { ROUTES } from "../../../utils/constants";

const MainAuthPage = () => {
  const navigate = useNavigate();

  const handleLoginClick = useCallback(() => {
    navigate(ROUTES.LOGIN);
  }, [navigate]);

  const handleSignUpClick = useCallback(() => {
    navigate(ROUTES.SIGNUP);
  }, [navigate]);

  return (
    <div className="w-screen h-screen flex text-white">
      <div className="w-[60%]  h-full hidden md:flex justify-center items-center animate-in slide-in-from-bottom-12 fade-in duration-500">
        <Logo className="w-72" />
      </div>
      <div className="bg-blue-950 md:w-[40%] w-screen h-full flex md:justify-center flex-col items-center gap-10 p-10">
        <h1 className="font-bold text-xl animate-in slide-in-from-bottom-12 fade-in duration-500">
          Welcome
        </h1>
        <div className="flex gap-5 flex-col md:flex-row animate-in slide-in-from-bottom-12 fade-in duration-500">
          <Button onClick={handleSignUpClick} shouldHaveHoverTransition>
            Sing Up
          </Button>
          <Button onClick={handleLoginClick} shouldHaveHoverTransition>
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MainAuthPage;
