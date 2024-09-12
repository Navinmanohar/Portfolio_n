import React, { useState } from "react";
import { arrow, logo, menu } from "../assets/index";

function Navbar() {
  const [togle, setTogle] = useState(true);
  return (
    <div className="flex justify-between mt-4 bg-blue-500 text-white">
      <img src={logo} className="h-12 ml-3" />
      <div className="hidden md:flex">
        <ul className="flex flex-row mt-3">
          <li className="mr-3 transition-all ease-in-out hover:scale-110 cursor-pointer ">
            Home
          </li>
          <li className="mr-3 transition-all ease-in-out hover:scale-110 cursor-pointer ">
            About Me
          </li>
          <li className="mr-3 transition-all ease-in-out hover:scale-110 cursor-pointer ">
            Skills
          </li>
          <li className="mr-3 transition-all ease-in-out hover:scale-110 cursor-pointer ">
            Portfolio
          </li>
          <li
            className="mr-3
                transition-all ease-in-out hover:scale-110 cursor-pointer "
          >
            Companies
          </li>
          <li
            className="mr-3
                transition-all ease-in-out hover:scale-110 cursor-pointer "
          >
            Contact me
          </li>
        </ul>
      </div>
      <div className="md:hidden lg:hidden">
        {togle ? (
          <img
            src={menu}
            className="h-10 cursor-pointer"
            onClick={() => setTogle(false)}
          />
        ) : (
          <img
            src={arrow}
            className="h-10 cursor-pointer float-end"
            onClick={() => setTogle(true)}
          />
        )}
        {!togle ? (
          
            <ul className="flex flex-col mt-8 mr-5 bg-blue-400 p-5">
              <li className="mr-3 transition-all ease-in-out hover:scale-110 cursor-pointer  p-3">
                Home
              </li>
              <li className="mr-3 p-3 transition-all ease-in-out hover:scale-110 cursor-pointer ">
                About Me
              </li>
              <li className="mr-3 transition-all ease-in-out hover:scale-110 cursor-pointer p-3 ">
                Skills
              </li>
              <li className="mr-3 transition-all ease-in-out hover:scale-110 cursor-pointer p-3">
                Portfolio
              </li>
              <li
                className="mr-3
                transition-all ease-in-out hover:scale-110 cursor-pointer  p-3"
              >
                Companies
              </li>
              <li
                className="mr-3
                transition-all ease-in-out hover:scale-110 cursor-pointer p-3"
              >
                Contact me
              </li>
            </ul>
          
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Navbar;
