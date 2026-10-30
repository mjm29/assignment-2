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

import { useState } from "react";
import StudentList from "./StudentList";
import StatsPanel from "./StatsPanel";
import SearchBox from "./SearchBox";
import AddStudent from "./AddStudent";
import { Student, Students } from "@/data/students";

const StudentPortal = () => {
  // State
  const [students, setStudents] = useState<Student[]>(Students);
  const [search, setSearch] = useState("");
 
  // Derived values (worked out on every render, not state)
  const numStudents = students.length;
  const numHonors = students.filter((student) => student.average >= 80).length;
  const numG12 = students.filter((student) => student.grade === 12).length;
 
  // Case-insensitive search on the full name
  const searchText = search.trim().toLowerCase();
  const visibleStudents = students.filter((student) =>
    `${student.firstName} ${student.lastName}`.toLowerCase().includes(searchText)
  );
 
  // Event handlers (only this component changes the list)
  // Add a student with an id that no other student has
  const handleAdd = (
    firstName: string,
    lastName: string,
    grade: number,
    average: number
  ) => {
    const newId = Math.max(0, ...students.map((student) => student.id)) + 1;
    const newStudent: Student = { id: newId, firstName, lastName, grade, average };
    setStudents([...students, newStudent]);
  };

  // Remove one student by id
  const handleRemove = (id: number) => {
    setStudents(students.filter((student) => student.id !== id));
  };
 
  // Remove every student
  const handleClearAll = () => {
    setStudents([]);
  };
 
  return (
    <div className="flex flex-col gap-4">
      {/* Overview Section - stats panel */}
      <section id="overview">
        <h1 className="font-semibold text-white text-4xl p-4">Overview</h1>
        <StatsPanel numStudents={numStudents} numHonors={numHonors} numG12={numG12}/>
      </section>
      {/* Students Section - search box, clear all and the list (filtered by the search term) */}
      <section id="students">
        <h1 className="font-semibold text-white text-4xl p-4">Students</h1>
        <div className="flex flex-col sm:flex-row sm:items-end gap-4 px-4 pb-4">
          <SearchBox value={search} onChange={setSearch}/>
          <button
            onClick={handleClearAll}
            className="self-start rounded-lg bg-red-600 hover:bg-red-500/40 text-white font-medium px-6 py-2 mt-8 cursor-pointer">
            Clear all
          </button>
        </div>
        <StudentList list={visibleStudents} onRemove={handleRemove}/>
      </section>
      {/* Add a student Section - add student input fields */}
      <section id="add" className="pb-8">
        <h1 className="font-semibold text-white text-4xl p-4">Add a student</h1>
        <div className="px-4">
          <AddStudent onAdd={handleAdd}/>
        </div>
      </section>     
    </div>
  );
}

export default StudentPortal;