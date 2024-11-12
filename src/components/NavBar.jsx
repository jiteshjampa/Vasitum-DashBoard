import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { RiMessage2Fill } from "react-icons/ri";
import { TbChevronDown } from "react-icons/tb";
import account from "../assets/jitesh_image.jpg";
import { IoMenu } from "react-icons/io5";
const NavBar = () => {
  return (
    <div className="  flex justify-between md:justify-evenly">
      <div className="  flex m-3 justify-evenly items-center">
        <IoMenu className=" w-5 h-5 hidden md:flex md:mr-3" />
        <div className=" flex items-center  relative ">
          <input
            type="text"
            className=" bg-Search-background placeholder:text-placeholder-text min-w-[343px]  px-[16px] py-[10px] border border-search-border outline-none rounded-md"
            placeholder="Search"
          />
          <FaSearch className=" relative right-6 text-icon-color" />
        </div>
      </div>
      <div className=" flex justify-end items-center space-x-4">
        <IoMdNotifications className=" w-5 h-5 text-icon-color" />
        <RiMessage2Fill className=" w-5 h-5 text-icon-color" />
        <img src={account} alt=" my_image" className=" w-8 h-8 rounded-full " />
        <span className="md:hidden">Jitesh Reddy</span>
        <TbChevronDown className=" w-5 h-5 text-icon-color" />
      </div>
    </div>
  );
};

export default NavBar;
