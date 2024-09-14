"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import React from "react";

function Dashboard() {
  const { user } = useUser();
  return (
    <div className="p-5">
      <h2 className="font-bold text-3xl">Hi, {user?.fullName} 👋</h2>
    </div>
  );
}

export default Dashboard;
