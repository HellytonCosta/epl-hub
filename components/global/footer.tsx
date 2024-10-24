import { Copyright } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className=" w-full px-10 py-5 bg-premier text-white">
      <div className="grid grid-cols-4 gap-2 max-w-6xl mx-auto">
        <div className="grid-cols-1">
          <Link href={"/"} className="flex-auto">
            <div className="flex gap-4 items-center">
              <Image
                alt="EPL Logo"
                src={"/logos/trophy-1.svg"}
                width={30}
                height={30}
                className=""
              />
              <h1 className="text-xl flex-auto font-montserrat max-lg:hidden">
                EPL Hub
              </h1>
            </div>
          </Link>
        </div>
        <div className="grid grid-cols-3 col-span-3 gap-2 max-xl:grid-cols-2 gap-y-6">
          <div className="grid-cols-1">
            <h3 className="text-xl text-gray-400 mb-3">EPL Hub</h3>
            <ul className="space-y-2">
              <li>Standings</li>
              <li>Matches</li>
              <li>Scorers</li>
            </ul>
          </div>
          <div className="grid-cols-1">
            <h3 className="text-xl text-gray-400 mb-3">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={"https://github.com/HellytonCosta/epl-hub"}
                  target="_blank"
                >
                  Code
                </Link>
              </li>
              <li>
                <Link href={"https://www.football-data.org/"} target="_blank">
                  API
                </Link>
              </li>
            </ul>
          </div>
          <div className="grid-cols-1">
            <h3 className="text-xl text-gray-400 mb-3">Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link href={"https://hellytoncosta.vercel.app/"}>
                  HCS - Author
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-6 px-32 max-w-6xl mx-auto border-gray-400" />
      <p className="flex gap-2 mt-4 items-center justify-center">
        <Link
          href={
            "https://tlo.mit.edu/researchers-mit-community/protect/software-open-source-protection"
          }
          target="_blank"
          className="text-purple-300"
        >
          MIT License - Copyright
        </Link>
        <Copyright className="size-4" />
        2024 - HCS
      </p>
    </footer>
  );
};

export default Footer;
