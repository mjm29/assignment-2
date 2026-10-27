"use client"

interface StatsPanelProps {
  numStudents: number;
  numHonors: number;
  numG12: number;
}

const StatsPanel = ({numStudents, numHonors, numG12}: StatsPanelProps) => {
  return(
    <div className="flex gap-8 p-8">
      {/* Display total students */}
      <div className="relative flex flex-col bg-zinc-800 rounded-lg p-4 h-36 w-36">
        <p className="items-start text-white font-bold">Students</p>
        <p className="mt-2 text-3xl text-white font-bold position absolute bottom-4 right-4">{numStudents}</p>
      </div>
      {/* Display num of honor students */}
      <div className="relative flex flex-col bg-zinc-800 rounded-lg p-4 h-36 w-36 ">
        <p className="items-start text-white font-bold">Honor Students</p>
        <p className="mt-2 text-3xl text-white font-bold position absolute bottom-4 right-4">{numHonors}</p>
      </div>
      {/* Display num of grade 12 students */}
      <div className="relative flex flex-col bg-zinc-800 rounded-lg p-4 h-36 w-36">
        <p className="items-start text-white font-bold">Grade 12 Students</p>
        <p className="mt-2 text-3xl text-white font-bold position absolute bottom-4 right-4">{numG12}</p>
      </div>
    </div>
  );
}

export default StatsPanel;