"use client";
import { Scorer, ScorerRequest } from "@/types/types";
import { TableProperties } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const TopScorers = () => {
  const [data, setData] = useState<ScorerRequest>();

  useEffect(() => {
    try {
      const result = async () => {
        const request = await fetch("/api/scorers");

        const data = await request.json();
        setData(data.response);
      };

      result();
    } catch (error) {
      console.error("Something went wrong: ", error);
    }
  }, []);
  console.log(data);
  return (
    <section className="font-lato">
      <div className="max-w-4xl bg-opacity-70 bg-white mx-auto rounded-lg">
        <h1 className="py-2 text-center text-2xl justify-center uppercase items-center flex gap-2 text-premier font-semibold">
          <TableProperties size-5 />
          Top Scorers
        </h1>

        <div className="grid grid-cols-5 items-center gap-2 bg-premier p-2 font-semibold">
          <h3 className="col-span-2 pl-2">Player</h3>
          <h3 className="col-span-1">Team</h3>
          <h3 className="grid-cols-1">Goals</h3>
          <h3 className="grid-cols-1">MP</h3>
        </div>
        {data?.scorers.map((scorer: Scorer) => {
          return (
            <div
              key={scorer.player.id}
              className="grid grid-cols-5 items-center gap-2 bg-black bg-opacity-50 hover:bg-opacity-70 p-2"
            >
              <h3 className="col-span-2 pl-2">{scorer.player.name}</h3>
              <Image
                alt=""
                src={scorer.team.crest}
                width={30}
                height={30}
                className="grid-cols-1 text-center "
              />
              <h3 className="grid-cols-1">{scorer.goals}</h3>
              <h3 className="grid-cols-1">{scorer.playedMatches}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TopScorers;
