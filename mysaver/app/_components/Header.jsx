import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import Hero from "./Hero";

function Header() {
  return (
    <div className="p-5 flex justify-between items-center border shadow-sm">
      <Image src={"/logo.png"} alt="logo" width={200} height={200} />
      <Button>Get Started</Button>
    </div>
  );
}

export default Header;
