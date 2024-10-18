"use client";
import { Scorer, ScorerRequest } from "@/types/types";
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
    <section className="p-10">
      <div className="max-w-3xl px-10 py-5 bg-opacity-70 bg-white mx-auto rounded-lg">
        <h1 className="mb-4 text-center text-2xl uppercase text-premier font-semibold">
          Top Scorers
        </h1>
        <div className="grid grid-cols-6 items-center gap-2 bg-black bg-opacity-50 p-2 font-semibold">
          <Image
            alt=""
            src={"https://crests.football-data.org/770.svg"}
            width={30}
            height={30}
            className="grid-cols-1 mx-auto"
          />
          <h3 className="col-span-3">Player</h3>
          <h3 className="grid-cols-1">Goals</h3>
          <h3 className="grid-cols-1">MP</h3>
        </div>
        {data?.scorers.map((scorer: Scorer) => {

          return (
            <div
              key={scorer.player.id}
              className="grid grid-cols-6 items-center gap-2 bg-black bg-opacity-30 hover:bg-opacity-50 p-2"
            >
              <Image
                alt=""
                src={scorer.team.crest}
                width={30}
                height={30}
                className="grid-cols-1  text-center mx-auto"
              />

              <h3 className="col-span-3">{scorer.player.name}</h3>
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
