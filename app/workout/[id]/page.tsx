'use client';

import { useParams, useRouter } from 'next/navigation';
import { fetchWorkoutById, Workout } from '@/data/workouts';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast'; // Toast ইমপোর্ট করা হলো

export default function WorkoutDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;
  
  const [workout, setWorkout] = useState<Workout | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchWorkoutById(id)
        .then((data) => {
          setWorkout(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Failed to fetch workout:", err);
          setLoading(false);
        });
    }
  }, [id]);

  const handleAddToPlan = () => {
    if (!workout) return;
    const existingPlan = JSON.parse(localStorage.getItem('fitlog_plan') || '[]');
    const exists = existingPlan.some((w: Workout) => w.id === workout.id);
    
    if (!exists) {
      existingPlan.push(workout);
      localStorage.setItem('fitlog_plan', JSON.stringify(existingPlan));
      window.dispatchEvent(new Event('storage_updated'));
      toast.success(`Added "${workout.title}" to today's plan! 🎉`); // সাকসেস টোস্ট
    } else {
      toast.error("This workout is already in your plan!"); // অলরেডি থাকলে এরর টোস্ট
    }
    router.push('/my-plan');
  };

  const handleSaveForLater = () => {
    if (!workout) return;
    const existingSaved = JSON.parse(localStorage.getItem('fitlog_saved') || '[]');
    const exists = existingSaved.some((w: Workout) => w.id === workout.id);
    
    if (!exists) {
      existingSaved.push(workout);
      localStorage.setItem('fitlog_saved', JSON.stringify(existingSaved));
      window.dispatchEvent(new Event('storage_updated'));
      toast.success(`Saved "${workout.title}" for later! 🔖`); // সাকসেস টোস্ট
    } else {
      toast.error("This workout is already saved!"); // অলরেডি থাকলে এরর টোস্ট
    }
    router.push('/my-plan');
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center text-white">
        <p className="text-slate-400">Loading workout details...</p>
      </div>
    );
  }

  if (!workout) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center text-white">
        <h1 className="text-2xl font-black text-red-500">Workout Not Found</h1>
        <p className="text-slate-400 mt-2">The workout you are looking for does not exist.</p>
        <Link href="/" className="inline-block mt-6 bg-[#CCFF00] text-black font-bold px-6 py-2.5 rounded-xl">
          Back to Library
        </Link>
      </div>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-white">
      <Link href="/" className="text-xs text-slate-400 hover:text-[#CCFF00] transition mb-6 inline-block">
        ← Back to Workouts
      </Link>

      <div className="bg-[#12141C] border border-slate-800/80 rounded-3xl p-6 sm:p-10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5 flex flex-col">
          <div className="rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 h-80 sm:h-[450px]">
            <img src={workout.image} alt={workout.title} className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              {Array.isArray(workout.categories) && workout.categories.map((cat, idx) => (
                <span key={idx} className="bg-[#CCFF00] text-black text-[10px] font-black px-3 py-1 rounded-md uppercase tracking-wide">
                  {cat}
                </span>
              ))}
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-white tracking-wide uppercase">
              {workout.title}
            </h1>
            <p className="text-slate-400 text-xs sm:text-sm mt-2 leading-relaxed">
              {workout.description}
            </p>

            <div className="mt-6 border border-slate-800/80 rounded-xl overflow-hidden divide-y divide-slate-800/80 text-xs">
              <div className="flex justify-between px-4 py-3 bg-[#12141C]">
                <span className="text-slate-400 font-medium">EQUIPMENT</span>
                <span className="text-white font-bold">{workout.equipment}</span>
              </div>
              <div className="flex justify-between px-4 py-3 bg-[#12141C]">
                <span className="text-slate-400 font-medium">DIFFICULTY</span>
                <span className="text-white font-bold">{workout.difficulty}</span>
              </div>
              <div className="flex justify-between px-4 py-3 bg-[#12141C]">
                <span className="text-slate-400 font-medium">DURATION</span>
                <span className="text-white font-bold">{workout.duration} min</span>
              </div>
              <div className="flex justify-between px-4 py-3 bg-[#12141C]">
                <span className="text-slate-400 font-medium">CALORIES</span>
                <span className="text-white font-bold">{workout.calories} kcal</span>
              </div>
              <div className="flex justify-between px-4 py-3 bg-[#12141C]">
                <span className="text-slate-400 font-medium">RATING</span>
                <span className="text-white font-bold">★ {workout.rating}</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-5 border-t border-slate-800 flex flex-col sm:flex-row gap-4">
            <button 
              onClick={handleAddToPlan}
              className="flex-1 bg-[#CCFF00] hover:bg-[#b3e600] text-black font-black py-3.5 px-6 rounded-xl text-xs transition shadow-lg shadow-[#CCFF00]/10 text-center uppercase tracking-wider cursor-pointer"
            >
              + Add to today's plan
            </button>
            <button 
              onClick={handleSaveForLater}
              className="flex-1 bg-[#1A1D26] hover:bg-slate-800 text-white font-bold py-3.5 px-6 rounded-xl text-xs border border-slate-700 transition text-center flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>🔖</span> Save for later
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}