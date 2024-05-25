"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import Image from 'next/image'
import { curve } from "./assets";
import DotLottiePlayer from "./canvas/Robo";

import { Button } from "@/components/ui/button";
import { BackgroundBeamsDemo } from "./bgbeams";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="text-white font-bold py-36 text-center space-y-5">
      <div className="flex flex-col lg:flex-row mt-0  lg:mt-[3%] items-center">
        <div className="flex items-center mb-5 lg:mb-0 lg:mr-5">
          <DotLottiePlayer />
        </div>
        <div className="flex flex-col gap-5">
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold sm:translate-x-6">
            <h1>The Best AI Tool for</h1>
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              <TypewriterComponent
                options={{
                  strings: [
                    "Chatbot.",
                    "Photo Generation.",
                    "Image Generation.",
                    "Video Generation."
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
          <div className="text-sm md:text-xl font-light text-zinc-400">
            Create content using AI 10x faster.
          </div>
          <div>
            <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
              <Button variant="premium" className="md:text-lg p-4 md:p-6 rounded-full font-semibold">
                Start Generating For Free
              </Button>
            </Link>
          </div>
          <div className="text-zinc-400 text-xs md:text-sm font-normal">
            No credit card required.
          </div>
        </div>
      </div>
    </div>
  );
};
