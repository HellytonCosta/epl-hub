"use client";

import React from "react";
import { SignOut } from "@/constants/actions/user.action";

const SignOutButton = () => {
  const handleSignOut = async () => {
    await SignOut();

  };

  return (
    <button
      className="bg-premier p-2 text-white mx-auto my-2"
      onClick={handleSignOut}
    >
      Sign Out
    </button>
  );
};

export default SignOutButton;
