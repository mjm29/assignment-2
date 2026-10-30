/**
 * Author: Alexandru Josu
 * Date: 10-28-2026
 * Description:
 * - This component is the panel used to add a new student to the list.
 * - Inputs: A callback (onAdd) that receives the first name, last name, grade and average.
 * - Processing: Each of the four inputs is controlled by its own piece of state. Clicking
 *               "Add student" does nothing if either name is empty (or the numbers are out of
 *               range); otherwise it calls onAdd and puts every input back to its starting value.
 * - Output: Four labelled inputs and an Add student button. It never changes the list itself;
 *           StudentPortal does that when onAdd is called.
 */
"use client";
import { useState } from "react";

interface AddStudentProps {
  onAdd: (
    firstName: string,
    lastName: string,
    grade: number,
    average: number
  ) => void;
}

// Starting values for the two number inputs
const DEFAULT_GRADE = "9";
const DEFAULT_AVERAGE = "70";

const AddStudent = ({ onAdd }: AddStudentProps) => {
  // One piece of state per input (numbers are kept as text while typing)
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [grade, setGrade] = useState(DEFAULT_GRADE);
  const [average, setAverage] = useState(DEFAULT_AVERAGE);

  // Runs when the Add student button is clicked
  const handleAdd = () => {
    const trimmedFirst = firstName.trim();
    const trimmedLast = lastName.trim();
    const gradeNumber = Number(grade);
    const averageNumber = Number(average);

    // Empty name: nothing is added
    if (trimmedFirst === "" || trimmedLast === "") return;
    // Grade must be 9 to 12 and average 0 to 100, otherwise nothing is added
    if (grade === "" || gradeNumber < 9 || gradeNumber > 12) return;
    if (average === "" || averageNumber < 0 || averageNumber > 100) return;

    // Ask the parent to add the student
    onAdd(trimmedFirst, trimmedLast, gradeNumber, averageNumber);

    // Put every input back to its starting value
    setFirstName("");
    setLastName("");
    setGrade(DEFAULT_GRADE);
    setAverage(DEFAULT_AVERAGE);
  };

  const inputStyle =
    "w-full rounded-lg bg-zinc-800 text-white placeholder:text-zinc-400 border border-zinc-600 px-4 py-2 focus:outline-none focus:border-blue-300";

  return (
    <div className="flex flex-col gap-4 w-full max-w-2xl">
      {/* Four controlled inputs: one column on a phone, two on wider screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="firstName" className="text-white font-medium">
            First name
          </label>
          <input
            id="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={inputStyle}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="lastName" className="text-white font-medium">
            Last name
          </label>
          <input
            id="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className={inputStyle}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="grade" className="text-white font-medium">
            Grade (9-12)
          </label>
          <input
            id="grade"
            type="number"
            min={9}
            max={12}
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            className={inputStyle}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="average" className="text-white font-medium">
            Average (0-100)
          </label>
          <input
            id="average"
            type="number"
            min={0}
            max={100}
            value={average}
            onChange={(e) => setAverage(e.target.value)}
            className={inputStyle}
          />
        </div>
      </div>
      <button
        onClick={handleAdd}
        className="self-start rounded-lg bg-blue-500 hover:bg-blue-400 text-white font-medium px-6 py-2 cursor-pointer"
      >
        Add student
      </button>
    </div>
  );
};

export default AddStudent;
