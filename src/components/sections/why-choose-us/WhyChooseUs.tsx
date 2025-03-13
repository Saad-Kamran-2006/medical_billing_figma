import React from "react";
import TabletWhyChooseUs from "./TabletWhyChooseUs";
import MobileWhyChooseUs from "./MobileWhyChooseUs";

const WhyChooseUs = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full mt-8 md:mt-10 lg:mt-16 bg-white/90">
      <TabletWhyChooseUs />
      <MobileWhyChooseUs />
    </div>
  );
};

export default WhyChooseUs;
