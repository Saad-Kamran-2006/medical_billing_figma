// "use client";
// import { Slider } from "@/components/ui/slider";
// import React, { useRef, useState } from "react";

// const InstantQuote = () => {
//   const [value, setValue] = useState(33);
//   const sliderRef = useRef<HTMLDivElement>(null); // Reference to the slider container

//   const getTooltipPosition = () => {
//     if (!sliderRef.current) return `${value}%`; // Default center if ref is not available

//     const sliderWidth = sliderRef.current.offsetWidth; // Get the actual slider width
//     const thumbWidth = 16; // Approximate width of the slider thumb
//     const tooltipWidth = 80; // Approximate width of the tooltip (adjust if needed)

//     // Convert slider value (0-100) into pixel position
//     let position = (value / 100) * sliderWidth;

//     // Adjust position to center tooltip over the thumb
//     position -= tooltipWidth / 2 - thumbWidth / 2;

//     // Ensure tooltip stays within slider boundaries
//     const minPosition = 0;
//     const maxPosition = sliderWidth - tooltipWidth;
//     position = Math.max(minPosition, Math.min(maxPosition, position));

//     return `${position}px`;
//   };

//   return (
//     <div className="px-2 md:px-6 lg:px-12 xl:px-20 mt-8 md:mt-10 lg:mt-16 bg-white/90">
//       {/* <h2>
//         Get Instant <span className="text-primary">FREE</span> Pricing Quote
//       </h2>
//       <div>
//         <Slider defaultValue={[33]} max={70} step={1} />
//       </div> */}
//       <div className="px-2 md:px-6 lg:px-12 xl:px-20 mt-8 md:mt-10 lg:mt-16 bg-white/90">
//         <div className="relative flex flex-col items-center w-full">
//           {/* Tooltip - Moves with Slider */}
//           <div
//             className="absolute -top-12 px-3 py-1 bg-white border border-gray-300 rounded-md shadow-lg text-center transition-all duration-200"
//             style={{
//               left: getTooltipPosition(),
//               transform: "translateX(-35%)", // Ensures proper centering
//             }}
//           >
//             <p className="text-xs text-gray-500">Up to</p>
//             <p className="text-lg font-bold text-black">${value}k</p>
//             <p className="text-xs text-gray-500">Collections</p>
//           </div>

//           {/* Heading */}
//           <h2 className="mt-10 text-lg font-semibold">
//             Get Instant <span className="text-primary">FREE</span> Pricing Quote
//           </h2>

//           {/* Slider */}
//           <div ref={sliderRef} className="w-full mt-6 relative">
//             <Slider
//               defaultValue={[value]}
//               max={100}
//               step={1}
//               onValueChange={(val) => setValue(val[0])}
//             />
//           </div>
//         </div>
//       </div>
//       <div className="h-screen w-full"></div>
//     </div>
//   );
// };

// export default InstantQuote;

// // <div className="relative flex flex-col items-center w-full">
// //   {/* Tooltip - Moves with Slider and stays within bounds */}
// //   <div
// //     className="absolute -top-12 px-3 py-1 bg-white border border-gray-300 rounded-md shadow-lg text-center transition-all duration-200"
// //     style={{ transform: "translateX(0%)", left: getTooltipPosition() }}
// //   >
// //     <p className="text-xs text-gray-500">Up to</p>
// //     <p className="text-lg font-bold text-black">${value}k</p>
// //     <p className="text-xs text-gray-500">Collections</p>
// //   </div>

// //   {/* Heading */}
// //   <h2 className="mt-10 text-lg font-semibold">
// //     Get Instant <span className="text-primary">FREE</span> Pricing Quote
// //   </h2>

// //   {/* Slider */}
// //   <div className="w-full mt-6 relative">
// //     <Slider
// //       defaultValue={[value]}
// //       max={100}
// //       step={1}
// //       onValueChange={(val) => setValue(val[0])}
// //     />
// //   </div>
// // </div>;

"use client";

import { Slider } from "@/components/ui/slider";
import React, { useRef, useState, useEffect } from "react";

const InstantQuote = () => {
  const [value, setValue] = useState(33);
  const sliderRef = useRef<HTMLDivElement>(null); 
  const [sliderWidth, setSliderWidth] = useState(0); 
  const [tooltipPosition, setTooltipPosition] = useState("0px"); 

  useEffect(() => {
    const updateWidth = () => {
      if (sliderRef.current) {
        setSliderWidth(sliderRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const updateTooltipPosition = (val: number) => {
    const thumbWidth = 16; 
    const tooltipWidth = 80; 

    let position = (val / 100) * (sliderWidth - thumbWidth);

    position -= (tooltipWidth - thumbWidth) / 2;

    const minPosition = 0;
    const maxPosition = sliderWidth - tooltipWidth; 
    position = Math.min(maxPosition, Math.max(minPosition, position));

    setTooltipPosition(`${position}px`);
  };




  useEffect(() => {
    setTimeout(() => {
      updateTooltipPosition(value); 
    }, 10);
  }, [sliderWidth]);

  return (
    <div className="px-2 md:px-6 lg:px-12 xl:px-20 mt-8 md:mt-10 lg:mt-16 bg-white/90">
      <div className="relative flex flex-col items-start w-full gap-y-5">
        {/* Heading */}
        <h2 className="mt-10 text-xl md:text-2xl font-bold mb-28 md:mb-32">
          Get Instant <span className="text-primary">FREE</span> Pricing Quote
        </h2>

        {/* Slider */}
        <div ref={sliderRef} className="w-full mt-6 relative">
          {/* Tooltip - Moves with Slider */}
          <div
            className="absolute bottom-12 px-3 py-1 bg-white border-2 border-primary rounded-md shadow-lg text-center transition-all duration-75"
            style={{ left: tooltipPosition }}
          >
            <p className="text-xs text-gray-500">Up to</p>
            <p className="text-2xl font-bold text-black">${value}k</p>
            <p className="text-xs text-gray-500">Collections</p>

            {/* Tooltip arrow */}
            <div className="absolute left-1/2 -bottom-3 -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-transparent border-t-primary"></div>
          </div>
          <Slider
            defaultValue={[value]}
            max={100}
            step={1}
            onValueChange={(val) => {
              setValue(val[0]);
              updateTooltipPosition(val[0]);
            }}
          />
        </div>
        <div className="w-full px-2">
          <ul className="flex justify-between text-xs md:text-sm opacity-90">
            <li>$50k</li>
            <li>$100k</li>
            <li>$5 Million</li>
            <li>$10 Million</li>
          </ul>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default InstantQuote;
