import { curve, heroBackground, robot } from "./assets";
import Button from "./ui/buton";
import Section from "./ui/Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "./constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./ui/Generating";
import Notification from "./ui/notification";
import CompanyLogos from "./ui/CompanyLogos";
import Image from "next/image";
import { useAuth } from "@clerk/nextjs";

interface HeroProps {
    tag:string;
    title:string;
}

const Hero: React.FC<HeroProps> = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const backgroundCirclesRef = useRef<HTMLDivElement>(null); // New ref for BackgroundCircles
  const { isSignedIn } = useAuth();
  
  return (
    <Section
    
    >
      <BottomLine />
    </Section>
  );
};

export default Hero;