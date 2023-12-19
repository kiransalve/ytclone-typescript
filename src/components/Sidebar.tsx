import React from "react";
import {
  MdHomeFilled,
  MdOutlineSlowMotionVideo,
  MdSubscriptions,
  MdOutlineVideoLibrary,
  MdHistory,
  MdOutlineSmartDisplay,
  MdOutlineWatchLater,
  MdThumbUpOffAlt,
  MdSettings,
  MdOutlinedFlag,
  MdOutlineHelpOutline,
  MdOutlineFeedback,
  MdOutlineSportsVolleyball,
} from "react-icons/md";
import { TbMusic, TbDeviceGamepad2 } from "react-icons/tb";
import { FaRegCompass } from "react-icons/fa";
import { GiFilmStrip } from "react-icons/gi";
import SidebarLinks from "./SidebarLinks";
import SidebarTextLinks from "./SidebarTextLinks";

const mainLinks = [
  { icon: <MdHomeFilled className="text-xl" />, name: "Home" },
  { icon: <FaRegCompass className="text-xl" />, name: "Explore" },
  { icon: <MdOutlineSmartDisplay className="text-xl" />, name: "Live" },
  { icon: <MdSubscriptions className="text-xl" />, name: "Subscription" },
  { icon: <MdOutlineVideoLibrary className="text-xl" />, name: "Saved" },
  { icon: <MdHistory className="text-xl" />, name: "Watch Later" },
  { icon: <MdOutlineSlowMotionVideo className="text-xl" />, name: "History" },
];

const secondaryLink = [
  { icon: <MdSettings className="text-xl" />, name: "Setting" },
  { icon: <MdOutlinedFlag className="text-xl" />, name: "Flag" },
  { icon: <MdOutlineHelpOutline className="text-xl" />, name: "Ask" },
  { icon: <MdOutlineFeedback className="text-xl" />, name: "Message" },
];

const playLink = [
  { icon: <TbMusic className="text-xl" />, name: "Music" },
  { icon: <TbDeviceGamepad2 className="text-xl" />, name: "Game" },
  { icon: <GiFilmStrip className="text-xl" />, name: "Movie" },
  { icon: <MdOutlineSportsVolleyball className="text-xl" />, name: "Sports" },
];

const helpLinks = [
  { icon: <MdOutlineWatchLater className="text-xl" />, name: "Explore" },
  { icon: <MdThumbUpOffAlt className="text-xl" />, name: "Explore" },
  { icon: <MdThumbUpOffAlt className="text-xl" />, name: "Explore" },
];

const textLinks = [
  [
    "About",
    "Press",
    "Copyright",
    "Contact Us",
    "Creator",
    "Advertise",
    "Developers",
  ],
  [
    "Terms",
    "Privacy",
    "Policy and Safety",
    "How Youtube works",
    "Test New Features",
  ],
];

const Sidebar = () => {
  return (
    <div className="w-2/12 mt-4 bg-[#212121] pr-5 overflow-auto pb-8 sidebar">
      <SidebarLinks links={mainLinks} />
      <SidebarLinks links={playLink} />
      <SidebarLinks links={secondaryLink} />
      <SidebarTextLinks text={textLinks[0]} />
      <SidebarTextLinks text={textLinks[1]} />
      <span className="px-4 text-sm text-zinc-400">&copy; 2023 Google</span>
      <br />
      <div className="px-3 py-3 text-sm text-zinc-400 ">
        This clone is for education pupose only.
      </div>
    </div>
  );
};

export default Sidebar;
