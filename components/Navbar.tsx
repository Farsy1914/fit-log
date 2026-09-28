'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [planCount, setPlanCount] = useState(0);
  const [savedCount, setSavedCount] = useState(0);

  useEffect(() => {
    const updateCounts = () => {
      const plan = JSON.parse(localStorage.getItem('fitlog_plan') || '[]');
      const saved = JSON.parse(localStorage.getItem('fitlog_saved') || '[]');
      setPlanCount(plan.length);
      setSavedCount(saved.length);
    };

    updateCounts();

    window.addEventListener('storage_updated', updateCounts);
    window.addEventListener('storage', updateCounts);

    return () => {
      window.removeEventListener('storage_updated', updateCounts);
      window.removeEventListener('storage', updateCounts);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[#0B0D13]/90 backdrop-blur-md border-b border-slate-800/80 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo and Text */}
        <Link href="/" className="flex items-center space-x-2 font-black text-xl tracking-wider text-white">
          <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
          <span>FITLOG</span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
          <Link href="/" className="hover:text-[#CCFF00] transition">Workouts</Link>
          <Link href="/my-plan" className="hover:text-[#CCFF00] transition">My Plan</Link>
        </nav>

        {/* Plan and Saved Badges */}
        <div className="flex items-center space-x-4 text-xs font-semibold">
          <Link href="/my-plan" className="flex items-center gap-1.5 bg-[#12141C] border border-slate-800 px-3 py-1.5 rounded-full text-slate-300 hover:border-[#CCFF00]/50 transition">
            <span>Plan</span>
            <span className="bg-[#CCFF00] text-black w-5 h-5 rounded-full flex items-center justify-center font-bold">{planCount}</span>
          </Link>
          <Link href="/my-plan" className="flex items-center gap-1.5 bg-[#12141C] border border-slate-800 px-3 py-1.5 rounded-full text-slate-300 hover:border-[#CCFF00]/50 transition">
            <span>Saved</span>
            <span className="bg-[#1A1D26] text-white border border-slate-700 w-5 h-5 rounded-full flex items-center justify-center font-bold">{savedCount}</span>
          </Link>
        </div>
      </div>
    </header>
  );
}