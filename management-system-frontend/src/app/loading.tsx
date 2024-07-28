import React from "react";
import { Spin } from "antd";

const Loading = () => {
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
  `}
    >
      <Spin size="large" />
    </div>
  );
};

export default Loading;
