import { Sidebar } from "@/components/layout/header/side-bar/side-bar";
import { appSettings } from "@/utils/app-settings";
import React from "react";
type Props = {
  children: React.ReactNode;
};
const DashboardLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="relative flex h-full flex-grow">
      <Sidebar
        companyName={appSettings.author.name}
        companyImage={appSettings.logo.url}
      />
      {children}
    </div>
  );
};

export default DashboardLayout;
