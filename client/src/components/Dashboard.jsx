import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Eye, MessageSquare, ThumbsUp, Flame, Trophy, Calendar, Users, Music2 } from 'lucide-react';

export default function Dashboard() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/api/videos')
      .then(res => {
        setVideos(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('API Error, using fallback', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex-1 flex flex-col gap-6">
      {/* Top Banner Row */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Dashboard: Welcome, Pushpa! 👋</h2>
          <p className="text-xs text-gray-500">Track tradition analytics, community responses, and video updates</p>
        </div>
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-4 py-2 rounded-lg transition shadow">
          + Even Channel
        </button>
      </div>

      {/* Analytics 4-Card Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <span className="text-xs font-medium text-gray-500 block">Latest Video Views</span>
          <p className="text-xl font-extrabold text-gray-800 mt-1">154.38K</p>
          <span className="text-[10px] text-emerald-600 font-semibold">+12% this week</span>
        </div>

        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <span className="text-xs font-medium text-gray-500 block">Recent Comments</span>
          <p className="text-xl font-extrabold text-gray-800 mt-1">160</p>
          <span className="text-[10px] text-gray-400">from devotees</span>
        </div>

        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <span className="text-xs font-medium text-gray-500 block">Total Subscribers</span>
          <p className="text-xl font-extrabold text-gray-800 mt-1">34K</p>
          <span className="text-[10px] text-emerald-600 font-semibold">+450 new</span>
        </div>

        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <span className="text-xs font-medium text-gray-500 block">New Followers</span>
          <p className="text-xl font-extrabold text-gray-800 mt-1">169</p>
          <span className="text-[10px] text-blue-600 font-semibold">Live in Delhi & UK</span>
        </div>
      </div>

      {/* Main Center Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Left 2 Cols: Content Feed */}
        <div className="xl:col-span-2 flex flex-col gap-6">
          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-900 text-base">Latest Content Feed</h3>
              <span className="text-xs text-amber-600 font-semibold cursor-pointer hover:underline">View All</span>
            </div>

            <div className="flex flex-col gap-3">
              {videos.map((vid) => (
                <div key={vid._id} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-3 rounded-xl bg-gray-50 border border-gray-100 hover:border-amber-300 transition hover:shadow-sm">
                  <div className="relative w-full sm:w-36 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-gray-200">
                    <img src={vid.thumbnail} alt={vid.title} className="w-full h-full object-cover" />
                    <span className="absolute bottom-1 right-1 bg-black/80 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded">
                      {vid.duration}
                    </span>
                  </div>

                  <div className="flex-1">
                    <span className="inline-block bg-amber-100 text-amber-800 font-semibold text-[11px] px-2 py-0.5 rounded mb-1">
                      {vid.category}
                    </span>
                    <h4 className="font-bold text-sm text-gray-900 hover:text-amber-600 transition">
                      {vid.title}
                    </h4>
                    <p className="text-xs text-gray-500 line-clamp-1 mt-0.5">
                      नंदा देवी जागर, मंगल गीत और कुमाऊँनी संस्कार गायन
                    </p>

                    <div className="flex items-center gap-4 text-xs text-gray-500 mt-2 font-medium">
                      <span className="flex items-center gap-1"><Eye size={14}/> {vid.views}</span>
                      <span className="flex items-center gap-1"><MessageSquare size={14}/> {vid.comments || '120'}</span>
                      <span className="flex items-center gap-1"><ThumbsUp size={14}/> {vid.likes}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Community Chowpal Forum */}
          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-gray-900 text-base">Community Chowpal (Forum & Discussions)</h3>
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">1.2K Active Today</span>
            </div>

            <div className="space-y-3">
              <div className="p-3 bg-amber-50/50 rounded-xl border border-amber-100 flex items-start justify-between">
                <div>
                  <h5 className="font-bold text-sm text-gray-800">Garhwali Songs Lyrics Request</h5>
                  <p className="text-xs text-gray-600">Devotees requested full lyrics of traditional Badri-Kedar arti</p>
                </div>
                <span className="text-[10px] text-gray-400">1 day ago</span>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-gray-100 flex items-start justify-between">
                <div>
                  <h5 className="font-bold text-sm text-gray-800">Nanda Devi Festival & Fair Discussion</h5>
                  <p className="text-xs text-gray-600">Sharing memories from the historic Rajjaat journey</p>
                </div>
                <span className="text-[10px] text-gray-400">2 days ago</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Col: Gamified Retention & Calendar */}
        <div className="flex flex-col gap-6">
          {/* Daily Tradition Streak (Retention Hook) */}
          <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white p-5 rounded-2xl shadow-md">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold opacity-90">Daily Tradition Feed</span>
                <h4 className="font-extrabold text-xl">Listening Streak</h4>
              </div>
              <Flame className="w-10 h-10 text-yellow-200 fill-current animate-pulse" />
            </div>

            <div className="grid grid-cols-2 gap-3 bg-black/15 p-3.5 rounded-xl mb-4 backdrop-blur-sm">
              <div>
                <span className="text-xs opacity-80 block">Active Streak</span>
                <span className="text-2xl font-black">15 Days</span>
              </div>
              <div className="border-l border-white/20 pl-3">
                <span className="text-xs opacity-80 block">Pahadi Points</span>
                <span className="text-2xl font-black">3,450 🏆</span>
              </div>
            </div>

            <p className="text-xs opacity-90 leading-relaxed">
              Listen to 1 sacred Jagar every morning between 5:00 - 8:00 AM to preserve your streak!
            </p>
          </div>

          {/* Traditional Calendar */}
          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="text-amber-500 w-5 h-5" />
              <h4 className="font-bold text-gray-900 text-sm">Traditional Uttarakhand Calendar</h4>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="bg-orange-50 border border-orange-100 p-2.5 rounded-xl">
                <span className="font-bold text-orange-900 block">Ghee Sakrand</span>
                <span className="text-[11px] text-orange-600 font-semibold">15 Days</span>
              </div>
              <div className="bg-emerald-50 border border-emerald-100 p-2.5 rounded-xl">
                <span className="font-bold text-emerald-900 block">Harela</span>
                <span className="text-[11px] text-emerald-600 font-semibold">15 Days</span>
              </div>
              <div className="bg-pink-50 border border-pink-100 p-2.5 rounded-xl">
                <span className="font-bold text-pink-900 block">Baithaki Holi</span>
                <span className="text-[11px] text-pink-600 font-semibold">15 Days</span>
              </div>
            </div>
          </div>

          {/* Recommended Jagar for Today */}
          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
            <h4 className="font-bold text-gray-900 text-sm mb-3">Recommended Jagar for Today</h4>
            <div className="rounded-xl overflow-hidden bg-slate-900 text-white relative">
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&auto=format&fit=crop&q=80" 
                alt="Jagar" 
                className="w-full h-28 object-cover opacity-60"
              />
              <div className="p-3">
                <span className="text-[10px] bg-amber-500 text-slate-950 font-bold px-1.5 py-0.5 rounded">Based on Today's Tithi</span>
                <h5 className="font-bold text-xs mt-1">श्रीमद् देवी जागर व आह्वान</h5>
                <p className="text-[11px] text-gray-300">5:35 min • Special Morning Listen</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
