"use client";
import Lottie from "lottie-react";
import loading from "../../public/assets/animations/loading.json";

type Props = {
  className?: string;
};

const Loader: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={`
      h-[70vh]
      w-full
      flex 
      flex-col 
      justify-center 
      items-center 
      bg-white
      z-50
      absolute
      ${className}
    `}
    >
      <Lottie animationData={loading} loop={true} className="w-24 h-24" />
    </div>
  );
};

export default Loader;
