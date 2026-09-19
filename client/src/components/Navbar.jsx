import React from 'react';
import { Mountain, Youtube, LogIn, LogOut, Radio, UserCheck } from 'lucide-react';

export default function Navbar({ onOpenLogin, user, onLogout, onTriggerLive }) {
  return (
    <header className="bg-[#0B1528] text-white border-b border-slate-800 sticky top-0 z-40 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="bg-amber-500/20 p-2 rounded-xl border border-amber-500/30 shadow-inner">
            <Mountain className="text-amber-400 w-6 h-6" />
          </div>
          <div>
            <h1 className="font-extrabold text-base md:text-lg tracking-tight bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
              Devbhoomi Tradition & Culture
            </h1>
            <p className="text-xs text-gray-400">@pushpabhandari6645</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
          <a href="#feed" className="hover:text-amber-400 transition">Home</a>
          <button 
            onClick={onTriggerLive} 
            className="flex items-center gap-1.5 text-red-400 hover:text-red-300 font-bold transition"
          >
            <Radio size={16} className="animate-pulse" /> Live Now
          </button>
          <a href="#feed" className="hover:text-amber-400 transition">Videos</a>
          <a href="#chowpal" className="hover:text-amber-400 transition">Chowpal</a>
          <a href="#streak" className="hover:text-amber-400 transition">Streak & Points</a>
        </nav>

        {/* User / Login Controls */}
        <div className="flex items-center gap-3">
          <a 
            href="https://www.youtube.com/@pushpabhandari6645?sub_confirmation=1" 
            target="_blank" 
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 bg-red-600 hover:bg-red-700 text-white font-bold px-3.5 py-1.5 rounded-lg text-xs transition shadow"
          >
            <Youtube size={15} /> Subscribe
          </a>

          {user ? (
            <div className="flex items-center gap-2 bg-slate-800/80 px-3 py-1.5 rounded-xl border border-slate-700">
              <UserCheck size={16} className="text-emerald-400" />
              <span className="text-xs font-semibold text-amber-400">{user.name}</span>
              <button 
                onClick={onLogout} 
                title="Logout" 
                className="text-gray-400 hover:text-red-400 ml-1 p-0.5"
              >
                <LogOut size={14} />
              </button>
            </div>
          ) : (
            <button 
              onClick={onOpenLogin}
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-4 py-1.5 rounded-xl text-xs transition flex items-center gap-1.5 shadow"
            >
              <LogIn size={15} /> Login / Sign Up
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
