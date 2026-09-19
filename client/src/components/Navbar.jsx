import React from 'react';
import { Mountain, Youtube, LogIn } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="bg-[#0B1528] text-white border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-amber-500/20 p-2 rounded-lg border border-amber-500/30">
            <Mountain className="text-amber-400 w-6 h-6" />
          </div>
          <div>
            <h1 className="font-bold text-base md:text-lg tracking-tight">Devbhoomi Tradition & Culture</h1>
            <p className="text-xs text-gray-400">@pushpabhandari6645</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-200">
          <a href="#home" className="text-amber-400 border-b-2 border-amber-400 pb-0.5">Home</a>
          <a href="#live" className="hover:text-amber-400 transition">Live</a>
          <a href="#videos" className="hover:text-amber-400 transition">Videos</a>
          <a href="#community" className="hover:text-amber-400 transition">Community</a>
          <a href="#dashboard" className="hover:text-amber-400 transition">Dashboard</a>
        </nav>

        <div className="flex items-center gap-3">
          <a 
            href="https://www.youtube.com/@pushpabhandari6645" 
            target="_blank" 
            rel="noreferrer"
            className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-4 py-1.5 rounded-lg text-sm transition flex items-center gap-1.5 shadow"
          >
            <LogIn size={16} /> Login
          </a>
        </div>
      </div>
    </header>
  );
}
