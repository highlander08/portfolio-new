import React from "react";
import {
  BiBriefcase,
  BiClipboard,
  BiHomeAlt,
  BiSolidChat,
  BiUser,
} from "react-icons/bi";
import { Link } from "react-scroll";

export const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div className="w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex items-center justify-between text-2xl bg-primary/50 text-whiteHigh">
          <Link
            offset={-200}
            activeClass="active"
            smooth={true}
            spy
            to="home"
            className="cursor-pointer w-[60px] h-[60px] flex justify-center items-center"
          >
            <BiHomeAlt />
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy
            to="about"
            className="cursor-pointer w-[60px] h-[60px] flex justify-center items-center"
          >
            <BiUser />
          </Link>
          {/* <Link
            activeClass="active"
            smooth={true}
            spy
            to="services"
            className="cursor-pointer w-[60px] h-[60px] flex justify-center items-center"
          >
            <BiClipboard />
          </Link> */}
          <Link
            activeClass="active"
            smooth={true}
            spy
            to="work"
            className="cursor-pointer w-[60px] h-[60px] flex justify-center items-center"
          >
            <BiBriefcase />
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy
            to="contact"
            className="cursor-pointer w-[60px] h-[60px] flex justify-center items-center"
          >
            <BiSolidChat />
          </Link>
        </div>
      </div>
    </nav>
  );
};
