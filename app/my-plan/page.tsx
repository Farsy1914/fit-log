'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Workout } from '@/data/workouts';
import toast from 'react-hot-toast';

export default function MyPlanPage() {
  const [activeTab, setActiveTab] = useState<'plan' | 'saved'>('plan');
  const [planWorkouts, setPlanWorkouts] = useState<Workout[]>([]);
  const [savedWorkouts, setSavedWorkouts] = useState<Workout[]>([]);
  
  // C1: Sort State
  const [sortBy, setSortBy] = useState<'Duration' | 'Calories' | 'Rating'>('Duration');

  const loadData = () => {
    const savedPlan = localStorage.getItem('fitlog_plan');
    if (savedPlan) {
      try { setPlanWorkouts(JSON.parse(savedPlan)); } catch (e) { setPlanWorkouts([]); }
    } else {
      setPlanWorkouts([]);
    }

    const savedSaved = localStorage.getItem('fitlog_saved');
    if (savedSaved) {
      try { setSavedWorkouts(JSON.parse(savedSaved)); } catch (e) { setSavedWorkouts([]); }
    } else {
      setSavedWorkouts([]);
    }
  };

  useEffect(() => {
    loadData();
    window.addEventListener('storage_updated', loadData);
    return () => window.removeEventListener('storage_updated', loadData);
  }, []);

  const totalExercises = planWorkouts.length;
  const totalMinutes = planWorkouts.reduce((acc, curr) => acc + (Number(curr.duration) || 0), 0);
  const totalCalories = planWorkouts.reduce((acc, curr) => acc + (Number(curr.calories) || 0), 0);

  const removeFromPlan = (id: string, title: string) => {
    const updated = planWorkouts.filter(w => w.id !== id);
    setPlanWorkouts(updated);
    localStorage.setItem('fitlog_plan', JSON.stringify(updated));
    window.dispatchEvent(new Event('storage_updated'));
    toast.success(`Removed "${title}" from plan`);
  };

  const removeFromSaved = (id: string, title: string) => {
    const updated = savedWorkouts.filter(w => w.id !== id);
    setSavedWorkouts(updated);
    localStorage.setItem('fitlog_saved', JSON.stringify(updated));
    window.dispatchEvent(new Event('storage_updated'));
    toast.success(`Removed "${title}" from saved`);
  };

  // C1: Sorting logic for active list
  const currentList = (activeTab === 'plan' ? planWorkouts : savedWorkouts).slice().sort((a, b) => {
    if (sortBy === 'Calories') return b.calories - a.calories;
    if (sortBy === 'Rating') return b.rating - a.rating;
    return a.duration - b.duration; // Default: Duration
  });

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-white relative">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-black tracking-wider uppercase text-white">
          MY PLAN
        </h1>
        <p className="text-slate-400 text-xs sm:text-sm mt-1">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      <div className="bg-[#12141C] border border-slate-800/80 rounded-2xl p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 shadow-xl">
        <div>
          <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">Exercises</p>
          <p className="text-3xl sm:text-4xl font-black text-[#CCFF00] mt-2">{totalExercises}</p>
        </div>
        <div>
          <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">Minutes</p>
          <p className="text-3xl sm:text-4xl font-black text-white mt-2">{totalMinutes}</p>
        </div>
        <div>
          <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">Calories</p>
          <p className="text-3xl sm:text-4xl font-black text-white mt-2">
            {Number.isNaN(totalCalories) ? 0 : totalCalories}
          </p>
        </div>
      </div>

      {/* Tabs and C1: Sort Dropdown */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div className="bg-[#12141C] p-1 rounded-xl border border-slate-800 flex items-center space-x-1">
          <button 
            onClick={() => setActiveTab('plan')}
            className={`px-5 py-2 rounded-lg text-xs font-bold transition ${
              activeTab === 'plan' 
                ? 'bg-[#1A1D26] text-white shadow-md border border-slate-700/60' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Today's Plan
          </button>
          <button 
            onClick={() => setActiveTab('saved')}
            className={`px-5 py-2 rounded-lg text-xs font-bold transition ${
              activeTab === 'saved' 
                ? 'bg-[#1A1D26] text-white shadow-md border border-slate-700/60' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Saved
          </button>
        </div>

        {/* Sort Dropdown for My Plan / Saved */}
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

      {currentList.length === 0 ? (
        <div className="bg-[#12141C] border border-slate-800/80 rounded-2xl p-16 text-center shadow-xl">
          <h3 className="text-lg font-black tracking-wider uppercase text-white mb-2">
            NOTHING HERE YET
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm mb-6">
            Browse the library and add a lift to get today moving.
          </p>
          <Link 
            href="/" 
            className="inline-block bg-[#CCFF00] hover:bg-[#b3e600] text-black font-black text-xs uppercase tracking-wider py-3 px-6 rounded-xl transition shadow-lg shadow-[#CCFF00]/10"
          >
            Go to workouts
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {currentList.map((workout) => (
            <div 
              key={workout.id} 
              className="bg-[#12141C] border border-slate-800/80 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg hover:border-slate-700 transition"
            >
              <div className="flex items-center space-x-4 w-full sm:w-auto">
                <div className="w-20 h-16 rounded-xl overflow-hidden bg-slate-950 shrink-0 border border-slate-800">
                  <img src={workout.image} alt={workout.title} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-black text-sm sm:text-base tracking-wide uppercase text-white">
                    {workout.title}
                  </h4>
                  <p className="text-slate-400 text-xs mt-0.5">{workout.equipment}</p>
                  <div className="flex items-center space-x-4 text-xs text-slate-300 mt-2 font-medium">
                    <span>⏱️ {workout.duration} min</span>
                    <span>🔥 {workout.calories} kcal</span>
                    <span>★ {workout.rating}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3 w-full sm:w-auto justify-end">
                <Link 
                  href={`/workout/${workout.id}`}
                  className="bg-[#1A1D26] hover:bg-slate-800 text-white font-bold text-xs px-4 py-2 rounded-xl border border-slate-700 transition"
                >
                  View Details
                </Link>

                {activeTab === 'plan' && (
                  <button 
                    onClick={() => toast.success(`Marked "${workout.title}" as Done! 🎉`)}
                    className="bg-[#CCFF00] hover:bg-[#b3e600] text-black font-black text-xs px-4 py-2 rounded-xl transition shadow-md"
                  >
                    ✓ Mark as Done
                  </button>
                )}

                <button 
                  onClick={() => activeTab === 'plan' ? removeFromPlan(workout.id, workout.title) : removeFromSaved(workout.id, workout.title)}
                  className="text-slate-500 hover:text-red-400 p-2 transition font-bold text-sm"
                  title="Remove"
                >
                  ✕
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}