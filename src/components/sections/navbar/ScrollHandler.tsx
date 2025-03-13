"use client";

import { useEffect, useRef, useState } from "react";

export function ScrollHandler({ children }: { children: React.ReactNode }) {
  const [hidden, setHidden] = useState(false);
  // const [scrollPosition, setScrollPosition] = useState(0);
  const scrollPositionRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (
        currentScrollPos > scrollPositionRef.current &&
        currentScrollPos > 100
      ) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      scrollPositionRef.current = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      // bg-nav-primary/70  [#128DB1]
      className={`sticky top-2 z-[50] w-full mt-1 mb-16 px-2 lg:px-6 xl:px-16 rounded-md transition-transform duration-500  ${
        hidden ? "-translate-y-20" : "translate-y-0"
      }`}
      // className={`sticky top-0 z-[100] w-full bg-white/50 py-1 backdrop-blur-lg px-2 xl:px-20 transition-transform duration-500 sm:py-4 ${
      //   hidden ? "-translate-y-full" : "translate-y-0"
      // }`}
    >
      {children}
    </header>
  );
}
