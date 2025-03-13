import React from "react";
import { Button } from "../../ui/button";
import Image from "next/image";
import circle1 from "../../../../public/assets/circle1.png";
import circle2 from "../../../../public/assets/circle2.png";
import doctor from "../../../../public/assets/male_doctor.png";
import icons from "../../../../public/assets/icons.png";
import underline from "../../../../public/assets/highlight_underline.png";
import { FaFileInvoiceDollar, FaLaptopCode } from "react-icons/fa";
import { BiSolidInjection, BiSupport } from "react-icons/bi";
import {
  MdOutlineHealthAndSafety,
  MdPhoneInTalk,
  MdReceiptLong,
} from "react-icons/md";
import { FiMonitor } from "react-icons/fi";
import { RiSecurePaymentLine } from "react-icons/ri";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const HeroSection = () => {
  return (
    <div className="flex px-2 md:px-6 lg:px-12 xl:px-20 mt-12 gap-x-8">
      <div className="flex flex-col lg:basis-7/12 pt-10 text-center lg:text-start gap-y-6">
        <h3 className="text-2xl md:text-5xl xl:text-[3.5rem] font-black heading-leading">
          Hassle-Free Medical Billing Solutions for Providers in{" "}
          <span
          // className="font-poppins text-image"
          >
            USA
          </span>
        </h3>
        <div className="space-y-2">
          <p className="text-sm opacity-90 px-6 md:px-16 lg:px-0 lg:pr-10">
            KayB MD is a well recognized leader in medical billing, providing
            expert billing and coding services for physicians seeking to
            outsource to a reliable third-party agency.
          </p>
          <p className="text-sm opacity-90 px-6 md:px-16 lg:px-0 lg:pr-10">
            Our expert coders and billers help healthcare organizations recover
            aged receivables and resolve insurance claim denials efficiently.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center md:justify-center lg:justify-start gap-y-4 md:gap-x-4">
          <Button href="/" className="py-3 px-8 md:px-6 md:py-4 ">
            Book a Free Consultation
          </Button>
          {/* <span className="flex h-full rounded-md">
            <Button href="/" className="h-full w-10 md:w-[3.25rem] p-0">
              <MdPhoneInTalk size={40} className="min-w-5 min-h-5" />
            </Button>
            <div className="flex flex-col justify-center px-2">
              <span className="text-primary font-semibold text-sm">
                Dental 24H Emergency
              </span>
              <span className="text-sm">0900-78601</span>
            </div>
          </span> */}
        </div>
      </div>
      <div className="hidden lg:block relative p-6 xl:p-10">
        <Image src={circle2} alt="Circle" width={500} height={500} />
        <Image
          src={circle1}
          alt="Circle"
          width={700}
          height={700}
          className="absolute top-0 left-0"
        />
        <Image
          src={doctor}
          alt="Doctor"
          width={800}
          height={900}
          className="absolute -top-24 left-12 max-w-[26rem] bg-red-30/40 z-70"
        />
        {/* <Image
          src={doctor}
          alt="Doctor"
          width={800}
          height={900}
          className="absolute -top-4 -left-24 min-w-[34rem] bg-red-00 z-20"
        /> */}
        <div>
          {/* <FaLaptopCode size={36} />
          <BiSolidInjection size={36} />
          <MdReceiptLong size={36} /> */}

          {/* Icon 1 */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="absolute top-4 right-20 xl:top-5 xl:right-24">
                <div className="flex justify-center items-center bg-accent rounded-full text-white h-10 w-10 p-1 shadow-lg shadow-accent/60 z-10">
                  <FiMonitor size={22} />
                </div>
              </TooltipTrigger>
              <TooltipContent className="bg-accent">
                <span>Digital Monitoring</span>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* Icon 2 */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="absolute top-28 left-16 xl:top-30 xl:left-20">
                <div className="flex justify-center items-center bg-accent rounded-full text-white h-10 w-10 p-1 shadow-lg shadow-accent/60 z-10">
                  <FaFileInvoiceDollar size={20} />
                </div>
              </TooltipTrigger>
              <TooltipContent className="bg-accent">
                <span>Scemeless Billing</span>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* Icon 3 */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="absolute top-32 right-10 xl:top-[9.5rem] xl:right-14 ">
                <div className="flex justify-center items-center bg-accent rounded-full text-white h-9 w-9 p-1 shadow-lg shadow-accent/60 z-10">
                  <MdOutlineHealthAndSafety size={22} />
                </div>
              </TooltipTrigger>
              <TooltipContent className="bg-accent">
                <span>Comprehensive Healthcare</span>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* Icon 4 */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="absolute bottom-44 left-4 xl:bottom-52 xl:left-4">
                <div className="flex justify-center items-center bg-accent rounded-full text-white h-10 w-10 p-1 shadow-lg shadow-accent/60 z-10">
                  <RiSecurePaymentLine size={22} />
                </div>
              </TooltipTrigger>
              <TooltipContent className="bg-accent">
                <span>Privacy Protection</span>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* Icon 5 */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="absolute bottom-32 right-2 xl:bottom-40 xl:right-4">
                <div className="flex justify-center items-center bg-accent rounded-full text-white h-10 w-10 p-1 shadow-lg shadow-accent/60 z-10 transition-transform ">
                  <BiSupport size={22} />
                </div>
              </TooltipTrigger>
              <TooltipContent className="bg-accent">
                <span>24/7 Support</span>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          {/* <Image
            src={icons}
            alt="Icons"
            width={600}
            height={600}
            className="absolute top-0 left-0 z-10 "
          /> */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
