import LoginSection from "../../sections/LoginSection/LoginSection";

import Logo from "../../Icons/Logo";
const LoginPage = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <Logo className="absolute top-16 w-72" />
      <LoginSection />
    </div>
  );
};

export default LoginPage;
