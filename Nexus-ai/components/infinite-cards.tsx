"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div id="reactions" className="h-[25rem] rounded-md flex flex-col antialiased bg-black dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <h2 className="text-center text-4xl text-white font-ibm font-extrabold mb-10">Testimonials</h2>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Nexus AI has transformed my workflow with its versatile tools like Text-to-Music and Text-to-Image. Integrating it into my projects with Next.js and Clerk was seamless.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "The Text-to-Video and Text-to-Music tools on Nexus AI are game-changers. The Speech Language converter makes reaching a global audience easy. Highly recommended!",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "The Text-to-Code tool has saved me countless hours. The Chat-bot is fantastic for my websites. Integration with Next.js and Shadcn is smooth and hassle-free.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "Text-to-Video and Chat-bot tools on Nexus AI have enhanced my business's digital presence. Integration with Next.js and Clerk is straightforward, and support is top-notch.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Nexus AI's Text-to-Image and Speech Language converter tools are powerful and accurate. The platform's support for Next.js and Clerk is excellent for my projects.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
