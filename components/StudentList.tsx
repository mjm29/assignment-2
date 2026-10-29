/**
 * Author: Marc Millare
 * Date: 10-27-26
 * Description: 
 * - This component pulls mock data from the students.ts file to render the Student objects from a list.
 * - Input: The component takes in a list of type Student[].
 * - Output: The component displays StudentCards in a grid format. Number of columns adjust depending on viewport size.
 */

import { Student, Students } from "@/data/students";
import StudentCard from "./StudentCard";

interface StudentListProps {
  list: Student[];
  onRemove: (id: number) => void;
}

const StudentList = ({list, onRemove}: StudentListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 items-center">
      {list.map((student: Student) => (
        <StudentCard 
        key={student.id} 
        id={student.id}
        firstName={student.firstName} 
        lastName={student.lastName} 
        average={student.average}
        onRemove={onRemove}
        />
      ))}
    </div>
  );
}
export default StudentList;