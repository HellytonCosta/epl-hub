"use client";

import { StandingsPosition, Standings, StandingsReponse } from "@/types/types";
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
    <section className="p-10">
      <div className="max-w-3xl bg-opacity-70 bg-white mx-auto rounded-lg">
        <Image
          alt=""
          src={data.competition.emblem}
          width={100}
          height={100}
          className="bg-transparent mx-auto"
        />
        <h1 className="py-2 -mt-7 text-center text-2xl uppercase items-center text-premier font-semibold">
          Standings
        </h1>
        <div className="grid grid-cols-6 items-center gap-2 bg-premier py-2 font-semibold">
          <h3 className="col-span-3 col-start-2">Team</h3>
          <h3 className="grid-cols-1">Points</h3>
          <h3 className="grid-cols-1">MP</h3>
        </div>
        {data.standings?.map((standings: Standings) =>
          standings?.table.map((item: StandingsPosition) => {
            console.log(standings);

            return (
              <div
                key={item.team.id}
                className="grid grid-cols-6 items-center gap-2 bg-black bg-opacity-40 hover:bg-opacity-50 py-2"
              >
                <div className="flex gap-2 grid-cols-1 px-2">
                  <Image
                    alt=""
                    src={item.team.crest}
                    width={30}
                    height={30}
                    className=" text-center "
                  />
                  <p className="flex-auto text-end items-center">{item.position}</p>
                </div>
                <h3 className="col-span-3">{item.team.name}</h3>
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
