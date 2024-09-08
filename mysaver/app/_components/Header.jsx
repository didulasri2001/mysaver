"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import Hero from "./Hero";

import { useUser, UserButton } from "@clerk/nextjs";
import Link from "next/link";

function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className="p-5 flex justify-between items-center border shadow-sm">
      <Image src={"/logo.png"} alt="logo" width={200} height={200} />
      {isSignedIn ? (
        <UserButton />
      ) : (
        <Link href={"/sign-in"}>
          <Button>Sign In</Button>
        </Link>
      )}
    </div>
  );
}

export default Header;
