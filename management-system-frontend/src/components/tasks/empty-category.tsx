import { PiEmpty } from "react-icons/pi";

import React from "react";

const EmptyCategory = () => {
  return (
    <div className="flex flex-col items-center text-gray-400 py-16">
      <PiEmpty size={25} />
      <span>NO TASK FOUND!!</span>
    </div>
  );
};

export default EmptyCategory;
