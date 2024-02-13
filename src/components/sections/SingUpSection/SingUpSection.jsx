import { useState } from "react";

import { INPUT_TYPES } from "../../../utils/constants";
import { createNewUser } from "../../../utils/server";
import Button from "../../atoms/Button/Button";
import Card from "../../atoms/Card/Card";
import Input from "../../atoms/Input/Input";
import Spinner from "../../atoms/Spinner/Spinner";

const SingUpSection = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState();
  const [passwordError, setPasswordError] = useState();
  const [bottomError, setBottomError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUpClick = async () => {
    if (!emailError && !passwordError) {
      setIsLoading(true);

      try {
        await createNewUser({ email, password });

        setBottomError();
      } catch (err) {
        setBottomError(err.message);
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

  return (
    <Card className="flex flex-col animate-in slide-in-from-bottom-12 fade-in duration-500 gap-10">
      <h1 className="font-semibold mr-auto ml-auto">Sign Up</h1>
      <div className="flex flex-col gap-1">
        <Input
          value={email}
          label="Email"
          type={INPUT_TYPES.EMAIL}
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
        {bottomError}
        <Button
          onClick={handleSignUpClick}
          className="ml-auto mr-auto w-28 flex items-center justify-center"
        >
          {isLoading ? <Spinner /> : "Sign Up"}
        </Button>
      </div>
    </Card>
  );
};

export default SingUpSection;
