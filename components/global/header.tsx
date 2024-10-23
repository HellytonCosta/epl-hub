import Image from "next/image";
import Link from "next/link";
import React from "react";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

// eslint-disable-next-line @next/next/no-async-client-component
const Header = async () => {
  const session = await getServerSession(options);

  return (
    <header className="min-h-10 font-lato bg-premier px-10 py-4">
      <div className="flex justify-center gap-1 items-center max-w-[1400px] mx-auto">
        <Link href={"/"} className="flex-none">
          <div className="flex max-lg:justify-center gap-4 items-center">
            <Image alt="" src={"/logos/trophy-1.svg"} width={30} height={30} />
            <h1 className="text-xl flex-none max-lg:flex-none font-montserrat">
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
              <Link href={"/profile"}></Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
