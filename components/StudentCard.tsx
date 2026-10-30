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
  onRemove: (id: number) => void;
}

const StudentCard = ({id, firstName, lastName, average, onRemove}: StudentCardProps) => {
  const [details, setDetails] = useState(false);
  return (
    <div className="w-full h-48 relative flex flex-col rounded-lg p-4 bg-gray-500/25 border-t-4 border-r-4 border-gray-700">
      <div className="absolute top-4 right-4 flex flex-col items-end gap-2">
        {
          (details) && <p className="text-white">
          Grade: {average}
          {(average >= 80) && <HonorBadge/>}
          </p>
        }
      </div>
      {/* Student name */}
      <p className="text-md font-bold text-white p-4">{firstName} {lastName}</p>
      {/* Buttons for student card*/}
      <div className="items-center gap-2">
        <button
          onClick={() => setDetails(true)}
          className="mt-auto rounded-lg px-6 py-1 text-white font-medium bg-blue-600 border border-blue-500 hover:bg-blue-600/40"
        >
          {details ? `Hide Details`: `Show Details`}
        </button>
        <button
          onClick={() => onRemove(id)}
          className="mt-auto rounded-lg px-6 py-1 text-white font-medium bg-red-600 border border-red-500 hover:bg-red-600/40">
          Remove
        </button>
      </div>
    </div> 
  );
}
export default StudentCard;