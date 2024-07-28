// import Logo from "@/components/ui/logo";
// import { Route } from "@/types/routes";
// import { sideBarRoutes } from "@/utils/routes";

// import React from "react";
// import HelpCard from "./components/help-card";
// import SidebarLogut from "./components/side-bar-logout";

// const SideBar = () => {
//   return (
//     <div className="bg-white shadow-lg">
//       <div className="px-10 py-5 flex flex-col justify-between flex-1 h-full">
//         <div>
//           <div className="flex justify-center">
//             <Logo size={160} />
//           </div>
//           <ul className="flex flex-col gap-5 mt-5">
//             {sideBarRoutes?.map((route: Route) => (
//               <li className="px-5 text-gray-600  py-2 rounded-md flex items-center gap-3 font-semibold group/item hover:bg-slate-200 cursor-pointer">
//                 <route.Icon size={20} />
//                 {route.title}
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="flex flex-col items-center py-10 gap-5 ">
//           <HelpCard />
//           <SidebarLogut />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SideBar;
"use client";
import { useState } from "react";
import Link from "next/link";
import { HiOutlineViewBoards } from "react-icons/hi";
import cx from "classnames";
import { RiArrowDropLeftLine } from "react-icons/ri";

import { FaRegUser } from "react-icons/fa";
import { usePathname } from "next/navigation";
import HelpCard from "./components/help-card";
import SidebarLogut from "./components/side-bar-logout";
import { ROUTES } from "@/utils/routes";

export const Sidebar = (props: Props): JSX.Element => {
  const { companyName, companyImage, companyDescription } = props;
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside className="relative flex">
      <div
        className={cx(
          "flex h-full max-w-0 flex-col whitespace-nowrap bg-[#F7F8F9] opacity-0 duration-300 ease-out justify-between max-h-[950px]",
          isOpen && "w-[260px] max-w-[270px] px-5 whitespace-normal opacity-100"
        )}
      >
        <div>
          <section className="flex w-full items-start px-5 py-6">
            <img
              src={companyImage}
              width={28}
              height={28}
              alt="project"
              className="rounded-[3px]"
            />
            <div className="ml-4 w-full text-font">
              <p className="font-primary-bold text-lg leading-4">
                {companyName}
              </p>
              <p className="mt-2 line-clamp-2 whitespace-normal font-primary-light text-sm leading-4">
                {companyDescription}
              </p>
            </div>
          </section>
          <section className="flex-grow p-3">
            <nav className="flex-grow">
              {navItems.map(({ href, name, icon, disabled }) => (
                <NavItem
                  key={href}
                  href={href}
                  icon={icon}
                  name={name}
                  disabled={disabled}
                />
              ))}
            </nav>
          </section>
        </div>

        <div className="flex flex-col items-center py-10 gap-5">
          <HelpCard />
          <SidebarLogut />
        </div>
      </div>

      <div
        className={cx("r-0 relative z-10 h-full w-3", isOpen ? "ml-0" : "ml-7")}
      >
        <div className="absolute -left-[3px] h-full w-[3px] bg-gradient-to-l from-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,0.0)] opacity-50" />
        <button
          onClick={toggleSidebar}
          className={cx(
            "absolute -left-[12px] mt-6 flex h-[24px] w-[24px] cursor-pointer items-center justify-center rounded-full border-none bg-elevation-surface-raised text-icon shadow-[0_1px_5px_-1px_rgba(0,0,0,0.3)] transition-transform delay-150 duration-200 ease-in hover:bg-icon-brand hover:text-font-inverse",
            !isOpen && "rotate-180"
          )}
          aria-label="Toggle sidebar"
        >
          <RiArrowDropLeftLine size={24} />
        </button>
      </div>
    </aside>
  );
};

type Props = {
  companyName?: string;
  companyDescription?: string;
  companyImage?: string;
};

const navItems: NavItemProps[] = [
  {
    href: ROUTES.DASHBOARD,
    icon: <HiOutlineViewBoards size={24} />,
    name: "Dashboard",
  },
  {
    href: ROUTES.PROFILE,
    icon: <FaRegUser size={20} />,
    name: "Profile",
    disabled: true,
  },
];
const NavItem = ({ href, icon, name, disabled }: NavItemProps): JSX.Element => {
  const pathName = usePathname();
  const isActive = pathName.includes(href);
  return (
    <Link
      href={disabled ? "#" : href}
      className={cx(
        "group flex w-full cursor-pointer items-center gap-4 rounded border-none p-2 text-sm",
        isActive && !disabled ? "bg-primaryLight" : "",
        disabled ? "!cursor-not-allowed" : "hover:bg-slate-100"
      )}
    >
      {icon}
      <span className={cx(disabled && "group-hover:hidden")}>{name}</span>
      <span
        className={cx(
          "items-center bg-grey-300 -ml-2 hidden rounded px-2 py-1 text-2xs uppercase flex",
          disabled ? "group-hover:block" : "group-hover:hidden"
        )}
      >
        Not implemented
      </span>
    </Link>
  );
};

export interface NavItemProps {
  href: string;
  icon: JSX.Element;
  name: string;
  disabled?: boolean;
}
