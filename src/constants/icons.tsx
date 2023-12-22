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

export { mainLinks, playLink, secondaryLink, textLinks };
