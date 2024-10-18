import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="min-h-10  bg-premier px-10 py-4">
      <div className="flex justify-center gap-1 items-center max-w-[1400px] mx-auto">
        <Link href={"/"} className="flex-auto">
          <div className="flex gap-4 items-center">
            <Image alt="" src={"/logos/trophy-1.svg"} width={30} height={30} />
            <h1 className="text-xl flex-auto">EPL Hub</h1>
          </div>
        </Link>
        <div className="flex-auto">
          <ul className="flex justify-center gap-10">
            <Link href={"/standings"}>
              <li>Standings</li>
            </Link>
            <Link href={"/matches"}>
              <li>Matches</li>
            </Link>
            <Link href={"/scorers"}>
              <li>Top Scorers</li>
            </Link>
          </ul>
        </div>
        <div className="flex-auto text-end">PL</div>
      </div>
    </header>
  );
};

export default Header;
