import { GitCommit, Mail } from "lucide-react";
import React from "react";



// eslint-disable-next-line @next/next/no-async-client-component
const Page = async () => {
  //   const users = await prisma.user.findMany();

  return (
    <section className="bg-black/50 h-screen content-center px-10 ">
      <div className="bg-white/80 max-w-xl min-h-96 mx-auto text-black rounded-md p-10 space-y-2">
        <div className="mb-4">
          <h1 className="text-3xl font-semibold font-lato text-center">
            Welcome back!
          </h1>
          <p className="text-center">Enter your credentials to sign in.</p>
        </div>

        <button className="flex gap-2 bg-premier text-white py-2 mx-auto w-full max-w-72 rounded-md justify-center ">
          <Mail />
          Log in with Google
        </button>
        <button className="flex gap-2 bg-premier text-white py-2 mx-auto w-full max-w-72 rounded-md justify-center ">
          <GitCommit />
          Log in with GitHub
        </button>
        <div className="flex gap-2 w-full content-center py-4">
          <hr className="border border-premier mt-2.5 flex-auto" />
          <p className="text-premier flex-none">OR</p>
          <hr className="border border-premier mt-2.5 flex-auto" />
        </div>
        <input
          placeholder="Email or Username"
          className="p-1.5 rounded-md border max-w-72 w-full mx-auto  block border-premier"
        ></input>
        <input
          placeholder="Password"
          type="password"
          className="max-w-72 w-full rounded-md p-1.5 border mx-auto block  border-premier"
        ></input>
        <button type="submit" className="flex gap-2 font-lato bg-premier text-white py-2 mx-auto w-full max-w-72 rounded-md justify-center ">
          SUBMIT
        </button>
      </div>
    </section>
  );
};

export default Page;
