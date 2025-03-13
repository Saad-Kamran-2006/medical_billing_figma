// "use client";

// import * as React from "react";
// import * as SliderPrimitive from "@radix-ui/react-slider";

// import { cn } from "@/lib/utils";
// import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

// function Slider({
//   className,
//   defaultValue,
//   value,
//   min = 0,
//   max = 100,
//   ...props
// }: React.ComponentProps<typeof SliderPrimitive.Root>) {
//   const _values = React.useMemo(
//     () =>
//       Array.isArray(value)
//         ? value
//         : Array.isArray(defaultValue)
//         ? defaultValue
//         : [min, max],
//     [value, defaultValue, min, max]
//   );

//   return (
//     <SliderPrimitive.Root
//       data-slot="slider"
//       defaultValue={defaultValue}
//       value={value}
//       min={min}
//       max={max}
//       className={cn(
//         "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-90 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
//         className
//       )}
//       {...props}
//     >
//       <SliderPrimitive.Track
//         data-slot="slider-track"
//         className={cn(
//           "bg-primary relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-2 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
//         )}
//       >
//         <SliderPrimitive.Range
//           data-slot="slider-range"
//           className={cn(
//             "bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
//           )}
//         />
//       </SliderPrimitive.Track>
//       {Array.from({ length: _values.length }, (_, index) => (
//         <SliderPrimitive.Thumb
//           data-slot="slider-thumb"
//           key={index}
//           className="relative flex justify-center items-center border-primary bg-primary size-7 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4 hover:cursor-pointer disabled:pointer-events-none disabled:opacity-50 focus:outline-none text-white"
//         >
//           <IoMdArrowDropleft size={14} className="absolute -left-1 h-6 w-6" />
//           <IoMdArrowDropright size={14} className="absolute -right-1 h-6 w-6" />
//         </SliderPrimitive.Thumb>
//       ))}
//     </SliderPrimitive.Root>
//   );
// }

// export { Slider };


// ====================================


import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

const Slider = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof SliderPrimitive.Root>
>(({ className, defaultValue, value, min = 0, max = 100, ...props }, ref) => {
  const _values = React.useMemo(
    () =>
      Array.isArray(value)
        ? value
        : Array.isArray(defaultValue)
        ? defaultValue
        : [min, max],
    [value, defaultValue, min, max]
  );

  return (
    <SliderPrimitive.Root
      ref={ref} // Attach ref here to get width in parent
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn(
        "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-90 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className={cn(
          "bg-primary relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-2 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
        )}
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          className={cn(
            "bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
          )}
        />
      </SliderPrimitive.Track>
      {Array.from({ length: _values.length }, (_, index) => (
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          key={index}
          className="relative flex justify-center items-center border-primary bg-primary size-7 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4 hover:cursor-pointer disabled:pointer-events-none disabled:opacity-50 focus:outline-none text-white"
        >
          <IoMdArrowDropleft size={14} className="absolute -left-1 h-6 w-6" />
          <IoMdArrowDropright size={14} className="absolute -right-1 h-6 w-6" />
        </SliderPrimitive.Thumb>
      ))}
    </SliderPrimitive.Root>
  );
});

Slider.displayName = "Slider"; // Necessary for forwardRef components

export { Slider };
