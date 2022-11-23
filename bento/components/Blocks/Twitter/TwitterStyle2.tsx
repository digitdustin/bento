import React from "react";
import TwitterIcon from "./TwitterIcon";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";

const TwitterStyle2 = ({ username }: { username: string }) => {
  return (
    <div className="w-80 h-80 shadow-lg rounded-lg cursor-pointer group bg-blue-300 relative flex items-center justify-center">
      {/* Twitter icon svg */}
      <div className="w-14 h-14">
        <TwitterIcon />
      </div>
      <div className="absolute left-4 bottom-4 transition-all ease-in-out h-10 w-auto px-3 rounded-full bg-white border-2 border-slate-300 flex items-center justify-center">
        <p className="w-0 opacity-0 text-slate-700 transition-all text-sm ease-in-out group-hover:w-20 group-hover:opacity-100 group-hover:mr-1">
          @{username}
        </p>
        <ArrowUpRightIcon
          className={`h-4 w-4 text-slate-700 group-hover:text-slate-400 group-hover:rotate-45 transition`}
        />
      </div>
    </div>
  );
};

export default TwitterStyle2;
