import React, { useState } from "react";
import { brainwave } from "../assets";
import { navigation } from "../constant";
import { useLocation } from "react-router-dom";
import Menu from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import Button from "./Button";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
export default function Header() {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
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
    <div
  className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-transparent lg:backdrop-blur-sm ${
    openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
  }`}
>
  <div className="flex items-center justify-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4 p-7">
    {/* Logo */}
    <a href="#hero" className="block w-[12rem] xl:mr-8">
      <img src={brainwave} alt="logo" width={120} height={120} />
    </a>

    {/* Hamburger Menu */}
    <Button
      onClick={toggleNavigation}
      className="ml-auto px-3 lg:hidden flex items-center justify-center"
    >
      <Menu openNavigation={openNavigation} />
    </Button>
  </div>
</div>

  );
}
