import {
  AiFillHome,
  AiOutlineCompass,
  AiOutlineHeart,
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlinePlusCircle,
  AiOutlineSearch,
} from "react-icons/ai";
import { RiVideoLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

export const mainu = [
  {
    title: "Home",
    icon: <AiOutlineHome className="test-2xl mr-5"></AiOutlineHome>,
    activeIcon: <AiFillHome className="test-2xl mr-5"></AiFillHome>,
  },

  {
    title: "Search",
    icon: <AiOutlineSearch className="test-2xl mr-5"></AiOutlineSearch>,
    activeIcon: <AiOutlineSearch className="test-2xl mr-5"></AiOutlineSearch>,
  },

  {
    title: "Explore",
    icon: <AiOutlineCompass className="test-2xl mr-5"></AiOutlineCompass>,
    activeIcon: <AiOutlineCompass className="test-2xl mr-5"></AiOutlineCompass>,
  },

  {
    title: "Reels",
    icon: <RiVideoLine className="test-2xl mr-5"></RiVideoLine>,
    activeIcon: <RiVideoLine className="test-2xl mr-5"></RiVideoLine>,
  },

  {
    title: "Message",
    icon: <AiOutlineMessage className="test-2xl mr-5"></AiOutlineMessage>,
    activeIcon: <AiOutlineMessage className="test-2xl mr-5"></AiOutlineMessage>,
  },

  {
    title: "Notification",
    icon: <AiOutlineHeart className="test-2xl mr-5"></AiOutlineHeart>,
    activeIcon: <AiOutlineHeart className="test-2xl mr-5"></AiOutlineHeart>,
  },

  {
    title: "Create",
    icon: <AiOutlinePlusCircle className="test-2xl mr-5"></AiOutlinePlusCircle>,
    activeIcon: (
      <AiOutlinePlusCircle className="test-2xl mr-5"></AiOutlinePlusCircle>
    ),
  },

  {
    title: "Profile",
    icon: <CgProfile className="test-2xl mr-5"></CgProfile>,
    activeIcon: <CgProfile className="test-2xl mr-5"></CgProfile>,
  },
];
