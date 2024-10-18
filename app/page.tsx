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
        <div className="flex my-10 gap-2 px-20">
          <div className="flex-1">
            <h1 className="text-7xl uppercase font-semibold">Welcome Lads!</h1>
            <p className="text-start text-xl">
              Here, you find the standings, general info e much more about the
              EPL.
            </p>
          </div>
          <div className="flex-1">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              quidem soluta possimus sunt dolorem tempora laudantium voluptatem,
              ducimus illo odit molestias voluptatum tenetur, necessitatibus
              ipsam aperiam optio quaerat expedita dicta!
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <StandingsTable />
        <div className="">
          <TopScorers />
        </div>
      </div>
    </div>
  );
}
