import { COLORS } from "../../../utils/constants";

const Button = ({
  onClick,
  children,
  className,
  color = COLORS.BLACK,
  shouldHaveHoverTransition,
  ...props
}) => {
  return (
    <button
      {...props}
      onClick={onClick}
      style={{ backgroundColor: color }}
      className={`${
        shouldHaveHoverTransition
          ? "hover:-translate-y-1 hover:scale-110 transition"
          : ""
      } align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
