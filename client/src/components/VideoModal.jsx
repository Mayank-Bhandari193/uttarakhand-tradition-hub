import React from 'react';
import { X, Youtube, Share2 } from 'lucide-react';

export default function VideoModal({ video, onClose }) {
  if (!video) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fadeIn">
      <div className="bg-slate-900 border border-slate-700 rounded-3xl w-full max-w-3xl overflow-hidden shadow-2xl relative flex flex-col">
        {/* Header */}
        <div className="p-4 bg-slate-800/90 border-b border-slate-700 flex items-center justify-between text-white">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span>
            <span className="text-xs uppercase font-bold text-red-400 tracking-wider">
              {video.isLive ? 'LIVE DARSHAN / STREAM' : 'NOW PLAYING'}
            </span>
          </div>
          <button 
            onClick={onClose} 
            className="p-1 rounded-full text-gray-400 hover:text-white hover:bg-slate-700 transition"
          >
            <X size={20} />
          </button>
        </div>

        {/* Video Embed Frame */}
        <div className="aspect-video w-full bg-black">
          <iframe 
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Bottom Details */}
        <div className="p-5 text-white bg-slate-900 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-lg text-amber-400">{video.title}</h3>
            <span className="bg-amber-500/20 text-amber-400 text-xs px-2.5 py-1 rounded-full font-semibold">
              {video.category}
            </span>
          </div>
          <p className="text-xs text-gray-400">
            Channel: <strong className="text-white">The Channel Of Uttarakhand Tradition (@pushpabhandari6645)</strong>
          </p>

          <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-800 text-xs">
            <span className="text-emerald-400">● 50 Pahadi Streak Points Claimed!</span>
            <a 
              href="https://www.youtube.com/@pushpabhandari6645" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-1.5 text-red-400 hover:text-red-300 font-semibold"
            >
              <Youtube size={16} /> Open on YouTube
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}