import React from "react";
import Image from "next/image";
import { lines } from "../assets";

export const LeftLine: React.FC = () => {
  return (
    <div className="hidden lg:block absolute top-1/2 right-full w-[92.5rem] h-[11.0625rem] -translate-y-1/2 pointer-events-none">
      <Image
        src={lines}
        width={1480}
        height={177}
        alt="Lines"
      />
    </div>
  );
};

export const RightLine: React.FC = () => {
  return (
    <div className="hidden lg:block absolute top-1/2 left-full w-[92.5rem] h-[11.0625rem] -translate-y-1/2 -scale-x-100 pointer-events-none">
      <Image
        src={lines}
        width={1480}
        height={177}
        alt="Lines"
      />
    </div>
  );
};
