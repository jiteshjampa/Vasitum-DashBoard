import React from "react";
import { MdDashboard } from "react-icons/md";
import { HiMiniUserGroup } from "react-icons/hi2";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { IoPeopleCircle } from "react-icons/io5";
import { FcDepartment } from "react-icons/fc";
import { BiSupport } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
const SideBar = () => {
  return (
    <div className="md:fixed md:w-0 font-poppins w-1/4 min-w-60 md:min-w-fit   bg-slate-100 flex flex-col  justify-between  items-center ">
      <div className="">
        <div className="flex justify-center">
          <h1 className=" text-custom-blue text-2xl md:text-sm font-semibold md:hidden p-2">
            Vasitum
          </h1>
        </div>
        <div className=" list-none space-y-4 mt-10 flex  flex-col  md:items-center">
          <li className="text-icon-text text-sm md:text-[10px] md:p-2 text-center">
            MAIN MENU
          </li>
          <li className="flex text-icon-text">
            <MdDashboard className="mr-6 md:mr-1 text-icon-color w-5 h-5" />
            <span className=" md:hidden">DashBoard</span>
          </li>
          <li className="flex text-icon-text">
            <IoPeopleCircle className="mr-6 md:mr-1 text-icon-color  w-5 h-5" />
            <span className=" md:hidden">Recruitment</span>
          </li>
          <li className="flex text-icon-text">
            <RiCalendarScheduleFill className="mr-6 md:mr-1 text-icon-color  w-5 h-5" />
            <span className=" md:hidden">Schedule</span>
          </li>
          <li className="flex text-icon-text">
            <HiMiniUserGroup className="mr-6 md:mr-1 text-icon-color  w-5 h-5" />
            <span className=" md:hidden">Employee</span>
          </li>
          <li className="flex text-icon-text">
            <FcDepartment className="mr-6 md:mr-1 text-icon-color  w-5 h-5" />
            <span className=" md:hidden">Department</span>
          </li>
        </div>
      </div>
      <div className="md:h-screen">
        <div className="h-screen  list-none space-y-4 flex flex-col justify-center md:items-center">
          <li>
            <h1 className="text-icon-text text-sm md:text-[10px]">OTHER</h1>
          </li>
          <li className="flex text-icon-text">
            <BiSupport className="mr-6 md:mr-1 text-icon-color  w-5 h-5" />
            <span className=" md:hidden">Support</span>
          </li>
          <li className="flex text-icon-text">
            <IoMdSettings className="mr-6 md:mr-1 text-icon-color  w-5 h-5" />
            <span className=" md:hidden">Settings</span>
          </li>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
