'use client';

import { useState, useEffect } from 'react';
import Hero from "@/components/Hero";
import WorkoutCard from "@/components/WorkoutCard";
import { fetchWorkouts, Workout } from "@/data/workouts";

export default function Home() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [sortBy, setSortBy] = useState<'Duration' | 'Calories' | 'Rating'>('Duration');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWorkouts()
      .then((data) => {
        setWorkouts(data);
        setLoading(false);
      })
      .catch((e) => {
        setWorkouts([]);
        setLoading(false);
      });
  }, []);

  // Sorting logic based on C1 requirement
  const sortedWorkouts = [...workouts].sort((a, b) => {
    if (sortBy === 'Calories') return b.calories - a.calories;
    if (sortBy === 'Rating') return b.rating - a.rating;
    return a.duration - b.duration; // Default: Duration
  });

  return (
    <div className="min-h-screen bg-[#0B0D13] text-white flex flex-col justify-between">
      <div>
        <Hero />
        <section id="library" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-wider uppercase text-white">
                THE LIBRARY
              </h2>
              <p className="text-slate-400 text-sm mt-1">
                Twelve lifts covering every major muscle group.
              </p>
            </div>

            {/* C1: Sort Dropdown */}
            <div className="flex items-center gap-2 bg-[#12141C] border border-slate-800 px-4 py-2 rounded-xl">
              <span className="text-xs text-slate-400 font-bold uppercase">Sort By:</span>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value as 'Duration' | 'Calories' | 'Rating')}
                className="bg-transparent text-white text-xs font-bold outline-none cursor-pointer"
              >
                <option value="Duration" className="bg-[#12141C]">Duration</option>
                <option value="Calories" className="bg-[#12141C]">Calories</option>
                <option value="Rating" className="bg-[#12141C]">Rating</option>
              </select>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-20 text-slate-400 text-sm">Loading workouts library...</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedWorkouts.map((workout) => (
                <WorkoutCard key={workout.id} workout={workout} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}