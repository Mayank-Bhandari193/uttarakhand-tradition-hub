import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import VideoModal from './components/VideoModal';
import LoginModal from './components/LoginModal';

export default function App() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [streakClaimed, setStreakClaimed] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem('uttarakhand_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('uttarakhand_user');
    setUser(null);
  };

  const handleClaimStreak = () => {
    setStreakClaimed(true);
    if (!user) {
      setIsLoginOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans text-slate-800">
      {/* Navigation */}
      <Navbar 
        onOpenLogin={() => setIsLoginOpen(true)}
        user={user}
        onLogout={handleLogout}
        onTriggerLive={() => setActiveVideo({
          youtubeId: 'AbZvYpSdKTY',
          title: 'Live Darshan: माँ नंदा देवी जागर एवं संध्या आरती',
          category: 'Live Stream',
          isLive: true
        })}
      />

      {/* Hero Banner */}
      <Hero />

      {/* Main Body */}
      <main className="max-w-7xl mx-auto w-full p-4 md:p-6 flex flex-col lg:flex-row gap-6 flex-1">
        <Sidebar user={user} />
        <Dashboard 
          onPlayVideo={(video) => setActiveVideo(video)}
          user={user}
          streakClaimed={streakClaimed}
          onClaimStreak={handleClaimStreak}
        />
      </main>

      {/* Footer */}
      <footer className="bg-[#0B1528] text-gray-400 py-6 border-t border-slate-800 text-center text-xs mt-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© 2026 The Channel of Uttarakhand Tradition (@pushpabhandari6645). Devbhoomi Heritage Preservation.</p>
          <div className="flex gap-4">
            <a href="https://www.youtube.com/@pushpabhandari6645" target="_blank" rel="noreferrer" className="hover:text-amber-400">
              Official YouTube Channel
            </a>
            <a href="#feed" className="hover:text-amber-400">Jagar & Mangal Geet</a>
            <a href="#chowpal" className="hover:text-amber-400">Chowpal Forum</a>
          </div>
        </div>
      </footer>

      {/* Active Video Player Modal */}
      <VideoModal 
        video={activeVideo} 
        onClose={() => setActiveVideo(null)} 
      />

      {/* Login / Register Modal */}
      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)}
        onLoginSuccess={(userData) => setUser(userData)}
      />
    </div>
  );
}