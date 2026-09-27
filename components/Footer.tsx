export default function Footer() {
  return (
    <footer className="bg-[#0B0D13] border-t border-slate-800/80 py-8 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo and Name */}
        <div className="flex items-center space-x-2.5">
          <img src="/logo.png" alt="FitLog Logo" className="h-6 w-auto object-contain" />
          <span className="font-black text-base tracking-wider text-white">FITLOG</span>
        </div>

        {/* Copyright Text */}
        <p className="text-slate-500 text-xs">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}