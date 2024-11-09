"use client";
import SignOutButton from "@/components/global/SignOut";
import { validateSession } from "@/constants/actions/user.action";
import { editProfileSchema } from "@/schemas/profile";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const Page = () => {
  const { data } = useSession();

  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  useEffect(() => {
    const fetchSessionData = async () => {
      const session = await validateSession(data?.user);

      if (session) {
        // Setting the values for the profile
        if (session.email) setValue("email", String(session.email));
        if (session.name) setValue("name", String(session.name));
        if (session.username) setValue("name", String(session.username));
        if (session.country) setValue("name", String(session.country));
        if (session.favTeam) setValue("name", String(session.favTeam));
      }
      console.log(session);

   
    };

    if (data) {
      setValue("email", String(data?.user?.email));
      setValue("name", String(data?.user?.name));
    }
    fetchSessionData();
  }, []);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitSuccessful },
  } = useForm<z.infer<typeof editProfileSchema>>({
    resolver: zodResolver(editProfileSchema),
  });

  const onSubmit = async (data: z.infer<typeof editProfileSchema>) => {
    console.log(data);
    // Call the function to update the profile
  };
   
  return (
    <section className="bg-black/50 min-h-screen content-center">
      <div className="mx-auto max-w-sm rounded-md bg-white p-4 text-black">
        <h2 className="text-premier font-lato text-center mb-4 text-xl">
          Edit your profile
        </h2>
        <div className="gap-2">
          <div className="">
            <div
              className="rounded-full mx-auto bg-center bg-contain text-center content-center size-20"
              style={{
                backgroundImage: `url('${data?.user?.image}')`,
              }}
            ></div>
            <h3 className="font-lato text-lg my-4 text-center">
              {data?.user?.name}
            </h3>
          </div>
          <div className="w-full">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
              <input
                id="username"
                {...register("username")}
                placeholder="Username"
                className="p-1.5 rounded-md border w-full mx-auto  block border-premier"
              ></input>
              <input
                {...register("name")}
                placeholder="Name"
                className="p-1.5 rounded-md border w-full mx-auto  block border-premier"
              ></input>
              <input
                {...register("email")}
                placeholder="Email"
                disabled
                className="p-1.5 rounded-md bg-gray-300 border w-full mx-auto  block border-premier"
              ></input>
              <input
                {...register("country")}
                placeholder="Country"
                className="p-1.5 rounded-md border w-full mx-auto  block border-premier"
              ></input>
              <input
                {...register("favTeam")}
                placeholder="Favorite Team in the League"
                className="p-1.5 rounded-md border w-full mx-auto  block border-premier"
              ></input>
              <button
                type="submit"
                className="flex gap-2 font-lato bg-premier text-white py-2 mx-auto w-full max-w-72 rounded-md justify-center" // onClick={() => SignIn()}
              >
                EDIT PROFILE
              </button>
              {error && <p>{error}</p>}
              {success && <p>{success}</p>}
              {isSubmitSuccessful && (
                <p className="text-green-600 text-center">
                  Your data was successfully updated!
                </p>
              )}
            </form>
          </div>
        </div>
        <div className="w-full mt-4 text-center">
          <SignOutButton />
        </div>
      </div>
    </section>
  );
};

export default Page;
