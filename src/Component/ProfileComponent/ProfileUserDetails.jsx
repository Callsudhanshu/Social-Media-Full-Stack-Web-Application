import React from "react";
import { TbCircleDashed } from "react-icons/tb";

export const ProfileUserDetails = () => {
  return (
    <div className="py-10 w-full">
      <div className="flex items-center">
        <div className="w-[15%]">
          <img
            className="w-32 h-32 rounded-full"
            src="https://cdn.pixabay.com/photo/2023/12/04/16/12/berlin-8429780_1280.jpg"
            alt=""
          />
        </div>

        <div className="space-y-5">
          <div className="flex space-x-10 items-center">
            <p>username</p>
            <button>Edit Profile</button>
            <TbCircleDashed></TbCircleDashed>
          </div>
          <div className="flex space-x-10">
            <div>
              <span className="font-semibold mr-2">6</span>
              <span>Posts</span>
            </div>

            <div>
              <span className="font-semibold mr-2">1 Billion</span>
              <span>Followers</span>
            </div>

            <div>
              <span className="font-semibold mr-2">0</span>
              <span>Following</span>
            </div>
          </div>
          <div>
            <p className="font-semibold">Sudhanshu_Ankit_Akram</p>
            <p>This is Our College Project (Instagram Clone) </p>
          </div>
        </div>
      </div>
    </div>
  );
};
