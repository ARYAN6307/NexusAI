'use client';
import React from 'react';
import { HashRouter } from "react-router-dom";
import Header from "@/components/header-landing";
import { LandingHero } from "@/components/landing-hero";
import  { InfiniteMovingCardsDemo }  from "@/components/infinite-cards";
import Collaboration from "@/components/ui/Landing/Collaboration";
import Roadmap from "@/components/ui/Landing/Roadmap";
import  { BackgroundBeamsDemo }  from "@/components/bgbeams";
import Footer from "@/components/ui/Landing/Footer";

const LandingPage = () => {
  return (
    <div className="h-full">
      <HashRouter>
        <Header />
        <LandingHero />
        <InfiniteMovingCardsDemo />
      </HashRouter>
      <Collaboration />
      <Roadmap />
      <BackgroundBeamsDemo />
      <Footer />
    </div>
  );
};

export default LandingPage;
