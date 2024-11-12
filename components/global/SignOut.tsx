"use client";

import React, { useEffect, useState } from "react";
import { SignOut } from "@/constants/actions/user.action";
import { useSession, signOut } from "next-auth/react";

const SignOutButton = () => {
  const [flagOnce, setFlagOnce] = useState<boolean>(false);

  const { data } = useSession();
  // IMPLEMENT AN USEFFECT HERE...
  useEffect(() => {

    
  }, [])
  const handleSignOut = async () => {
    const testing = await SignOut();
    console.log(testing);
    if (data) {
      try {
        if (flagOnce === false) {
          signOut();
          setFlagOnce(true);
        }
      } catch (error) {
        console.error(error);
      }
    }
    
  };

  return (
    <button
      className="bg-premier p-2 text-white mr-0 my-2"
      onClick={handleSignOut}
    >
      Sign Out
    </button>
  );
};

export default SignOutButton;
