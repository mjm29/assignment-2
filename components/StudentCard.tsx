/**
 * Author: Marc Millare
 * Date: 10-27-2026
 * Description:
 * -This component allows rendering of student details displayed in a card format.
 * -Inputs: This component takes in firstName, lastName, average of a Student.
 * -Output: Renders a card with dynamic width displaying full name of the student.
 *          It also contains two buttons, 'Show Details' renders student average, and
 *          a corresponding honour badge if applicable. It also has a 'remove' button,
 *          which removes the student from the list.
 */
"use client"
import HonorBadge from "./HonorBadge";
import { useState } from "react";
interface StudentCardProps {
  id: number;
  firstName: string;
  lastName: string;
  average: number;
  grade: number;
  onRemove: (id: number) => void;
}

const StudentCard = ({id, firstName, lastName, average, grade, onRemove}: StudentCardProps) => {
  const [details, setDetails] = useState(false);
  return (
    <div className="w-full h-48 relative flex flex-col rounded-lg p-4 bg-gray-500/25 border-t-4 border-r-4 border-gray-700">
      <div className="absolute top-4 right-4 flex flex-col items-end gap-2">
        {
          (details) && <p className="text-white">
          Average: {average}
          {(average >= 80) && <HonorBadge/>}
          </p>
        }
      </div>
      {/* Student name */}
      <p className="text-md font-bold text-white px-4 py-2">{firstName} {lastName}</p>
      <p className="text-xs text-white px-4">Grade: {grade}</p>
      {/* Buttons for student card*/}
      <div className="absolute bottom-4 self-center flex gap-2">
        <button
          onClick={() => setDetails(!details)}
          className="mt-auto rounded-lg px-6 py-1 text-white font-medium bg-blue-600 border border-blue-500 hover:bg-blue-600/40 cursor-pointer"
        >
          {details ? `Hide Details`: `Show Details`}
        </button>
        <button
          onClick={() => onRemove(id)}
          className="mt-auto rounded-lg px-6 py-1 text-white font-medium bg-red-600 border border-red-500 hover:bg-red-600/40 cursor-pointer">
          Remove
        </button>
      </div>
    </div> 
  );
}
export default StudentCard;