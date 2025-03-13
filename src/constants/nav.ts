import { FaHome, FaStethoscope, FaUserTie } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { MdEmail } from "react-icons/md";

export type NavItem = {
  name: string;
  link: string;
  icon: IconType;
};

export const navItems: NavItem[] = [
  { name: "Home", link: "/", icon: FaHome },
  { name: "Services", link: "/services", icon: FaStethoscope },
  { name: "About", link: "/about", icon: FaUserTie },

  // { name: "Services", link: "/services", icon: FaBriefcaseMedical },
  // { name: "Services", link: "/services", icon: FaNotesMedical },
  // { name: "Services", link: "/services", icon: FaHospitalUser },

  { name: "Contact Us", link: "/contact", icon: MdEmail },
];
