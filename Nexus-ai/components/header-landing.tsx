
import React from 'react';
import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { Montserrat } from "next/font/google";
import { HamburgerMenu } from './ui/headingg';
import MenuSvg from "./assets/svg/MenuSvg";
import Button from "./ui/buton";
import { navigation } from "./constants";

const font = Montserrat({ weight: "600", subsets: ["latin"] });

const HeaderLanding = () => {
  const { hash: pathname } = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const { isSignedIn } = useAuth();

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"}`}>
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <Link href="#hero" className="block w-[12rem] xl:mr-8">
          <Image src='/logo.png' width={75} height={35} alt="Nexus AI" />
        </Link>
        <nav className={`${openNavigation ? "flex" : "hidden"} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
          <HamburgerMenu />
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <Link
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${item.onlyMobile ? "lg:hidden" : ""} px-6 py-6 md:py-8 lg:-mr-0.25 text-white lg:text-xs lg:font-semibold ${item.url === pathname ? "z-2 lg:text-n-1" : "lg:text-n-1/50"} lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </nav>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"} className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block">
          Get Started
        </Link>
        <Button className="hidden lg:flex" href={isSignedIn ? "/dashboard" : "/sign-in"}>
          Sign in
        </Button>
        <Button className="ml-auto lg:hidden" px="px-3" onClick={toggleNavigation}>
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default HeaderLanding;
