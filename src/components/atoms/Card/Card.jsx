const Card = ({ children, className }) => {
  return (
    <div
      className={`shadow-gray-600 shadow-l rounded-xl bg-gray-300 p-16 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
