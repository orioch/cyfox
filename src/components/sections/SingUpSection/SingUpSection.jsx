import { INPUT_TYPES } from "../../../utils/constants";
import Button from "../../atoms/Button/Button";
import Card from "../../atoms/Card/Card";
import Input from "../../atoms/Input/Input";

const SingUpSection = () => {
  return (
    <Card className="flex flex-col animate-in slide-in-from-bottom-12 fade-in duration-500 gap-10">
      <h1 className="font-semibold mr-auto ml-auto">Sign Up</h1>
      <div className="flex flex-col gap-1">
        <Input type={INPUT_TYPES.EMAIL} label="Email" />
        <Input type={INPUT_TYPES.PASSWORD} label="Password" />
        <Button className="ml-auto mr-auto">Sign Up</Button>
      </div>
    </Card>
  );
};

export default SingUpSection;
