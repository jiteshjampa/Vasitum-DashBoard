import React from "react";
import { FaArrowUp } from "react-icons/fa6";
import { TbWaveSine } from "react-icons/tb";
import { TbChevronDown } from "react-icons/tb";
import { BsFillPinAngleFill } from "react-icons/bs";
import { HiDotsHorizontal } from "react-icons/hi";
const DashBoardDetails = () => {
  return (
    <div className="w-4/5 md:w-full m-4 md:m-0 font-poppins md:flex md:justify-evenly md:items-center md:ml-10">
      <div className="">
        <h1 className="md:flex md:justify-center">DashBoard</h1>
        <div className="flex flex-wrap justify-center">
          <div className="  bg-light-pink list-none space-y-3    px-5 py-5 rounded-md m-3">
            <li>
              <h1 className="  text-base  font-medium">Available Position</h1>
            </li>
            <li className=" text-2xl font-semibold">24</li>
            <li className=" text-light-red text-sm">4 Urgently needed</li>
          </div>
          <div className="  bg-light-blue list-none space-y-3 m-3  px-5 py-5 rounded-md">
            <li>
              <h1 className="  text-base  font-medium">Job Open</h1>
            </li>
            <li className=" text-2xl font-semibold">10</li>
            <li className=" text-medium-blue text-sm">4 Active hiring</li>
          </div>
          <div className=" bg-very-light-pink list-none space-y-3  m-3  px-5 py-5 rounded-md">
            <li>
              <h1 className=" text-base  font-medium">New Employees</h1>
            </li>
            <li className=" text-2xl font-semibold">24</li>
            <li className=" text-light-red text-sm">4 Department</li>
          </div>
        </div>
        <div className="flex md:flex-wrap ">
          <div className="  border-2 rounded-md border-search-border  px-5 py-5 flex m-2">
            <div className=" list-none space-y-3">
              <li className=" font-medium">Total Employees</li>
              <li className="  text-4xl font-semibold">216</li>
              <li className=" text-sm"> 120 Men</li>
              <li className=" text-sm">90 Women</li>
            </div>
            <div className="flex flex-col justify-center list-none ml-6">
              <li className="  ml-8 text-light-red">+2%</li>
              <li className=" ml-8">
                <FaArrowUp className="text-light-red" />
              </li>
              <li>
                <TbWaveSine className="  w-24 h-24 text-light-red" />
              </li>
              <li className="bg-light-pink  text-[10px] px-1 rounded-md py-1">
                +2% Past month
              </li>
            </div>
          </div>
          <div className=" border-2 rounded-md border-search-border  px-5 py-5 flex m-2">
            <div className=" list-none space-y-3">
              <li className=" font-medium">Talent Request</li>
              <li className="  text-4xl font-semibold">16</li>
              <li className=" text-sm"> 6 Men</li>
              <li className=" text-sm">10 Women</li>
            </div>
            <div className=" ml-6 flex flex-col justify-center list-none">
              <li className="  ml-8 text-light-red">+5%</li>
              <li className=" ml-8">
                <FaArrowUp className="text-light-red" />
              </li>
              <li>
                <TbWaveSine className=" w-24   h-24 text-light-red" />
              </li>
              <li className="bg-light-pink  text-[10px] px-1 rounded-md py-1">
                +5% Past month
              </li>
            </div>
          </div>
        </div>
        <div className=" border-2 rounded-md border-search-border list-none flex flex-col  md:ml-2 md:w-[95%]">
          <div className=" ">
            <div className=" list-none flex justify-between items-center ">
              <li className=" text-lg md:text-base font-medium p-2">
                Announcement
              </li>
              <li className="md:text-base flex justify-evenly items-center border border-slate-200 p-2 text-sm rounded-md m-2 text-dark-grey font-medium">
                Today 13 Sep 2021 <TbChevronDown className=" ml-2" />
              </li>
            </div>
          </div>
          <div className=" flex justify-between bg-Search-background border border-search-border m-2 rounded-md p-2">
            <div className="md:text-base flex   flex-col items-start space-y-2">
              <li>Outing schedule for every department</li>
              <li className="md:text-base text-[11px]">5 Minutes Ago</li>
            </div>
            <div className="flex   items-center justify-evenly p-3 space-x-3">
              <li>
                <BsFillPinAngleFill className=" w-5 h-5" />
              </li>
              <li>
                <HiDotsHorizontal className=" text-icon-color w-5 h-5" />
              </li>
            </div>
          </div>
          <div className=" flex justify-between bg-Search-background border border-search-border m-2 rounded-md p-2">
            <div className="md:text-base flex   flex-col items-start space-y-2">
              <li>Meeting HR department</li>
              <li className="md:text-base text-[11px]">Yesterday, 12:30pm</li>
            </div>
            <div className="flex   items-center justify-evenly p-3 space-x-3">
              <li>
                <BsFillPinAngleFill className=" text-icon-color w-5 h-5" />
              </li>
              <li>
                <HiDotsHorizontal className=" text-icon-color w-5 h-5" />
              </li>
            </div>
          </div>
          <div className=" flex justify-between bg-Search-background border border-search-border m-2 rounded-md p-2">
            <div className="md:text-base flex   flex-col items-start space-y-2">
              <li>
                IT Department need two more talents for UI/UX Designer position
              </li>
              <li className="md:text-base text-[11px]">Yesterday, 09:05am</li>
            </div>
            <div className="flex   items-center justify-evenly p-3 space-x-3">
              <li>
                <BsFillPinAngleFill className=" text-icon-color w-5 h-5" />
              </li>
              <li>
                <HiDotsHorizontal className=" text-icon-color w-5 h-5" />
              </li>
            </div>
          </div>
          <hr />
          <li className=" text-center">
            <button className="md:text-base text-light-red text-center px-3 py-4">
              See All Announcement
            </button>
          </li>
        </div>
      </div>
    </div>
  );
};

export default DashBoardDetails;
