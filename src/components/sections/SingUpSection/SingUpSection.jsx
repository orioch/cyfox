import { useState } from "react";

import { INPUT_TYPES, ROUTES } from "../../../utils/constants";
import { createNewUser } from "../../../utils/server";
import Button from "../../atoms/Button/Button";
import Card from "../../atoms/Card/Card";
import Input from "../../atoms/Input/Input";
import Spinner from "../../atoms/Spinner/Spinner";
import { useNavigate } from "react-router-dom";

const SingUpSection = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState();
  const [passwordError, setPasswordError] = useState();
  const [serverError, setServerError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSignUpClick = async () => {
    if (!emailError && !passwordError) {
      setIsLoading(true);

      try {
        await createNewUser({ email, password });

        setServerError();
        setIsSuccess(true);
      } catch (err) {
        setServerError({ label: err.message, key: err.code });
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

  const handleLogInClick = () => {
    navigate(ROUTES.LOGIN);
  };

  return (
    <Card className="flex flex-col animate-in slide-in-from-bottom-12 fade-in duration-500 gap-10">
      {isSuccess ? (
        <div>isSuccess</div>
      ) : (
        <>
          <h1 className="font-semibold mr-auto ml-auto">Sign Up</h1>
          <div className="flex flex-col gap-1">
            <Input
              value={email}
              label="Email"
              type={INPUT_TYPES.EMAIL}
              error={serverError}
              setError={setEmailError}
              onChange={handleEmailChange}
            />
            <Input
              value={password}
              label="Password"
              type={INPUT_TYPES.PASSWORD}
              setError={setPasswordError}
              onChange={handlePasswordChange}
            />
            <Button
              onClick={handleSignUpClick}
              className="ml-auto mr-auto w-28 flex items-center justify-center"
            >
              {isLoading ? <Spinner /> : "Sign Up"}
            </Button>
          </div>
          <span>
            Already have an account?{" "}
            <button
              onClick={handleLogInClick}
              className="text-prim-default font-semibold hover:-translate-y-1 hover:scale-110 transition"
            >
              Login
            </button>{" "}
            here!
          </span>
        </>
      )}
    </Card>
  );
};

export default SingUpSection;
