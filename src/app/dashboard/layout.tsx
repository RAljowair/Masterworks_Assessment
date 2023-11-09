import React, { ReactComponentElement, ReactElement } from "react";
import Image from "next/image";
import companyLogo from "@/../public/company-logo.svg"; // Used SVG for high quality logo
import { IconType } from "react-icons";
import {
  LuSettings,
  LuMail,
  LuActivity,
  LuHistory,
  LuFolder,
  LuLayout,
  LuLogOut,
} from "react-icons/lu";
import Link from "next/link";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";

type NavItem = {
  icon: ReactElement;
  name: String;
  href: String;
};

const iconsStyle = "h-7 w-7";

const navitemsVariants = {clicked:"text-white font-bold"}

const navItems: NavItem[] = [
  { name: "Dashboard", href: "", icon: <LuLayout className={iconsStyle} /> },
  { name: "Analysis", href: "", icon: <LuActivity className={iconsStyle} /> },
  { name: "Documents", href: "", icon: <LuFolder className={iconsStyle} /> },
  { name: "Inbox", href: "", icon: <LuMail className={iconsStyle} /> },
  { name: "History", href: "", icon: <LuHistory className={iconsStyle} /> },
  { name: "Settings", href: "", icon: <LuSettings className={iconsStyle} /> },
];


function SidebarNavItem(props: NavItem) {
  return (
    <>
      <Link href={`#${props.href}`} >
        <div className="default-navitem flex flex-row items-center gap-4 font-medium text-md hover:cursor-pointer bg-transparent hover:drop-shadow-xl text-[#98A2B1] hover:text-white active:text-white">
          {props.icon}
          <p>{props.name.toUpperCase()}</p>
        </div>
      </Link>
    </>
  );
}

// making layout as a sidebar to route inside it's contnet
export default function Dashbaord({ children }: { children: React.ReactNode }) {
  return (
    <section className="dashboard-page flex flex-row-2">
      <section className="dashboard-sidebar flex flex-col w-[15%] bg-[#172B4D] px-4 py-8 justify-between items-center h-screen">
        {/* logo section*/}
        <div
          id="logo"
          className="flex flex-row justify-center items-center gap-4 text-white">
          <Image height={45} src={companyLogo} alt={"Company L logo"} />
          <p>Lingua</p>
        </div>

        {/* side navigation items section*/}
        <div id="sidebar-items" className="flex flex-col gap-10">
          {navItems.map((item: NavItem) => (
            <SidebarNavItem
              icon={item.icon}
              name={item.name}
              href={item.href}
            />
          ))}
        </div>

        {/* log out button section*/}
        <div id="logout" className="flex self-center">
          <SidebarNavItem
            icon={<LuLogOut className={iconsStyle} />}
            name={"Log out"}
            href={""}
          />
        </div>
      </section>

      {/* main page content section */}
      <main className="dashboard-content w-full h-screen">{children}</main>
    </section>
  );
}
