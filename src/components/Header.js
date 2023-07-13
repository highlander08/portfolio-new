import React from "react";
import Logo from "../assets/logo1.svg";
export const Header = () => {
  return (
    <header>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <img
            src={Logo}
            alt=""
            className="hover:scale-125 hover:transition-all hover:duration-300"
          />
          <a
            target="_blank"
            href="tel:+5585985645330"
            className="btn btn-lg  flex items-center justify-center text-whiteHigh"
            rel="noreferrer"
          >
            Contact Me
          </a>
        </div>
      </div>
    </header>
  );
};
