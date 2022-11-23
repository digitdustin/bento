import React from "react";
import TwitterIcon from "./TwitterIcon";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";

const TwitterStyle1 = ({
  username,
  tweetContent,
}: {
  username: string;
  tweetContent: string;
}) => {
  const avatarUrl = `https://unavatar.io/twitter/${username}`;
  return (
    <div className="w-80 h-80 p-6 rounded-lg bg-white shadow-lg relative flex flex-col justify-between">
      {/* Profile Header */}
      <div className="flex flex-col">
        <div className="w-full flex items-center justify-start">
          {/* Avatar */}
          <div className="w-12 h-12 rounded-full">
            <img
              src={avatarUrl}
              alt="avatar"
              className="w-full h-full rounded-full"
            />
          </div>
          {/* Username */}
          <div className="ml-2">
            <p className="text-sm font-medium text-gray-900">{username}</p>
            <p className="text-xs text-gray-500">@{username}</p>
          </div>
          {/* Twitter logo */}
          <div className="ml-auto">
            <div className="w-10 h-10 rounded-lg bg-blue-400 flex items-center justify-center p-2">
              <TwitterIcon />
            </div>
          </div>
          {/* Tweet content */}
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-900">{tweetContent}</p>
        </div>
      </div>
      {/* Follow Button */}
      <div className="">
        <button className="w-full text-sm flex transition hover:bg-blue-500 items-center justify-center py-2 px-4 rounded-full bg-blue-400 text-white font-medium">
          Follow me on Twitter
          <ArrowUpRightIcon className="h-4 w-4 ml-1" />
        </button>
      </div>
    </div>
  );
};

export default TwitterStyle1;
