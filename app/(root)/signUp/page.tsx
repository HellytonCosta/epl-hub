"use client";

import React, { useState } from "react";
import { userSignUpSchema } from "@/schemas/user";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUp } from "@/constants/actions/user.action";

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof userSignUpSchema>>({
    resolver: zodResolver(userSignUpSchema),
  });

  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const onSubmit = async (data: z.infer<typeof userSignUpSchema>) => {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    signUp(data).then((data: any) => {
      setError(data?.error);
      setSuccess(data?.success);
    });
  };
  return (
    <section className="bg-black/50 h-screen content-center px-10 ">
      <div className="bg-white/80 max-w-xl min-h-96 mx-auto text-black rounded-md p-10 space-y-2">
        <div className="mb-4">
          <h1 className="text-3xl font-semibold font-lato text-center">
            Welcome!
          </h1>
          <p className="text-center">
            Enter your credentials to start the journey.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
          <input
            {...register("email")}
            placeholder="Email"
            className="p-1.5 rounded-md border max-w-72 w-full mx-auto  block border-premier"
          ></input>
          {errors.email && <p>{errors.email.message}</p>}
          <input
            {...register("username")}
            placeholder="Username"
            className="p-1.5 rounded-md border max-w-72 w-full mx-auto  block border-premier"
          ></input>
          {errors.username && <p>{errors.username.message}</p>}
          <input
            {...register("password")}
            placeholder="Password"
            type="password"
            className="max-w-72 w-full rounded-md p-1.5 border mx-auto block  border-premier"
          ></input>
          {errors.password && <p>{errors.password.message}</p>}
          <input
            {...register("confirm")}
            placeholder="Confirm your Password"
            type="password"
            className="max-w-72 w-full rounded-md p-1.5 border mx-auto block  border-premier"
          ></input>
          {errors.confirm && <p>{errors.confirm.message}</p>}
          <button
            type="submit"
            className="flex gap-2 font-lato bg-premier text-white py-2 mx-auto w-full max-w-72 rounded-md justify-center "
          >
            CREATE ACCOUNT
          </button>
          {error && <p>{error}</p>}
          {success && <p>{success}</p>}
        </form>
      </div>
    </section>
  );
};

export default Page;
