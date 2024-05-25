'use client'
import { LandingHero } from "@/components/landing-hero";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingContent } from "@/components/landing-content";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { BackgroundBeamsDemo } from "@/components/bgbeams";
import { BentoGridDemo } from "@/components/bentogrid-demo";
import Header from "@/components/header-landing";
import Footer from "@/components/ui/Landing/Footer";
import Pricing from "@/components/ui/Landing/Pricing";
import Roadmap from "@/components/ui/Landing/Roadmap";
import Hero from "@/components/landing-heroo";
import Collaboration from "@/components/ui/Landing/Collaboration";
import { InfiniteMovingCardsDemo } from "@/components/infinite-cards";
import { HashRouter } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="h-full ">
      <HashRouter>
      <Header/>
      <LandingHero />
      <InfiniteMovingCardsDemo /> 
      </HashRouter>
      <Collaboration/>
      <Roadmap/>
      {/* <BentoGridDemo /> */}
      <BackgroundBeamsDemo />
      <Footer/>

    </div>
  );
};

export default LandingPage;
