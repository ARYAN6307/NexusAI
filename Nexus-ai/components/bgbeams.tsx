"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";

export function BackgroundBeamsDemo() {
  return (
    <div id='join' className="h-full w-full rounded-md bg-black relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative  z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Join the waitlist
        </h1>
        <p></p>
        <p className="text-neutral-500 font-serif max-w-lg mx-auto my-2 text-sm text-center relative z-10">
        Welcome to Nexus AI, the ultimate platform for transforming text into dynamic audio, video, chatbots, music, images, and code. We offer reliable, scalable, and customizable AI solutions to elevate your business communication and creativity. Whether you need engaging multimedia content, interactive chatbot experiences, or innovative music and code generation, Nexus AI has you covered.
        </p>
        <input
          type="text"
          placeholder="hi@aryanpandey.in"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
        />
      </div>
      <BackgroundBeams />
    </div>
  );
}
