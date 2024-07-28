"use client";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import Button from "@/components/ui/button";
const HelpCard = () => {
  return (
    <div className="p-5 shadow-sm rounded-xl flex flex-col gap-2">
      <div className="">
        <AiFillStar className="text-secondary" size={25} />
      </div>
      <span className="font-bold">Need help?</span>
      <p>Please check our website</p>
      <Button
        variant="outlined"
        onClick={() => {
          window.location.href = "https://www.moveo.group/";
        }}
      >
        <span>Moveo Website</span>
      </Button>
    </div>
  );
};

export default HelpCard;
