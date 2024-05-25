import { background } from "../assets";
import Image from 'next/image';

export const Rings: React.FC = () => {
    return <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2">
        <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
    </div> // ... rest of the Rings component code
        ; // ... rest of the Rings component code
};

export const SideLines: React.FC = () => {
    return <>
        <div className="absolute top-0 left-5 w-0.25 h-full bg-n-6"></div>
        <div className="absolute top-0 right-5 w-0.25 h-full bg-n-6"></div>
    </>; // ... rest of the SideLines component code
};

export const BackgroundCircles: React.FC = () => {
    return <>
        <div className="absolute top-[4.4rem] left-16 w-3 h-3 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full"></div>
        <div className="absolute top-[12.6rem] right-16 w-3 h-3 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full"></div>
        <div className="absolute top-[26.8rem] left-12 w-6 h-6 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full"></div>
    </>;// ... rest of the BackgroundCircles component code
};

export const HamburgerMenu: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none lg:hidden">
      <div className="absolute inset-0 opacity-[.03]">
        <Image
          className="w-full h-full object-cover"
          src={background} // Assuming background is of type string
          alt="Background"
        />
      </div>

      <Rings />

      <SideLines />

      <BackgroundCircles />
    </div>
  );
};
