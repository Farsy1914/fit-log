import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 font-bold text-xl tracking-wider text-indigo-400">
          <span>💪 FitLog</span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
          <Link href="/" className="hover:text-indigo-400 transition">Home</Link>
          <Link href="#library" className="hover:text-indigo-400 transition">Workouts</Link>
          <Link href="/my-plan" className="hover:text-indigo-400 transition">My Plan</Link>
        </nav>

        {/* Action Button / Badge */}
        <div className="flex items-center space-x-4">
          <Link 
            href="/my-plan"
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition shadow-md shadow-indigo-600/20"
          >
            Today's Plan
          </Link>
        </div>
      </div>
    </header>
  );
}