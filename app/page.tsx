import Hero from "@/components/Hero";
import WorkoutCard from "@/components/WorkoutCard";
import Footer from "@/components/Footer";
import { workoutsData } from "@/data/workouts";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B0D13] text-white flex flex-col justify-defaults">
      <div>
        {/* Hero Section */}
        <Hero />

        {/* Workout Library Section */}
        <section id="library" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-black tracking-wider uppercase text-white">
              THE LIBRARY
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Twelve lifts covering every major muscle group.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {workoutsData.map((workout) => (
              <WorkoutCard key={workout.id} workout={workout} />
            ))}
          </div>
        </section>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}