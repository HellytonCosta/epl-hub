"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { validateSession } from "@/constants/actions/user.action";
import { useSession } from "next-auth/react";

// eslint-disable-next-line @next/next/no-async-client-component
const Header = () => {
  const { data } = useSession();
  const sessionAuth = data;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [session, setSession] = useState<any>();

  useEffect(() => {
    const fetchSessionData = async () => {
      const session = await validateSession();

      setSession(session);
    };

    fetchSessionData();
  }, []);

  // console.log("-->" + sessionAuth?.user?.email);

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
          {!session && !sessionAuth && (
            <div className="flex gap-2">
              <Link href={"/signIn"}>Sign In</Link>
              <p className="mx-2">/</p>
              <Link href={"/signUp"}>Sign Up</Link>
            </div>
          )}
          {(session || sessionAuth) && (
            <>
              <Link href={"/profile"}>{session?.username}</Link>
              <Link href={"/profile"}>{sessionAuth?.user?.name}</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
