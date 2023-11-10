"use client";

import React, { ReactComponentElement, ReactElement } from "react";
import Image from "next/image";
import companyLogo from "@/../public/company-logo.svg"; // Used SVG for high quality logo
import selectedPageSVG from "@/../public/SelectedPage.svg";
import {
  LuSettings,
  LuMail,
  LuHistory,
  LuFolder,
  LuLayout,
  LuLogOut,
  LuUsers,
} from "react-icons/lu";
import Link from "next/link";
import { motion } from "framer-motion";
type NavItem = {
  icon: ReactElement;
  name: String;
  href: String;
};

//   this variable has the style of the react icons to prevent duplicates
const iconsStyle = "h-7 w-7";

const navItems: NavItem[] = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: <LuLayout className={iconsStyle} />,
  },
  {
    name: "Users",
    href: "/dashboard/users",
    icon: <LuUsers className={iconsStyle} />,
  },
  {
    name: "Documents",
    href: "/dashboard/documents",
    icon: <LuFolder className={iconsStyle} />,
  },
  {
    name: "Inbox",
    href: "/dashboard/inbox",
    icon: <LuMail className={iconsStyle} />,
  },
  {
    name: "History",
    href: "/dashboard/history",
    icon: <LuHistory className={iconsStyle} />,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: <LuSettings className={iconsStyle} />,
  },
];

function SidebarNavItem({
  navItem,
  selected,
}: {
  navItem: NavItem;
  selected: String;
}) {
  return (
    <div>
      <Link href={`${navItem.href}`} className="flex flex-row gap-10 group">
        <motion.div>
          <Image
            src={selectedPageSVG}
            alt="Selected Page SVG"
            className={`opacity-${selected == navItem.name ? "100" : "0"}`}
          />
        </motion.div>
        <div
          className={`default-navitem flex flex-row items-center transition delay-[30] gap-4 bg- font-medium text-md hover:cursor-pointer bg-transparent group-hover:drop-shadow-xl text-${
            selected == navItem.name ? "white" : "[#98A2B1]"
          } group-hover:text-white`}>
          {navItem.icon}
          <p>{navItem.name.toUpperCase()}</p>
        </div>
      </Link>
    </div>
  );
}
export default function Sidebar() {
  const [selectedNav, setSelectedNav] = React.useState<String>("");
  return (
    <section className="dashboard-sidebar flex flex-col w-[15%] bg-[#172B4D] py-8 justify-between items-center h-screen">
      {/* logo section*/}
      <div
        id="logo"
        className="flex flex-row justify-center items-center gap-4 text-white">
        <Image height={45} src={companyLogo} alt={"Company L logo"} />
        <p className="text-xl font-semibold">Lingua</p>
      </div>

      {/* side navigation items section*/}
      <div
        id="sidebar-items"
        className="flex flex-col w-full text-[#98A2B1] justify-center gap-10">
        {navItems.map((navItem: NavItem, index, array) => (
          <div
            onClick={() => {
              setSelectedNav(navItem.name);
              console.log(selectedNav);
            }}>
            <SidebarNavItem selected={selectedNav} navItem={navItem} />
          </div>
        ))}
      </div>

      {/* log out button section*/}
      <div
        id="logout"
        className="flex flex-col w-full justify-center gap-10"
        onClick={() => {
          setSelectedNav("Log out");
          console.log(selectedNav);
        }}>
        <SidebarNavItem
          navItem={{
            icon: <LuLogOut className={iconsStyle} />,
            name: "Log out",
            href: "/#",
          }}
          selected={selectedNav}
        />
      </div>
    </section>
  );
}
