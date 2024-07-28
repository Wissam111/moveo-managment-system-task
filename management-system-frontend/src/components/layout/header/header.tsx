//@ts-nocheck
"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import Logo from "@/components/ui/logo";
import { Avatar } from "antd";
import Button from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { ROUTES } from "@/utils/routes";
import { useDispatch } from "react-redux";
import AuthActions from "@/actions/auth";
import eventEmitter from "@/events/eventEmitter";
import { useRouter } from "next/navigation";
const user = "WK";
const color = "lightblue";
const Header = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const authActions = AuthActions();
  const handleLogout = () => {
    dispatch(authActions.logout());
    router.push(ROUTES.HOME);
  };

  useEffect(() => {
    const handleUnauthorizedError = (text) => {
      handleLogout();
    };

    eventEmitter.on("unauthorizedError", handleUnauthorizedError);

    return () => {
      eventEmitter.removeListener("unauthorizedError", handleUnauthorizedError);
    };
  }, []);
  return (
    <header className="py-1 shadow-[0_1px_5px_-1px_rgba(0,0,0,0.3)]">
      <div className="px-12  flex items-center justify-center justify-between">
        <Logo size={50} />

        <div className="flex items-center gap-5">
          <Button
            className="rounded-full"
            icon={<FaGithub size={20} />}
            toolTip={"github"}
          />
          <Avatar
            style={{
              backgroundColor: color,
              verticalAlign: "middle",
            }}
            size="large"
            gap={1}
          >
            {user}
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default Header;
