import React from "react";
import SidebarLinks from "./SidebarLinks";
import SidebarTextLinks from "./SidebarTextLinks";
import {
  mainLinks,
  playLink,
  secondaryLink,
  textLinks,
} from "../constants/icons";

const Sidebar = () => {
  return (
    <div className="w-2/12 mt-4 bg-[#212121] pr-5 overflow-auto pb-8 sidebar">
      <SidebarLinks links={mainLinks} />
      <SidebarLinks links={playLink} />
      <SidebarLinks links={secondaryLink} />
      <SidebarTextLinks text={textLinks[0]} />
      <SidebarTextLinks text={textLinks[1]} />
      <div className="px-4 py-3 text-sm text-zinc-400 ">
        Developed by Kiran Salve for education pupose only.
      </div>
    </div>
  );
};

export default Sidebar;
