"use client";
import { CompetitionMatches, Match } from "@/types/types";
import { LandPlot, SkipBack, SkipForward } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Matches = () => {
  const [matchesData, setMatchesData] = useState<CompetitionMatches>();
  const [matchDay] = useState("2");

  const [currentMatchday, setCurrentMatchday] = useState<number>();
  const [selectedMatchDay, setSelectedMatchDay] = useState<number>();
  const [searchMatchday, setSearchMatchday] = useState<string>();

  useEffect(() => {
    try {
      const result = async () => {
        const request = await fetch("/api/standings");

        const data = await request.json();
        setCurrentMatchday(data.response.season.currentMatchday);
        if (!searchMatchday) {
          setSearchMatchday(currentMatchday?.toString());
          setSelectedMatchDay(currentMatchday);
        }
      };

      result();
    } catch (error) {
      console.error("Something went wrong: ", error);
    }
  }, [currentMatchday, searchMatchday, selectedMatchDay]);

  const handlePreviousMatchday = () => {
    const sub = selectedMatchDay! - 1;
    setSelectedMatchDay(sub);
    setSearchMatchday(sub.toString());
  };
  const handleNextMatchday = () => {
    const sub = selectedMatchDay! + 1;
    setSelectedMatchDay(sub);
    setSearchMatchday(sub.toString());
  };

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await fetch(`/api/matches?matchday=${searchMatchday}`);
        const data = await response.json();
        setMatchesData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMatches();
  }, [matchDay, searchMatchday]);

  return (
    <section className="font-lato">
      <div className="max-w-4xl bg-opacity-70 bg-white mx-auto rounded-lg">
        <h1 className="py-2 text-center text-2xl justify-center uppercase items-center flex gap-2 text-premier font-semibold">
          <LandPlot size-5 />
          Matches
        </h1>

        <div className="flex items-center gap-2 bg-premier p-2 font-semibold">
          <SkipBack
            className="flex-none cursor-pointer hover:text-purple-300"
            onClick={handlePreviousMatchday}
          />
          <h3 className="text-center py-2 flex-auto text-xl">
            Gameday {searchMatchday}
          </h3>
          <SkipForward
            className="flex-none cursor-pointer hover:text-purple-300"
            onClick={handleNextMatchday}
          />
        </div>
        {matchesData?.matches.map((match: Match) => {
          return (
            <div
              key={match.id}
              className="flex gap-2 justify-center py-1.5  bg-black hover:bg-opacity-70 bg-opacity-50"
            >
              <div className="flex-1 flex gap-4">
                <p className="flex-auto content-center text-end max-lg:hidden">
                  {match.homeTeam.name}
                </p>
                <p className="flex-auto content-center text-end hidden max-lg:block">
                  {match.homeTeam.tla}
                </p>
                <Image
                  alt="Home Team Crest"
                  src={match.homeTeam.crest}
                  width={30}
                  height={10}
                  className="flex-none py-2 size-auto"
                />
              </div>
              <p className="flex-none text-xl bg-premi content-center mx-3">
                {match.score.fullTime.home} x {match.score.fullTime.away}
              </p>
              <div className="flex flex-1 gap-4">
                <Image
                  alt="Home Team Crest"
                  src={match.awayTeam.crest}
                  width={30}
                  height={30}
                  className="flex-none py-2"
                />
                <p className="flex-auto text-start content-center max-lg:hidden">
                  {match.awayTeam.name}
                </p>
                <p className="flex-auto text-start content-center hidden max-lg:block">
                  {match.awayTeam.tla}
                </p>
              </div>
              {/* <p className="flex-1">{match.awayTeam.name}</p> */}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Matches;
