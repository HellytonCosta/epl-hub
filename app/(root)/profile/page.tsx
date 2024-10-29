"use client";
import SignOutButton from "@/components/global/SignOut";
import { validateSession } from "@/constants/actions/user.action";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

// eslint-disable-next-line @next/next/no-async-client-component
const Page = () => {
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [userSession, setUserSession] = useState<any>();
  const { data } = useSession();

  useEffect(() => {
    const fetchSessionData = async () => {
      const session = await validateSession(data?.user);
      console.log(data)
      setUserSession(session);

    };

    fetchSessionData();
  }, []);

  return (
    <section className="bg-black/50 min-h-screen content-center">
      <div className="mx-auto max-w-xl rounded-md bg-white p-4 text-black">
        <div className="flex gap-2">
          <div className="flex-none">
            <div
              className="rounded-full bg-center bg-contain text-center content-center size-20"
              style={{
                backgroundImage: `url('${data?.user?.image}')`,
              }}
            >
              {/* <p className="text-2xl">HC</p> */}
            </div>
          </div>
          <div className="flex-auto">
            <p>{userSession?.country}</p>
            <p>{userSession?.name}</p>
            <p>{userSession?.username}</p>
            <p>{userSession?.email}</p>
            <p>{userSession?.favNation}</p>
            <p>{userSession?.favTeam}</p>
          </div>
        </div>
        <SignOutButton />
      </div>
    </section>
  );
};

export default Page;
