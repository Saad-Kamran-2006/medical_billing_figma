import { featuresCard } from "@/constants/features";
import Link from "next/link";
import React from "react";

const FeatureSection = () => {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-3 bg-secondary p-4 xl:py-6 xl:px-10 mx-2 md:mx-6 lg:mx-12 xl:mx-20 mt-12 md:mt-[3.75rem] xl:-mt-4 rounded-lg gap-5 lg:gap-x-8 xl:gap-x-10 z-20">
      {featuresCard.map((card, i) => (
        <div
          key={i}
          className="flex flex-col items-center bg-white text-center p-5 xl:p-8 rounded-xl shadow-gray-300/70 shadow-lg border gap-y-4 hover:scale-105 duration-700"
        >
          <span className="bg-accent h-12 w-12 xl:h-14 xl:w-14 place-items-center place-content-center rounded-full ">
            {<card.icon color="white" size={28} />}
          </span>
          <h3 className="text-xl font-semibold">{card.title}</h3>
          <p className="text-sm md:text-xs xl:text-sm opacity-70 ">
            {card.description}
          </p>
          <Link
            href={"/"}
            className="flex items-center gap-x-1 text-xs opacity-70 hover:opacity-100 hover:cursor-pointer"
          >
            <span className="underline underline-offset-2">
              {card.link.title}
            </span>
            <span>{<card.link.icon />}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default FeatureSection;
