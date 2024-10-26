"use client";
import Link from "next/link";
import React from "react";

const Avatar = () => {
  
const session = null;
  return (
    <div className="flex-none text-end max-lg:hidden">
      {!session && (
        <div className="flex gap-2">
          <Link href={"/signIn"}>Sign In</Link>
          <p className="mx-2">/</p>
          <Link href={"/signUp"}>Sign Up</Link>
        </div>
      )}
      {session && (
        <>
          {/* <Link href={"/profile"}>{session.username}</Link> */}
        </>
      )}
    </div>
  );
};

export default Avatar;
