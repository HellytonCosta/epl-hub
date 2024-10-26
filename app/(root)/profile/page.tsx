"use client";
import SignOutButton from "@/components/global/SignOut";
import { validateRequest } from "@/constants/actions/user.action";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";

// eslint-disable-next-line @next/next/no-async-client-component
const Page = () => {
  // const session = await validateRequest();
  const [session, setSession] = useState<any>();
  const { data } = useSession();

  useEffect(() => {
    const fetchSessionData = async () => {
      const session = await validateRequest();
      setSession(session);
    };

    fetchSessionData();
  }, [data]);

  if (!session && !data) {
    return redirect("/");
  }
  return (
    <section className="bg-black/50 min-h-screen content-center">
      <div className="mx-auto max-w-xl rounded-md bg-white p-4 text-black">
        <div className="flex gap-2">
          <div className="flex-none">
            <div className="rounded-full bg-gray-500 text-center content-center size-20">
              <p className="text-2xl">HC</p>
            </div>
          </div>
          <div className="flex-auto">
            <p>{session?.country}</p>
            <p>{session?.name}</p>
            <p>{session?.username}</p>
            <p>{session?.email}</p>
            <p>{session?.favNation}</p>
            <p>{session?.favTeam}</p>
          </div>
        </div>
        <SignOutButton />
      </div>
    </section>
  );
};

export default Page;
