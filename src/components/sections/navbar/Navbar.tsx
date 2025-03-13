import Image from "next/image";
import React from "react";
import NavLinks from "./NavLinks";
import { Button } from "../../ui/button";
import { ScrollHandler } from "./ScrollHandler";
import Link from "next/link";
import { MobileMenu } from "./MobileMenu";
import logo from "../../../../public/assets/logo.jpg";

const Navbar = () => {
  return (
    <ScrollHandler>
      <div className="flex justify-between items-center bg-secondary px-4 py-1 rounded-md shadow-gray-300/60 shadow-lg">
        <Link href="/" className="flex items-center gap-2" aria-label="Home">
          <Image
            src={"/assets/logo.jpg"}
            alt="Logo"
            height={60}
            width={50}
            className="text-xl font-semibold place-content-center"
          />
        </Link>
        <NavLinks />
        <div className="flex items-center gap-4">
          {/* CTA Button */}
          <div className="hidden lg:flex">
            {/* <AuthButton /> */}
            <Button href={"/"}>Get Quote</Button>
          </div>

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </div>
    </ScrollHandler>
  );
};

export default Navbar;
