import React from 'react';
import { GiStarShuriken } from "react-icons/gi";

const HeadingText = () => {
  return (
    <div className="w-full flex justify-center py-4 px-2">
      <h4 className="text-white flex items-center gap-2 text-sm sm:text-base md:text-lg font-semibold text-center">
        <GiStarShuriken className="text-orange-500 text-3xl" />
        OUR ALUMNI ARE SHAPING DATA-DRIVEN SOLUTIONS AT
        <GiStarShuriken className="text-orange-500 text-3xl" />
      </h4>
    </div>
  );
};

export default HeadingText;
