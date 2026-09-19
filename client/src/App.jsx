import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import StreaksPage from './components/StreaksPage';
import VideoModal from './components/VideoModal';
import LoginModal from './components/LoginModal';
import NotificationBanner from './components/NotificationBanner';

export default function App() {
  const [currentTab, setCurrentTab] = useState('dashboard'); // 'dashboard' ya 'streaks'
  const [videos, setVideos] = useState([]);
  const [activeVideo, setActiveVideo] = useState(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [points, setPoints] = useState(3450);
  const [streakDays, setStreakDays] = useState(15);

  useEffect(() => {
    axios.get('http://localhost:5000/api/videos')
      .then(res => setVideos(res.data))
      .catch(err => console.log(err));

    const saved = localStorage.getItem('uttarakhand_user');
    if (saved) {
      const parsed = JSON.parse(saved);
      setUser(parsed);
      if (parsed.pahadiPoints) setPoints(parsed.pahadiPoints);
    }
  }, []);

  // AUTOMATIC REWARD: Jab user video 85% ya puri dekh leta hai
  const handleVideoCompleted = ({ bonusPoints, videoTitle }) => {
    setPoints(prev => {
      const next = prev + bonusPoints;
      if (user) {
        const updated = { ...user, pahadiPoints: next };
        localStorage.setItem('uttarakhand_user', JSON.stringify(updated));
      }
      return next;
    });

    setStreakDays(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans text-slate-800">
      <Navbar 
        onOpenLogin={() => setIsLoginOpen(true)}
        user={user}
        onLogout={() => {
          localStorage.removeItem('uttarakhand_user');
          setUser(null);
        }}
        currentTab={currentTab}
        onSelectTab={(tab) => setCurrentTab(tab)}
        onTriggerLive={() => {
          const live = videos.find(v => v.isLive) || videos[0];
          setActiveVideo(live);
        }}
      />

      <Hero />

      <main className="max-w-7xl mx-auto w-full p-4 md:p-6 flex flex-col lg:flex-row gap-6 flex-1">
        <Sidebar 
          user={user} 
          points={points} 
          streakDays={streakDays} 
          currentTab={currentTab}
          onSelectTab={(tab) => setCurrentTab(tab)}
        />

        {currentTab === 'dashboard' ? (
          <Dashboard 
            videos={videos}
            onPlayVideo={(v) => setActiveVideo(v)}
            user={user}
            points={points}
            streakDays={streakDays}
            onClaimManualStreak={() => {
              setPoints(p => p + 100);
              alert("100 Points आपके खाते में जुड़ गए!");
            }}
          />
        ) : (
          <StreaksPage 
            points={points} 
            streakDays={streakDays} 
            user={user} 
            onOpenVideo={(v) => setActiveVideo(v)}
          />
        )}
      </main>

      {/* Video Modal with Watch-time detection */}
      <VideoModal 
        video={activeVideo} 
        onClose={() => setActiveVideo(null)} 
        onVideoCompleted={handleVideoCompleted}
      />

      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)}
        onLoginSuccess={(userData) => {
          setUser(userData);
          setPoints(userData.pahadiPoints || 3500);
        }}
      />

      <NotificationBanner 
        latestVideo={videos[0]} 
        onPlayVideo={(v) => setActiveVideo(v)} 
      />
    </div>
  );
}