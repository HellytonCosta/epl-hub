import StandingsTable from "@/components/standings/StandingsTable";
import TopScorers from "@/components/standings/TopScorers";

export default function Home() {
  return (
    <div className="p-10 bg-opacity-30 bg-black ">
      <h1 className="text-center text-4xl flex gap-2 justify-center uppercase font-semibold">
        Welcome <p className="text-premier">{"mates!"}</p>
      </h1>
      <p className="text-center text-lg">
        Here, you find the standings, general info e much more about the PL.
      </p>
      <div className="grid grid-cols-2 gap-2">
        <StandingsTable />
        <div className="">
          <TopScorers />
        </div>
      </div>
    </div>
  );
}
