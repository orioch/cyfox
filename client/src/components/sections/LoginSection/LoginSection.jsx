import { INPUT_TYPES } from "../../../utils/constants";
import Button from "../../atoms/Button/Button";
import Input from "../../atoms/Input/Input";

const LoginSection = () => {
  return (
    <div className="flex flex-col shadow-gray-600 shadow-l rounded-xl bg-gray-300 p-16 gap-10">
      <h1 className="font-semibold mr-auto ml-auto">Login</h1>
      <div className="flex flex-col gap-1">
        <Input type={INPUT_TYPES.EMAIL} label="Email" />
        <Input type={INPUT_TYPES.PASSWORD} label="Password" />
        <Button className="ml-auto mr-auto">Login</Button>
      </div>
    </div>
  );
};

export default LoginSection;
