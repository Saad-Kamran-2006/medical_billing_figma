import { IconType } from "react-icons";
import { CgChevronRightO } from "react-icons/cg";
import { LuCodeXml, LuMonitorCog } from "react-icons/lu";
import { MdOutlineReceiptLong } from "react-icons/md";

export interface FeatureCard {
  icon: IconType;
  title: string;
  description: string;
  link: {
    title: string;
    icon: IconType;
  };
}

export const featuresCard: FeatureCard[] = [
  {
    icon: MdOutlineReceiptLong,
    title: "Medical Billing Service",
    description:
      "Professional patient billers deliver thorough medical billing services, overseeing check-in/check-out processes, claims, payments, and denial management for healthcare providers.",

    link: {
      icon: CgChevronRightO, //FiChevronRight,
      title: "Learn More",
    },
  },
  {
    icon: LuCodeXml,
    title: "Medical Coding Service",
    description:
      'Clinical coding specialists convert patient services into ICD-10 and CPT codes, creating a precise "super-bill" for the biller to submit to the insurance payer.',

    link: {
      icon: CgChevronRightO, //FiChevronRight,
      title: "Learn More",
    },
  },
  {
    icon: LuMonitorCog,
    title: "Revenue Cycle Management",
    description:
      "Revenue cycle management services are tailored to each specialty, ensuring that a dedicated medical biller meets the unique needs of each physician.",

    link: {
      icon: CgChevronRightO, //FiChevronRight,
      title: "Learn More",
    },
  },
];
