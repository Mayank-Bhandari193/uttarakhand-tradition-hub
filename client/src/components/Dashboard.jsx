import React, { useState } from 'react';
import axios from 'axios';
import { 
  Play, 
  Radio, 
  Flame, 
  Trophy, 
  Calendar, 
  Eye, 
  ThumbsUp, 
  Send, 
  Sparkles, 
  RefreshCw,
  Clock,
  Sparkle
} from 'lucide-react';

export default function Dashboard({ 
  videos = [], 
  onPlayVideo, 
  user, 
  points = 3450, 
  streakDays = 15, 
  onClaimManualStreak 
}) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [videoList, setVideoList] = useState(videos);
  const [isSyncing, setIsSyncing] = useState(false);
  const [newPost, setNewPost] = useState('');
  const [chowpalPosts, setChowpalPosts] = useState([
    { 
      id: 1, 
      author: 'Mayank Bhandari', 
      text: 'माँ नंदा देवी राजजात के जागर और मंगल गीत के बोल बहुत ही पावन हैं!', 
      time: '1 hr ago' 
    },
    { 
      id: 2, 
      author: 'Kavita Rawat', 
      text: 'पारंपरिक गढ़वाली विवाह के मंगल गीतों का संग्रह साझा करने के लिए धन्यवाद।', 
      time: '3 hrs ago' 
    }
  ]);

  // Synchronize internal video state if prop updates
  React.useEffect(() => {
    if (videos && videos.length > 0) {
      setVideoList(videos);
    }
  }, [videos]);

  // Instant Refresh & Auto-Fetch from YouTube Channel (@pushpabhandari6645)
  const handleSyncVideos = async () => {
    setIsSyncing(true);
    try {
      const res = await axios.get('http://localhost:5000/api/videos/refresh');
      if (res.data && res.data.videos) {
        setVideoList(res.data.videos);
      }
    } catch (err) {
      console.warn('Sync failed, keeping current items', err);
    } finally {
      setIsSyncing(false);
    }
  };

  // Filter videos by category
  const filteredVideos = selectedCategory === 'All' 
    ? videoList 
    : videoList.filter(v => v.category === selectedCategory);

  // Designate first/marked video as live preview
  const liveVideo = videoList.find(v => v.isLive) || videoList[0];

  // Community post submit
  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (!newPost.trim()) return;
    setChowpalPosts([
      { 
        id: Date.now(), 
        author: user ? user.name : 'उत्तराखंडी भक्त', 
        text: newPost, 
        time: 'Just now' 
      },
      ...chowpalPosts
    ]);
    setNewPost('');
  };

  return (
    <div className="flex-1 flex flex-col gap-6">
      {/* 🔴 LIVE NOW CURRENT VIDEO BANNER */}
      {liveVideo && (
        <div className="bg-gradient-to-r from-red-950 via-slate-900 to-amber-950 border-2 border-red-500/50 p-4 sm:p-5 rounded-3xl flex flex-wrap items-center justify-between gap-4 text-white shadow-xl relative overflow-hidden">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img 
                src={liveVideo.thumbnail} 
                alt="Live" 
                className="w-24 h-16 sm:w-36 sm:h-20 object-cover rounded-xl border border-red-500 shadow-md"
              />
              <span className="absolute -top-2 -left-1.5 bg-red-600 text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase flex items-center gap-1 shadow">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span> Live
              </span>
            </div>

            <div>
              <span className="text-xs text-amber-300 font-semibold flex items-center gap-1.5">
                <Radio size={14} className="text-red-400 animate-pulse" /> 412 Devotees Listening Live
              </span>
              <h3 className="font-extrabold text-base sm:text-lg text-white mt-0.5 line-clamp-1">
                {liveVideo.title}
              </h3>
              <p className="text-xs text-gray-300 hidden sm:block">
                @pushpabhandari6645 • देवभूमि उत्तराखंड की पावन परंपरा एवं लोक संगीत
              </p>
            </div>
          </div>

          <button 
            onClick={() => onPlayVideo(liveVideo)}
            className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-2xl flex items-center gap-2 shadow-lg transition transform hover:scale-105"
          >
            <Play size={16} fill="white" /> अभी लाइव सुनें
          </button>
        </div>
      )}

      {/* Top 4 Real-time Metrics */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
          <span className="text-xs text-slate-500 font-medium">Channel Total Views</span>
          <p className="text-2xl font-black text-slate-800 mt-1">183.59K</p>
          <span className="text-[10px] text-emerald-600 font-bold">▲ Auto Synced</span>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
          <span className="text-xs text-slate-500 font-medium">Subscribers</span>
          <p className="text-2xl font-black text-slate-800 mt-1">34.2K</p>
          <span className="text-[10px] text-amber-600 font-bold">● Active Family</span>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
          <span className="text-xs text-slate-500 font-medium">Pahadi Streak Points</span>
          <p className="text-2xl font-black text-amber-600 mt-1">{points} 🏆</p>
          <span className="text-[10px] text-emerald-600 font-bold">+5 Pts / min listening</span>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
          <span className="text-xs text-slate-500 font-medium">Devbhoomi Streak</span>
          <p className="text-2xl font-black text-blue-600 mt-1">{streakDays} Days</p>
          <span className="text-[10px] text-blue-500 font-bold">Consistent Listener</span>
        </div>
      </div>

      {/* Main Grid Section */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6" id="feed">
        {/* Left Columns (Video Playlists & Chowpal) */}
        <div className="xl:col-span-2 flex flex-col gap-6">
          <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
              <div>
                <h3 className="font-extrabold text-lg text-slate-900">All Traditional Videos & Playlists</h3>
                <p className="text-xs text-slate-500">Live Auto Sync from @pushpabhandari6645</p>
              </div>

              {/* Action Buttons: Sync & Filters */}
              <div className="flex items-center gap-2 flex-wrap">
                <button
                  onClick={handleSyncVideos}
                  disabled={isSyncing}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 text-amber-400 border border-amber-500/40 text-xs font-bold hover:bg-slate-800 transition disabled:opacity-60"
                  title="YouTube से ताज़ा वीडियो लोड करें"
                >
                  <RefreshCw size={13} className={isSyncing ? "animate-spin text-amber-300" : ""} />
                  {isSyncing ? "Syncing..." : "Sync Channel"}
                </button>

                <div className="flex gap-1 overflow-x-auto text-xs font-semibold">
                  {['All', 'Jagar', 'Mangal Geet', 'Bhajan', 'Holi'].map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3 py-1.5 rounded-xl transition ${
                        selectedCategory === cat 
                          ? 'bg-amber-500 text-slate-950 font-bold shadow' 
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Video Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredVideos.map((vid) => (
                <div 
                  key={vid._id}
                  onClick={() => onPlayVideo(vid)}
                  className="group bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-amber-400 transition cursor-pointer flex flex-col"
                >
                  <div className="relative aspect-video w-full bg-slate-900 overflow-hidden">
                    <img 
                      src={vid.thumbnail} 
                      alt={vid.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                    <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition">
                        <Play size={20} fill="currentColor" />
                      </div>
                    </div>
                    <span className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1">
                      <Clock size={10} /> {vid.duration || '5:30'}
                    </span>
                  </div>

                  <div className="p-4 flex flex-col flex-1 justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                        {vid.category || 'Folk Song'}
                      </span>
                      <h4 className="font-bold text-sm text-slate-900 mt-2 line-clamp-2 group-hover:text-amber-600 transition">
                        {vid.title}
                      </h4>
                    </div>

                    <div className="flex items-center justify-between text-xs text-slate-500 mt-3 pt-3 border-t border-slate-200 font-medium">
                      <span className="flex items-center gap-1"><Eye size={14}/> {vid.views}</span>
                      <span className="flex items-center gap-1"><ThumbsUp size={14}/> {vid.likes || '1.2K'}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* कम्युनिटी चौपाल (Chowpal Forum) */}
          <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm" id="chowpal">
            <h3 className="font-extrabold text-base text-slate-900 mb-1">कम्युनिटी चौपाल (Devotee Requests & Lyrics)</h3>
            <p className="text-xs text-slate-500 mb-4">पारंपरिक जागर या मंगल गीत की मांग करें</p>

            <form onSubmit={handlePostSubmit} className="flex gap-2 mb-4">
              <input 
                type="text" 
                placeholder="यहाँ अपनी फरमाइश या विचार लिखें..."
                className="flex-1 border border-slate-300 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-amber-500"
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
              />
              <button 
                type="submit" 
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 transition shadow"
              >
                <Send size={14} /> भेजें
              </button>
            </form>

            <div className="space-y-2">
              {chowpalPosts.map((p) => (
                <div key={p.id} className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-start justify-between">
                  <div>
                    <span className="text-xs font-bold text-amber-700">{p.author}</span>
                    <p className="text-xs text-slate-800 mt-0.5">{p.text}</p>
                  </div>
                  <span className="text-[10px] text-slate-400 whitespace-nowrap ml-2">{p.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Gamified Retention, Streaks & Calendar */}
        <div className="flex flex-col gap-6" id="streak">
          {/* Automatic Daily Streak Box */}
          <div className="bg-gradient-to-br from-amber-500 via-amber-600 to-orange-600 text-white p-6 rounded-3xl shadow-xl relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-[11px] uppercase font-bold tracking-wider text-amber-100">Live Auto Streak Engine</span>
                <h4 className="text-2xl font-black mt-0.5">{streakDays} Days Consistent</h4>
              </div>
              <Flame className="w-12 h-12 text-yellow-200 fill-current animate-bounce" />
            </div>

            <div className="bg-black/20 p-4 rounded-2xl mb-4 backdrop-blur-sm">
              <span className="text-xs text-amber-100 block">Total Pahadi Points</span>
              <span className="text-3xl font-black tracking-tight">{points} 🏆</span>
              <p className="text-[11px] text-amber-200 mt-1">
                ⚡ Points auto-increase every 60 seconds while listening!
              </p>
            </div>

            <button 
              onClick={onClaimManualStreak}
              className="w-full py-2.5 bg-slate-950 hover:bg-slate-900 text-amber-400 font-bold text-xs rounded-xl shadow transition flex items-center justify-center gap-2"
            >
              <Sparkles size={16} /> Claim Daily Morning Darshan (+100 Pts)
            </button>
          </div>

          {/* Uttarakhand Traditional Calendar (त्योहार) */}
          <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Calendar className="text-amber-500 w-5 h-5" />
              <h4 className="font-bold text-sm text-slate-800">उत्तराखंड पारंपरिक पर्व पंचांग</h4>
            </div>

            <div className="space-y-2.5">
              <div className="p-3 bg-orange-50 border border-orange-200 rounded-2xl flex items-center justify-between">
                <div>
                  <h5 className="font-bold text-xs text-orange-950">घी संक्रांति (Ghee Sakrand)</h5>
                  <p className="text-[11px] text-orange-800">पारंपरिक लोकपर्व व पकवान</p>
                </div>
                <span className="text-xs font-black text-orange-800 bg-orange-200 px-2.5 py-1 rounded-lg">15 Days</span>
              </div>

              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center justify-between">
                <div>
                  <h5 className="font-bold text-xs text-emerald-950">हरेला पर्व (Harela)</h5>
                  <p className="text-[11px] text-emerald-800">प्रकृति पूजन व नवअंकुरण</p>
                </div>
                <span className="text-xs font-black text-emerald-800 bg-emerald-200 px-2.5 py-1 rounded-lg">15 Days</span>
              </div>

              <div className="p-3 bg-pink-50 border border-pink-200 rounded-2xl flex items-center justify-between">
                <div>
                  <h5 className="font-bold text-xs text-pink-950">बैठकी होली (Baithaki Holi)</h5>
                  <p className="text-[11px] text-pink-800">पारंपरिक शास्त्रीय राग गायन</p>
                </div>
                <span className="text-xs font-black text-pink-800 bg-pink-200 px-2.5 py-1 rounded-lg">15 Days</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}