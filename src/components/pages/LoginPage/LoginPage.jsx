import LoginSection from "../../sections/LoginSection/LoginSection";
import Logo from "../../Icons/Logo";

const LoginPage = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <div className="slide-in-from-bottom-12 fade-in duration-500"></div>
      <Logo className="absolute top-16 w-72 invisible md:visible" />
      <LoginSection />
    </div>
  );
};

export default LoginPage;
