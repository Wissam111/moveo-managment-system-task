"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Breadcrumb as AntdBreadcrumb } from "antd";
import Link from "next/link";
import { GoChevronLeft } from "react-icons/go";

interface BreadcrumbProps {
  homeElement?: string;
  separator?: React.ReactNode;
  containerClasses?: string;
  listClasses?: string;
  activeClasses?: string;
  capitalizeLinks?: boolean;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  homeElement = "home",
  separator = <GoChevronLeft className="text-gray-light1 mt-4" size={20} />,
  containerClasses = "flex px-5 from-purple-600 to-blue-600 gap-1",
  listClasses = "hover:underline font-light text-gray-light1",
  activeClasses = "underline font-semibold",
  capitalizeLinks,
}) => {
  const paths = usePathname();
  const pathNames = paths?.split("/").filter((path) => path) || [];

  const breadcrumbItems = pathNames.map((link, index) => {
    const isUUID =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
        link
      );

    if (isUUID) return null;

    const href = `/${pathNames.slice(0, index + 1).join("/")}`;
    const isActive = paths === href;
    const itemClasses = isActive
      ? `${listClasses} ${activeClasses}`
      : listClasses;
    const itemLink = capitalizeLinks
      ? link[0].toUpperCase() + link.slice(1)
      : link;

    return (
      <AntdBreadcrumb.Item key={index} className={itemClasses}>
        <Link href={href}>{itemLink}</Link>
      </AntdBreadcrumb.Item>
    );
  });

  return (
    <AntdBreadcrumb separator={separator} className={containerClasses}>
      <AntdBreadcrumb.Item>
        <Link href="/">{homeElement}</Link>
      </AntdBreadcrumb.Item>
      {breadcrumbItems}
    </AntdBreadcrumb>
  );
};

export default Breadcrumb;
