"use client";

import { StandingsPosition, Standings, StandingsReponse } from "@/types/types";
import { TableProperties } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const StandingsTable = () => {
  const [data, setData] = useState<StandingsReponse>();

  useEffect(() => {
    try {
      const result = async () => {
        const request = await fetch("/api/standings");

        const data = await request.json();
        setData(data.response);
      };

      result();
    } catch (error) {
      console.error("Something went wrong: ", error);
    }
  }, []);

  if (!data) return;

  return (
    <section className="font-lato">
      <div className="max-w-2xl bg-opacity-70 bg-white mx-auto rounded-lg">
        <h1 className="py-2 text-center text-2xl justify-center uppercase items-center flex gap-2 text-premier font-bold">
          <TableProperties size-5 />
          Standings
        </h1>
        <div className="grid grid-cols-6 text-xl max-lg:text-base items-center gap-2 bg-premier py-2 font-semibold">
          <h3 className="col-span-3 col-start-2">Team</h3>
          <h3 className="grid-cols-1">Points</h3>
          <h3 className="grid-cols-1">MP</h3>
        </div>
        {data?.standings?.map((standings: Standings) =>
          standings?.table.map((item: StandingsPosition) => {
            console.log(standings);
            const clZone: boolean = item.position <= 4;
            const relegationZone: boolean = item.position >= 18;
            return (
              <div
                key={item.team.id}
                className={
                  (clZone
                    ? `bg-green-900 text-green-100`
                    : relegationZone
                    ? "bg-red-800 text-red-100"
                    : "") +
                  ` grid grid-cols-6 text-lg max-lg:text-base items-center gap-2 bg-black bg-opacity-50 hover:bg-opacity-70 py-3`
                }
              >
                <div className="flex gap-2 grid-cols-1 justify-center content-center">
                  <Image
                    alt=""
                    src={item.team.crest}
                    width={35}
                    height={35}
                    className=" flex-none max-lg:size-5 mt-1 justify-end"
                  />
                  <p className="flex-none mr-1 text-end content-center">
                    {item.position}
                  </p>
                </div>
                <h3 className="col-span-3 max-lg:hidden">{item.team.name}</h3>
                <h3 className="col-span-3 hidden max-lg:block">{item.team.shortName}</h3>
                <h3 className="grid-cols-1">{item.points}</h3>
                <h3 className="grid-cols-1">{item.playedGames}</h3>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
};

export default StandingsTable;
