import React from "react";
import { TbChevronDown } from "react-icons/tb";
import { HiDotsHorizontal } from "react-icons/hi";
const UpcomingDetails = () => {
  return (
    <div className="rounded-md   space-y-4 m-3 p-2 md:flex md:space-x-3 md:justify-evenly ">
      <div className="list-none bg-very-dark-blue rounded-md md:w-1/2">
        <div className="rounded-md bg-dark-blue text-white px-3 py-3 ">
          <li className=" text-xl font-medium md:text-base">
            Recently Activity
          </li>
        </div>
        <hr className=" text-white mb-4" />
        <div className=" space-y-3 p-4 text-white md:space-y-5">
          <li className=" text-[12px] font-extralight">
            10:40 AM, Fri 10 Sept 2021
          </li>
          <li className=" text-xl font-medium">You Posted a New Job</li>
          <li className="text-sm  font-extralight md:text-xl">
            Kindly check the requirements and terms of work and make sure
            everything is right.
          </li>
          <div></div>
          <li className="flex items-center text-base">
            Today you makes 12 Activity
            <button className="ml-3 bg-light-red px-3 py-2 text-white rounded-md text-sm">
              See All Activity
            </button>
          </li>
        </div>
      </div>
      <div className=" border-2 rounded-md border-search-border list-none md:w-1/2">
        <div className=" list-none flex justify-between items-center ">
          <li className=" text-lg font-medium p-2">Upcoming Schedule</li>
          <li className="flex justify-evenly items-center border border-slate-200 p-2 text-sm rounded-md m-2 text-dark-grey font-medium">
            Today 13 Sep 2021 <TbChevronDown className=" ml-2" />
          </li>
        </div>
        <li className=" text-icon-text m-2 text-sm">Priority</li>
        <div className=" flex justify-between bg-Search-background border border-search-border m-2 rounded-md p-2">
          <div className=" flex   flex-col items-start space-y-2">
            <li>Review candidate applications</li>
            <li className=" text-[11px]">Today 11:30 AM</li>
          </div>
          <div className="flex   items-center justify-evenly p-3 space-x-3">
            <li>
              <HiDotsHorizontal className=" text-icon-color w-5 h-5" />
            </li>
          </div>
        </div>
        <li className=" text-icon-text m-2 text-sm">Other</li>
        <div className=" flex justify-between bg-Search-background border border-search-border m-2 rounded-md p-2">
          <div className=" flex   flex-col items-start space-y-2">
            <li>Interview with candidates</li>
            <li className=" text-[11px]">Today 10:30 AM</li>
          </div>
          <div className="flex   items-center justify-evenly p-3 space-x-3">
            <li>
              <HiDotsHorizontal className=" text-icon-color w-5 h-5" />
            </li>
          </div>
        </div>
        <div className=" flex justify-between bg-Search-background border border-search-border m-2 rounded-md p-2">
          <div className=" flex   flex-col items-start space-y-2">
            <li>Short meeting with product designer from IT department</li>
            <li className=" text-[11px]">Today 9:15 AM</li>
          </div>
          <div className="flex   items-center justify-evenly p-3 space-x-3">
            <li>
              <HiDotsHorizontal className=" text-icon-color w-5 h-5" />
            </li>
          </div>
        </div>
        <hr />
        <li className=" text-center">
          <button className=" text-light-red text-center px-3 py-4  font-semibold">
            Create a New Schedule
          </button>
        </li>
      </div>
    </div>
  );
};

export default UpcomingDetails;
