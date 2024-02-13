import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ERROR_CODES, INPUT_TYPES, ROUTES } from "../../../utils/constants";
import Button from "../../atoms/Button/Button";
import Input from "../../atoms/Input/Input";
import Card from "../../atoms/Card/Card";
import Spinner from "../../atoms/Spinner/Spinner";
import { login } from "../../../utils/server";
import { useDispatch } from "react-redux";
import { setToken } from "../../../redux/slices/tokenSlice";

const LoginSection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState();
  const [passwordError, setPasswordError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleLoginClick = async () => {
    if (!emailError && !passwordError) {
      setIsLoading(true);
      try {
        const token = await login({ email, password });
        dispatch(setToken(token));
        navigate(ROUTES.DEFAULT);

        setEmailError();
        setPasswordError();
      } catch (err) {
        if (err.code === ERROR_CODES.PASSWORD_IS_INCORRECT) {
          setPasswordError({ label: err.message, key: err.code });
        } else {
          setEmailError({ label: err.message, key: err.code });
        }
      }

      setIsLoading(false);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUpClick = useCallback(() => {
    navigate(ROUTES.SIGNUP);
  }, [navigate]);

  return (
    <Card className="flex flex-col animate-in slide-in-from-bottom-12 fade-in duration-500 gap-10">
      <h1 className="font-semibold mr-auto ml-auto">Login</h1>
      <div className="flex flex-col gap-1">
        <Input
          value={email}
          label="Email"
          type={INPUT_TYPES.EMAIL}
          error={emailError}
          setError={setEmailError}
          onChange={handleEmailChange}
        />
        <Input
          value={password}
          label="Password"
          error={passwordError}
          type={INPUT_TYPES.PASSWORD}
          setError={setPasswordError}
          onChange={handlePasswordChange}
        />
        <Button
          onClick={handleLoginClick}
          className="ml-auto mr-auto w-28 flex items-center justify-center"
        >
          {isLoading ? <Spinner /> : "Login"}
        </Button>
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
    </Card>
  );
};

export default LoginSection;
