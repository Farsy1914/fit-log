import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0B0D13] text-white py-16 lg:py-24 border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Content */}
        <div className="lg:col-span-7">
          <span className="inline-block text-[#CCFF00] text-xs font-bold uppercase tracking-widest mb-4">
            Workout Library
          </span>
          
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-none">
            TRAIN WITH INTENT. <br />
            <span className="text-white">LOG EVERY SET.</span>
          </h1>
          
          <p className="mt-6 text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed">
            FitLog is a dark, no-nonsense gym companion; pick a lift, lock it into today's plan, and watch the week's work add up.
          </p>

          <div className="mt-8">
            <a 
              href="#library" 
              className="inline-block bg-[#CCFF00] hover:bg-[#b3e600] text-black font-bold px-6 py-3.5 rounded-xl transition shadow-lg shadow-[#CCFF00]/10 text-sm"
            >
              BROWSE WORKOUTS
            </a>
          </div>
        </div>

        {/* Right Illustration / Banner Image */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-md bg-[#12141C] border border-slate-800/80 rounded-2xl p-6 shadow-2xl flex items-center justify-center">
            <img 
              src="/banner.png" 
              alt="Fitness Banner"
              className="w-full h-72 object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
