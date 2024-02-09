import { INPUT_TYPES } from "../../../utils/constants";
import Input from "../../atoms/Input/Input";

const LoginSection = () => {
  return (
    <div className="flex flex-col shadow-lg rounded-xl bg-gray-100 p-10 gap-10">
      <h1 className="font-semibold mr-auto ml-auto">Login</h1>
      <div className="flex flex-col gap-3">
        <Input type={INPUT_TYPES.EMAIL} label="Username" />
        <Input type={INPUT_TYPES.PASSWORD} label="Password" />
      </div>
    </div>
  );
};

export default LoginSection;
