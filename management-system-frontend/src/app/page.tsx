"use client";
import Container from "@/components/containers/container";
import React, { useState } from "react";
import Lottie from "lottie-react";
import { appSettings } from "@/utils/app-settings";
import Button from "@/components/ui/button";
import SigninModal from "@/components/auth/signin-modal";

const Home = () => {
  const [showSignin, setShowSignin] = useState(false);
  return (
    <Container className="h-full">
      <div className="flex flex-col items-center justify-center h-full reveal">
        <div className="flex flex-col items-center gap-5">
          <h1 className="font-semibold text-3xl text-gray-600">
            <span className="text-primary">{appSettings.author.name}</span>
            {` project made by ${appSettings.developer.name} `}
          </h1>
          <Button onClick={() => setShowSignin(true)}>For Login</Button>
        </div>
        <Lottie
          animationData={require("../../public/assets/animations/tasks.json")}
          loop={true}
          className="w-92 h-92"
        />
      </div>
      <SigninModal
        open={showSignin}
        closeModal={() => setShowSignin(false)}
        showModal={() => setShowSignin(true)}
      />
    </Container>
  );
};

export default Home;
