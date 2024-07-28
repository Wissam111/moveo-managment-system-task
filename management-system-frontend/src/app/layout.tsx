import { StoreProvider } from "@/context/StoreProvider";
import { ToastContainer } from "react-toastify";
import type { Metadata } from "next";
import "react-toastify/dist/ReactToastify.css";
// import ManagedModal from "@/components/modal/managed-modal";
import React, { ReactNode } from "react";
import "../styles/globals.css";
// import Footer from "@/components/layout/footer/footer";
import Header from "@/components/layout/header/header";
export const metadata: Metadata = {
  title: "Moveo Managment",
  description: "Moveo Managment Task",
};
const dir = "ltr";

type RootProps = {
  children: React.ReactNode;
};

const RootLayout: React.FC<RootProps> = ({ children }) => {
  return (
    <html dir={dir}>
      <body className="h-full">
        <StoreProvider>
          <Header />
          {children}
          <ToastContainer />
        </StoreProvider>
      </body>
    </html>
  );
};
export default RootLayout;
