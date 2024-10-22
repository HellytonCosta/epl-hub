"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="min-h-10 font-lato bg-premier px-10 py-4">
      <div className="flex justify-center gap-1 items-center max-w-[1400px] mx-auto">
        <Link href={"/"} className="flex-auto">
          <div className="flex max-lg:justify-center gap-4 items-center">
            <Image alt="" src={"/logos/trophy-1.svg"} width={30} height={30} />
            <h1 className="text-xl flex-auto max-lg:flex-none font-montserrat">
              EPL Hub
            </h1>
          </div>
        </Link>
        <div className="flex-auto max-lg:hidden">
          <ul className="flex justify-center text-xl gap-10">
            <Link href={"/standings"}>
              <li>Standings</li>
            </Link>
            <Link href={"/matches"}>
              <li>Matches</li>
            </Link>
            <Link href={"/scorers"}>
              <li>Top Scorers</li>
            </Link>
          </ul>
        </div>
        <div className="flex-auto text-end max-lg:hidden">
          <Link href={"/signIn"}>Sign In</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
