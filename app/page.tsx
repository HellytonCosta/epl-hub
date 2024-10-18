
import Matches from "@/components/standings/Matches";
import StandingsTable from "@/components/standings/StandingsTable";
import TopScorers from "@/components/standings/TopScorers";

export default function Home() {
  return (
    <div className="p-10 bg-opacity-30 bg-black">
      <div
        className="py-20 -mt-10 -ml-10 -mr-10  bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/premier-league-cup-trophy.png')",
        }}
      >
        <div className="flex my-10 gap-2 px-20 font-lato max-w-[1500px] mx-auto max-xl:flex-col">
          <div className="flex-1 content-center my-10">
            <h1 className="text-7xl uppercase font-lato max-xl:text-2xl font-semibold max-xl:text-center">Welcome Lads!</h1>
            <p className="text-start text-xl max-lg:hidden">
              Here, you find the standings, general info e much more about the
              EPL.
            </p>
          </div>
          <div className="flex-1">
            <p className="max-w-lg text-end text-xl mr-0 ml-auto max-xl:text-center">
              Explore the latest Premier League standings and statistics in
              real-time. This is an open-source project, built by fans for fans.
              Dive into the data, track your favorite teams, and enjoy the
              beautiful game!
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 py-10 max-xl:grid-cols-1">
        <StandingsTable />
        <div className="space-y-10 max-xl:my-10">
          <Matches /> 
          <TopScorers />
        </div>
      </div>
    </div>
  );
}
