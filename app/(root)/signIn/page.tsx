"use client";
import { signIn, validateSession } from "@/constants/actions/user.action";
import { userSignInSchema } from "@/schemas/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { GitCommit, Mail } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useSession, signIn as SignIn } from "next-auth/react";


// eslint-disable-next-line @next/next/no-async-client-component
const Page = () => {
  const { data } = useSession();
  // validating data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [authSession, setAuthSession] = useState<any>();
  
  if(data) {
    setAuthSession(data);
  }
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof userSignInSchema>>({
    resolver: zodResolver(userSignInSchema),
  });

  const onSubmit = async (data: z.infer<typeof userSignInSchema>) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    signIn(data).then((data: any) => {
      setError(data?.error);
      setSuccess(data?.success);
    });
  };

  useEffect(() => {
    const fetchSession = async () => {
      const session = await validateSession(authSession);
      console.log(data);
      return session;
    }

    fetchSession();
  }, [])

  return (
    <section className="bg-black/50 h-screen content-center px-10 ">
      <div className="bg-white/80 max-w-xl min-h-96 mx-auto text-black rounded-md p-10 space-y-2">
        <div className="mb-4">
          <h1 className="text-3xl font-semibold font-lato text-center">
            Welcome back! {data?.user?.email}
          </h1>
          <p className="text-center">Enter your credentials to sign in.</p>
        </div>

        <button
          className="flex gap-2 bg-premier text-white py-2 mx-auto w-full max-w-72 rounded-md justify-center "
          // onClick={() => SignIn("github")}
        >
          <Mail />
          Log in with Google
        </button>
        <button
          className="flex gap-2 bg-premier text-white py-2 mx-auto w-full max-w-72 rounded-md justify-center "
          onClick={() => SignIn("github")}
        >
          <GitCommit />
          Log in with GitHub
        </button>
        <div className="flex gap-2 w-full content-center py-4">
          <hr className="border border-premier mt-2.5 flex-auto" />
          <p className="text-premier flex-none">OR</p>
          <hr className="border border-premier mt-2.5 flex-auto" />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            {...register("username")}
            placeholder="Email or Username"
            className="p-1.5 rounded-md border max-w-72 w-full mx-auto  block border-premier"
          ></input>
          <input
            {...register("password")}
            placeholder="Password"
            type="password"
            className="max-w-72 w-full rounded-md p-1.5 border mx-auto block  border-premier"
          ></input>
          {errors.password && <p>{errors.password.message}</p>}
          <button
            type="submit"
            className="flex gap-2 font-lato bg-premier text-white py-2 mx-auto w-full max-w-72 rounded-md justify-center "
            onClick={() => SignIn()}
          >
            SUBMIT
          </button>
          {error && <p>{error}</p>}
          {success && <p>{success}</p>}
        </form>
      </div>
    </section>
  );
};

export default Page;
