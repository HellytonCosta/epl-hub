import { Copyright } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className=" w-full px-10 py-5 bg-premier text-white">
      <div className="grid grid-cols-4 gap-2 max-w-6xl mx-auto">
        <div className="grid-cols-1">Future Logo</div>
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
            <li>Code</li>
            <li>API</li>
          </ul>
        </div>
        <div className="grid-cols-1">
          <h3 className="text-xl text-gray-400 mb-3">Contact</h3>
          <ul className="space-y-2">
            <li>HCS - Author</li>
          </ul>
        </div>
      </div>
      <hr className="my-6 px-32 max-w-6xl mx-auto border-gray-400" />
      <p className="flex gap-2 mt-4 items-center justify-center">
        <Copyright className="size-4" />
        2024 - All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
