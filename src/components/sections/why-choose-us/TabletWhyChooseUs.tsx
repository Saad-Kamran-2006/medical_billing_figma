import React from "react";
import {
  WhyChooseUsData,
  whyChooseUsData,
  whyChooseUsHeaders,
} from "./utils/data";
import Image from "next/image";
import parse from "html-react-parser";

const TabletWhyChooseUs = () => {
  return (
    <div className="hidden relative h-full w-full lg:flex lg:px-8 xl:px-20">
      <div className="relative block basis-1/2 pl-4 pr-8 py-5 xl:pr-16 xl:pl-0 rounded-2xl">
        <Image
          src={whyChooseUsHeaders.imgSrc}
          alt="Image"
          height={900}
          width={900}
          className="h-full w-full object-cover object-right rounded-2xl scale-x-[-1]"
        />
        <span className="absolute lg:left-4 lg:right-8 top-5 xl:left-0 xl:right-16 bottom-5 bg-gradient-to-t from-primary/20 to-primary/0 rounded-2xl"></span>
      </div>
      <div className="py-6 pr-4 basis-1/2 space-y-6 xl:space-y-4 xl:pr-6 xl:pt-8">
        <h1 className="text-[1.75rem] text-clr-secondary font-bold text-start">
          {parse(whyChooseUsHeaders.title)}
        </h1>
        <div className="">
          <ul className="space-y-3">
            {whyChooseUsData.map((data: WhyChooseUsData) => (
              <li key={data.id} className="flex items-start gap-x-2">
                <span className="text-accent inline-block text-center min-w-10 font-bold text-3xl">
                  0{data.id}
                </span>
                <div className="xl:-space-y-1">
                  <h3 className="font-bold text-lg text-clr-secondary">
                    {data.title}
                  </h3>
                  <p className="text-sm text-clr-secondary font-medium">
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

export default TabletWhyChooseUs;
