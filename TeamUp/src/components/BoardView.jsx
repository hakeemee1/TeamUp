import React from "react";
import InproCard from "./InproCard";
import {
  CalendarDaysIcon,
  FunnelIcon,
  NewspaperIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/outline";
import ProjectItem from "./ProjectItem";

function BoardView() {
  return (
    <div className=" relative h-screen w-screen flex">
      <div className=" grid grid-cols-4 gap-8 my-5  mx-10 w-full h-1">
        <InproCard
          title="First meeting"
          description="The meeting started with a warm welcome from PSU, who initiated the introduction round."
        />
        <InproCard
          title="Route Planner"
          description="Find the most environmentally friendly routes for walking, cycling, public transit, and carpooling"
        />
        <InproCard
          title="Emissions Tracker"
          description="Monitor your carbon footprint and track progress in reducing emissions over time."
        />
        <InproCard
          title="Rewards and Challenges"
          description="Earn rewards and participate in eco-challenges to motivate sustainable choices."
        />
        {/* <InproCard
          title="First meeting"
          description="The meeting started with a warm welcome from PSU, who initiated the introduction round."
        /> */}
      </div>
      <div id="allproject" className=" mx-16 absolute mt-96  bg-white rounded-3xl shadow-2xl w-7/12 h-screen ">
        <div className=" flex ml-8">
          <h1 className=" p-10 text-3xl font-medium">All Project</h1>
          <NewspaperIcon className=" w-10 h-10 mt-10 -ml-3" />
        </div>
        <div className="">
            <ProjectItem title="First Meetting " description="The meeting started with a warm welcome from PSU" date="10-2-2023" status= "To-do"  />
            <ProjectItem title="Emissions Tracker
" description="TMonitor your carbon footprint and track " date="10-2-2023" status= "To-do" />
            <ProjectItem title="First Meetting " description="The meeting started with a warm welcome from PSU" date="10-2-2023" status= "To-do" />
            <ProjectItem title="First Meetting " description="The meeting started with a warm welcome from PSU" date="10-2-2023" status= "To-do" />
        </div>
      </div>

      <div className=" bg-blue-100 rounded-xl shadow-2xl w-2/4 h-full mr-10 flex my-5 mx-10">
        <h1 className="text-4xl font-semibold bg-gradient-to-r from-blue-500 to-pink bg-clip-text text-transparent p-10">
          Calenda
        </h1>
        <CalendarDaysIcon className="h-10 w-10 mt-10 text-blue-500 -ml-6 " />
      </div>
    </div>
  );
}

export default BoardView;
