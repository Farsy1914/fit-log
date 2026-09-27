import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white py-20 lg:py-28 border-b border-slate-800/60">
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block bg-indigo-500/10 text-indigo-400 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest mb-6 border border-indigo-500/20">
          No-Nonsense Gym Companion
        </span>
        
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight">
          Lock in your lifts. <span className="text-indigo-400">Crush your goals.</span>
        </h1>
        
        <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto">
          Pick elite lifts, build today's targeted routine, and track your weekly progress with zero friction.
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <a 
            href="#library" 
            className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-8 py-3.5 rounded-xl transition shadow-lg shadow-indigo-600/25"
          >
            Browse Workouts
          </a>
          <Link 
            href="/my-plan" 
            className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-slate-300 font-medium px-8 py-3.5 rounded-xl transition border border-slate-800"
          >
            View My Plan
          </Link>
        </div>

        {/* Quick Highlights Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-10 border-t border-slate-900 text-left">
          <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800/80">
            <p className="text-indigo-400 text-2xl font-bold">12+</p>
            <p className="text-slate-400 text-xs mt-1">Targeted Lifts</p>
          </div>
          <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800/80">
            <p className="text-indigo-400 text-2xl font-bold">100%</p>
            <p className="text-slate-400 text-xs mt-1">Customizable Plan</p>
          </div>
          <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800/80">
            <p className="text-indigo-400 text-2xl font-bold">Real-Time</p>
            <p className="text-slate-400 text-xs mt-1">Calorie & Time Tracking</p>
          </div>
          <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800/80">
            <p className="text-indigo-400 text-2xl font-bold">Instant</p>
            <p className="text-slate-400 text-xs mt-1">Feedback & Toasts</p>
          </div>
        </div>
      </div>
    </section>
  );
}