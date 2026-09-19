import React from 'react';
import { Activity, ListMusic, Heart, Users, User, PlusCircle } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="w-full lg:w-64 bg-[#091122] text-white p-5 rounded-2xl border border-slate-800 shadow-sm flex flex-col gap-6 self-start">
      <div className="text-center pb-5 border-b border-slate-800">
        <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-amber-500 to-yellow-300 p-0.5 mb-3">
          <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center">
            <span className="font-extrabold text-2xl text-amber-400">PB</span>
          </div>
        </div>
        <h3 className="font-bold text-base text-gray-100">Pushpa Bhandari</h3>
        <p className="text-xs text-gray-400">12K Subscribers</p>
      </div>

      <nav className="flex flex-col gap-1.5 text-sm font-medium">
        <button className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-amber-500/10 text-amber-400 font-semibold border border-amber-500/20 text-left">
          <Activity size={18}/> Activity Feed
        </button>
        <button className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-gray-300 hover:bg-slate-800 hover:text-white transition text-left">
          <ListMusic size={18}/> Custom Playlist
        </button>
        <button className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-gray-300 hover:bg-slate-800 hover:text-white transition text-left">
          <Heart size={18}/> Favorites
        </button>
        <button className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-gray-300 hover:bg-slate-800 hover:text-white transition text-left">
          <Users size={18}/> Community Hub
        </button>
        <button className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-gray-300 hover:bg-slate-800 hover:text-white transition text-left">
          <User size={18}/> Account
        </button>
      </nav>
    </aside>
  );
}
