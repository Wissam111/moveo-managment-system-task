"use client";

import AuthActions from "@/actions/auth";
import Button from "@/components/ui/button";
import React from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/utils/routes";

const SidebarLogut = () => {
  const router = useRouter();

  const authActions = AuthActions();
  const dispatch = useDispatch();
  const handleLogout = () => {
    //@ts-ignore
    dispatch(authActions.logout());
    router.push(ROUTES.HOME);
  };

  return (
    <div className="w-full">
      <Button onClick={handleLogout} className="w-full roundex-xl">
        <span>Logout</span>
      </Button>
    </div>
  );
};

export default SidebarLogut;
