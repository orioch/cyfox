import Logo from "../../Icons/Logo";
import SingUpSection from "../../sections/SingUpSection/SingUpSection";

const SingUpPage = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <div className="slide-in-from-bottom-12 fade-in duration-500"></div>
      <Logo className="absolute top-16 w-72 invisible md:visible" />
      <SingUpSection />
    </div>
  );
};

export default SingUpPage;
