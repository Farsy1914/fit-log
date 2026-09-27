import { Workout } from '@/data/workouts';

interface WorkoutCardProps {
  workout: Workout;
}

export default function WorkoutCard({ workout }: WorkoutCardProps) {
  return (
    <div className="bg-[#12141C] border border-slate-800/80 rounded-2xl overflow-hidden hover:border-[#CCFF00]/40 transition duration-300 flex flex-col group shadow-xl">
      {/* Thumbnail Image */}
      <div className="relative h-48 overflow-hidden bg-slate-950">
        <img 
          src={workout.image} 
          alt={workout.title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-90"
        />
        {/* Dynamic Category Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 max-w-[85%]">
          {workout.categories.map((cat, idx) => (
            <span key={idx} className="bg-[#CCFF00] text-black text-[10px] font-extrabold px-2.5 py-1 rounded-md uppercase tracking-wide">
              {cat}
            </span>
          ))}
        </div>
      </div>

      {/* Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-base font-black text-white tracking-wide uppercase">
            {workout.title}
          </h3>
          <p className="text-slate-400 text-xs mt-1">
            {workout.equipment}
          </p>
        </div>

        {/* Stats Row */}
        <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-300 font-medium">
          <span className="flex items-center gap-1.5">
            ⏱️ {workout.duration} min
          </span>
          <span className="flex items-center gap-1.5">
            🔥 {workout.calories} kcal
          </span>
          <span className="text-slate-300 flex items-center gap-1">
            ★ {workout.rating}
          </span>
        </div>
      </div>
    </div>
  );
}