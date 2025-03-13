import React from "react";
import {
  WhyChooseUsData,
  whyChooseUsData,
  whyChooseUsHeaders,
} from "./utils/data";
import Image from "next/image";
import parse from "html-react-parser";

const MobileWhyChooseUs = () => {
  return (
    <div className="relative flex h-full w-full px-2 lg:hidden">
      <div className="hidden md:block basis-1/2 pl-3 pr-8 py-5 bg-red-30">
        <Image src={whyChooseUsHeaders.imgSrc} alt="Image" height={500} width={400} className="h-full w-full object-cover rounded-2xl" />
      </div>
      <div className="space-y-6 py-6 pr-3 md:basis-1/2 md:static md:space-y-3 bg-pink-30">
        <h1 className="bg-yellow-30 text-center text-xl text-clr-secondary font-bold md:text-lg md:text-start">
          {parse(whyChooseUsHeaders.title)}
        </h1>
        <div className="bg-gray-40">
          <ul className="bg-red-30 space-y-4 md:space-y-1">
            {whyChooseUsData.map((data: WhyChooseUsData) => (
              <li key={data.id} className="flex items-start gap-x-2">
                <span className="text-accent inline-block text-center min-w-8 bg-green-30 font-bold text-2xl">
                  0{data.id}
                </span>
                <div className="md:-space-y-1">
                  <h3 className="font-semibold text-clr-secondary">
                    {data.title}
                  </h3>
                  <p className="text-xs text-clr-secondary md:font-medium">
                    {data.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileWhyChooseUs;
