import React, { useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { mainu } from "./SidebarConfig";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("Home"); // Set an initial value
  const navigate = useNavigate();

  const handleTabClick = (title) => {
    console.log("Clicked on:", title);
    setActiveTab(title);
    if (title.toLowerCase() === "profile") {
      navigate("/username");
    } else if (title.toLowerCase() === "home") {
      navigate("/");
    }
  };

  return (
    <div className="sticky top-0 h-[100vh]">
      <div className="flex flex-col justify-between h-full px-10">
        <div>
          <div className="pt-10">
            <img
              className="w-40"
              src="https://i.imgur.com/zqpwkLQ.png"
              alt=""
            />
          </div>
          <div className="mt-10">
            {mainu.map((item) => (
              <div
                key={item.title} // Add a unique key for each item
                onClick={() => handleTabClick(item.title)}
                className="flex items-center mb-5 cursor-pointer text-lg" // Change class name
              >
                {activeTab.toLowerCase() === item.title.toLowerCase()
                  ? item.activeIcon
                  : item.icon}
                <p
                  className={`${
                    activeTab.toLowerCase() === item.title.toLowerCase()
                      ? "font-bold"
                      : "font-semibold"
                  }`}
                >
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center cursor-pointer pb-10">
          <IoReorderThreeOutline className="text-2xl" />
          <p className="ml-5">More</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
