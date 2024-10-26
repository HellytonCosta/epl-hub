"use client";

import React from "react";
import { SignOut } from "@/constants/actions/user.action";
import { useSession, signOut } from "next-auth/react";

const SignOutButton = () => {
  const { data } = useSession();

  const handleSignOut = async () => {
    await SignOut();
    if (data) {
      signOut();
    }
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
