import Link from 'next/link';
import { Workout } from '@/data/workouts';

interface WorkoutCardProps {
  workout: Workout;
}

export default function WorkoutCard({ workout }: WorkoutCardProps) {
  return (
    <Link href={`/workout/${workout.id}`} className="block group">
      <div className="bg-[#12141C] border border-slate-800/80 rounded-2xl overflow-hidden hover:border-[#CCFF00]/40 transition duration-300 flex flex-col shadow-xl h-full">
        
        {/* Thumbnail Image */}
        <div className="relative h-48 overflow-hidden bg-slate-950">
          <img 
            src={workout.image} 
            alt={workout.title}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-95"
          />
        </div>

        {/* Content Body */}
        <div className="p-5 flex-1 flex flex-col justify-between">
          <div>
            {/* Category Badges (CHEST, ARMS etc.) */}
            <div className="flex flex-wrap gap-1.5 mb-3">
              {Array.isArray(workout.categories) && workout.categories.map((cat, idx) => (
                <span key={idx} className="bg-[#CCFF00] text-black text-[10px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider">
                  {cat}
                </span>
              ))}
            </div>

            {/* Workout Title */}
            <h3 className="text-base font-black text-white tracking-wide uppercase group-hover:text-[#CCFF00] transition">
              {workout.title}
            </h3>
            
            {/* Equipment */}
            <p className="text-slate-400 text-xs mt-1 font-medium">
              {workout.equipment}
            </p>
          </div>

          {/* Bottom Stats Row (Duration, Calories, Rating) */}
          <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-300 font-medium">
            <span className="flex items-center gap-1.5">
              ⏱️ {workout.duration} min
            </span>
            <span className="flex items-center gap-1">
              🔥 {Number(workout.calories) || 150} kcal
            </span>
            <span className="flex items-center gap-1">
              ★ {workout.rating}
            </span>
          </div>

        </div>

      </div>
    </Link>
  );
}