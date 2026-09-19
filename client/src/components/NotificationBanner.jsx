import React, { useEffect, useState } from 'react';
import { Bell, Sparkles, X } from 'lucide-react';

export default function NotificationBanner({ onPlayVideo, latestVideo }) {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    // Request Browser Push Notification Permission
    if ("Notification" in window && Notification.permission !== "granted") {
      Notification.requestPermission();
    }

    // Auto-alert when component loads
    const timer = setTimeout(() => {
      setShowToast(true);
      if ("Notification" in window && Notification.permission === "granted") {
        new Notification("उत्तराखंडी परंपरा | नया वीडियो रिलीज!", {
          body: latestVideo ? latestVideo.title : "माँ नंदा देवी पावन जागर सुनें",
          icon: latestVideo ? latestVideo.thumbnail : "/favicon.ico"
        });
      }
    }, 3500);

    return () => clearTimeout(timer);
  }, [latestVideo]);

  if (!showToast || !latestVideo) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 max-w-sm bg-slate-900 border border-amber-500/60 rounded-2xl shadow-2xl p-4 text-white animate-bounce-short">
      <div className="flex items-start gap-3">
        <div className="p-2 bg-amber-500/20 rounded-xl text-amber-400">
          <Bell size={20} className="animate-pulse" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase font-bold text-amber-400 flex items-center gap-1">
              <Sparkles size={12} /> New Video on YouTube
            </span>
            <button onClick={() => setShowToast(false)} className="text-gray-400 hover:text-white">
              <X size={16} />
            </button>
          </div>
          <h5 className="font-bold text-xs mt-1 text-gray-100 line-clamp-1">{latestVideo.title}</h5>
          <button 
            onClick={() => {
              onPlayVideo(latestVideo);
              setShowToast(false);
            }}
            className="mt-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-3 py-1 rounded-lg text-[11px] transition shadow"
          >
            अभी देखें (Play Now)
          </button>
        </div>
      </div>
    </div>
  );
}