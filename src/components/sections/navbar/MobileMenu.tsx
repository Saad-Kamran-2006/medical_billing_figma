"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navItems } from "@/constants/nav";
import { DialogTitle } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Image from "next/image";
import Link from "next/link";
// import { useEffect, useState } from "react";
// import { FaHome, FaSignInAlt } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import logo from "../../../../public/assets/logo.jpg";
// "C:\Users\Saadi\Desktop\project\medical_billing_portfolio\public\assets\KayB-MD.png";
// import { RiRobot2Line } from "react-icons/ri";

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          aria-label="Open Menu"
          variant="custom"
          size="icon"
          className="lg:hidden"
        >
          <FiMenu size={28} className="text-clr-secondary" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        // bg-[#EBECEF]/90
        className="max-w-52 md:max-w-56 border-0 bg-[#E6F6FE] z-[110] backdrop-blur-lg lg:hidden"
      >
        <SheetHeader>
          <VisuallyHidden>
            <DialogTitle>Mobile Menu</DialogTitle>
            <SheetDescription>Menu Sheet for mobile devices</SheetDescription>
          </VisuallyHidden>
        </SheetHeader>
        <nav className="flex h-full flex-col items-center justify-between pr-5 py-8 z-[110]">
          <div className="flex flex-col gap-y-4">
            <Link href="/" aria-label="Home">
              <Image
                src={logo}
                alt="KayB-MD Logo"
                className="mb-3"
                width={100}
                height={100}
                priority
              />
            </Link>
            {navItems.map((nav) => (
              <SheetClose asChild key={nav.name}>
                <Link
                  href={nav.link}
                  aria-label={`${nav.name}`}
                  className="text-md flex items-center gap-3 font-semibold text-clr-secondary hover:text-clr-primary"
                >
                  {<nav.icon />}
                  {nav.name}
                </Link>
              </SheetClose>
            ))}
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
