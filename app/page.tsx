import StatsPanel from "@/components/StatsPanel";
import Image from "next/image";

export default function Home() {
  return <main className="min-h-screen bg-black">
    <section id="overview">
      <h1 className="font-semibold text-white text-4xl p-4">Overview</h1>
      <StatsPanel numStudents={10} numHonors={3} numG12={2}/>
    </section>
    <section id="students">
      
    </section>
    <section id="add">
      
    </section>
  </main>;
}
