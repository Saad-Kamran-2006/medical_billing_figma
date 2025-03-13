"use client";
import { navItems } from "@/constants/nav";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinks = () => {
  const pathname = usePathname();
  return (
    <div className="hidden lg:flex gap-x-6">
      {navItems.map((nav, i) => (
        <Link
          key={i}
          href={nav.link}
          className={`relative group hover:font-semibold ${
            pathname === nav.link ? "font-semibold" : ""
          }`}
        >
          {nav.name}
          {/* <span className="absolute left-0 bottom-[3px] bg-black h-[1px] w-0 group-hover:w-full transition-[width] duration-300"></span> */}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
