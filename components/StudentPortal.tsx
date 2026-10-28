/**
 * Authors:
 * - Marc Millare - Page layout and styling, 
 * - Alexandru Josu - Functionality (filtering list, add, remove, clear all operations)
 * Date: 10-30-2026
 * Description:
 * - This page acts as the main landing page of the application. It holds all the states to make the app functional.
 * - Inputs:
 * - Outputs: Main display and functionality of the application.
 */
"use client"
import StudentList from "./StudentList";
import StatsPanel from "./StatsPanel";
import { Students } from "@/data/students";

const StudentPortal = () => {
  const numStudents = Students.length;
  //filter the list to get these values
  const honorList = []
  const numHonors = honorList.length;
  const g12List = []
  const numG12 = g12List.length;
  //insert useStates here

  return (
    <div className="flex flex-col gap-4">
      {/* Overview Section - stats panel */}
      <section id="overview">
        <h1 className="font-semibold text-white text-4xl p-4">Overview</h1>
        <StatsPanel numStudents={numStudents} numHonors={numHonors} numG12={numG12}/>
      </section>
      {/* Functionality Section - search box and add student input fields */}
      <section id="add">
        <h1 className="font-semibold text-white text-4xl p-4">Students</h1>
        {/**Search box here */}
        {/**Add Student */}
      </section>
      {/* List of Students - displays all until filtered by a search term */}
      <section id="students">
        <h1 className="font-semibold text-white text-4xl p-4">List</h1>
        <StudentList list={Students}/>
      </section>
      
    </div>
  );
}

export default StudentPortal;