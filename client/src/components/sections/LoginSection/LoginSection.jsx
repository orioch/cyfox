import { useCallback } from "react";
import { INPUT_TYPES, ROUTES } from "../../../utils/constants";
import Button from "../../atoms/Button/Button";
import Input from "../../atoms/Input/Input";
import { useNavigate } from "react-router-dom";

const LoginSection = () => {
  const navigate = useNavigate();

  const handleSignUpClick = useCallback(() => {
    navigate(ROUTES.SIGNUP);
  }, [navigate]);

  return (
    <div className="flex flex-col shadow-gray-600 shadow-l animate-in slide-in-from-bottom-12 fade-in duration-500 rounded-xl bg-gray-300 p-16 gap-10">
      <h1 className="font-semibold mr-auto ml-auto">Login</h1>
      <div className="flex flex-col gap-1">
        <Input type={INPUT_TYPES.EMAIL} label="Email" />
        <Input type={INPUT_TYPES.PASSWORD} label="Password" />
        <Button className="ml-auto mr-auto">Login</Button>
      </div>
      <span>
        New to Cyfox?{" "}
        <button
          onClick={handleSignUpClick}
          className="text-prim-default font-semibold hover:-translate-y-1 hover:scale-110 transition"
        >
          Sign Up
        </button>{" "}
        here!
      </span>
    </div>
  );
};

export default LoginSection;
