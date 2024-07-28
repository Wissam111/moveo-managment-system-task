"use client";
import React from "react";
import Lottie from "lottie-react";
import Container from "@/components/containers/container";
import Button from "@/components/ui/button";
import { useRouter } from "next/navigation";
const NotAuthorized = () => {
  const router = useRouter();

  const handleReturnHome = () => {
    router.push("/");
  };
  return (
    <Container className="h-full">
      <div className="flex flex-col items-center justify-center h-full ">
        <div className="flex flex-col items-center gap-5">
          <h1 className="font-semibold text-3xl">401 UNAAUTHORIZED</h1>
          <p>Acess denied due to invalid credentials</p>
          <Button onClick={handleReturnHome} className="my-2">
            Return to home
          </Button>
        </div>
        <Lottie
          animationData={require("../../../public/assets/animations/unauth.json")}
          loop={true}
          className="w-92 h-92"
        />
      </div>
    </Container>
  );
};

export default NotAuthorized;
