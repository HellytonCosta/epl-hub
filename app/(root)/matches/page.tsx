"use client";
import { CompetitionMatches, Match } from "@/types/types";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [matchesData, setMatchesData] = useState<CompetitionMatches>();
  const [matchDay] = useState("2");

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await fetch(`/api/matches?matchday=${matchDay}`);
        const data = await response.json();
        setMatchesData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMatches();
  }, [matchDay]);

  
  return (
    <section className="p-10">
      <div className="max-w-3xl px-10 py-5 bg-opacity-70 bg-white mx-auto rounded-lg ">
        {matchesData?.matches.map((match: Match) => {
          return (
            <div key={match.id} className="flex gap-2 justify-center py-1 my-1 bg-black bg-opacity-50">
              <p className="flex-1 text-end">{match.homeTeam.name}</p>
              <p className="flex-none mx-3">{match.score.fullTime.home} x {match.score.fullTime.away}</p>
              <p className="flex-1">{match.awayTeam.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Page;
