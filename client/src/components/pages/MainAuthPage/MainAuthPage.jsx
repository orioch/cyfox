import { useNavigate } from "react-router-dom";
import Logo from "../../Icons/Logo";
import Button from "../../atoms/Button/Button";
import { ROUTES } from "../../../utils/constants";
import { useCallback } from "react";

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
      <div className="w-[60%] h-full flex justify-center items-center">
        <Logo className="w-72" />
      </div>
      <div className="bg-blue-950 w-[40%] flex justify-center flex-col items-center gap-10 p-10">
        <h1 className="font-bold text-xl">Welcome</h1>
        <div className="flex gap-5">
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
