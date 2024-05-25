import React from "react";
import Image from "next/image"; // Import Image component from next/image
import { gradient } from "../assets";

interface GradientProps {} // Optional interface for props if needed

const Gradient: React.FC<GradientProps> = () => {
  return (
    <div className="absolute top-[18.25rem] -left-[30.375rem] w-[56.625rem] opacity-60 mix-blend-color-dodge pointer-events-none">
      <div className="absolute top-1/2 left-1/2 w-[58.85rem] h-[58.85rem] -translate-x-3/4 -translate-y-1/2">
        <Image
          src={gradient} // Assuming gradient is an image path
          width={942}
          height={942}
          alt="Gradient"
          // Use layout="fill" to cover the container
        />
      </div>
    </div>
  );
};

export default Gradient;
