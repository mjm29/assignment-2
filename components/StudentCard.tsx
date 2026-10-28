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
import HonorBadge from "./HonorBadge";
interface StudentCardProps {
  firstName: string;
  lastName: string;
  average: number;
}

const StudentCard = ({firstName, lastName, average}: StudentCardProps) => {
  return (
    <div className="w-full h-48 relative flex flex-col rounded-lg p-4 bg-gray-500/25 border-t-4 border-r-4 border-gray-700">
      <p className="text-md font-bold text-white p-4">{firstName} {lastName}</p>
      <div className="gap-4">  
        {(average > 80) && <HonorBadge/>}
        <p className="text-white mt-6 absolute bottom-4 right-4">Grade: {average}</p>
      </div>
    </div>
  );
}
export default StudentCard;