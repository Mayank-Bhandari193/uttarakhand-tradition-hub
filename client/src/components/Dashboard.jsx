import React, { useState } from 'react';
import { 
  Eye, MessageSquare, ThumbsUp, Flame, Trophy, Calendar, 
  Play, Radio, Send, CheckCircle2, Sparkles 
} from 'lucide-react';

const INITIAL_VIDEOS = [
  {
    _id: '1',
    title: 'माँ नंदा देवी जागर और डोली (Maa Nanda Devi Jagar)',
    category: 'Jagar',
    duration: '6:26',
    views: '2.4K',
    likes: '1.2K',
    comments: '342',
    youtubeId: 'AbZvYpSdKTY',
    thumbnail: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=80'
  },
  {
    _id: '2',
    title: 'पारंपरिक गढ़वाली मंगल गीत व संस्कार गायन',
    category: 'Mangal Geet',
    duration: '5:28',
    views: '1.9K',
    likes: '890',
    comments: '184',
    youtubeId: 'Tv3W9uXGRhg',
    thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=80'
  },
  {
    _id: '3',
    title: 'राजी खुशी राखी माता - माता रानी भजन',
    category: 'Bhajan',
    duration: '4:15',
    views: '3.1K',
    likes: '1.5K',
    comments: '412',
    youtubeId: '832vudMJeIY',
    thumbnail: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=80'
  },
  {
    _id: '4',
    title: 'कुमाऊँनी बैठकी होली व पारम्परिक धुनें',
    category: 'Holi',
    duration: '5:49',
    views: '1.8K',
    likes: '670',
    comments: '155',
    youtubeId: 'ojlcZCEOf2U',
    thumbnail: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&auto=format&fit=crop&q=80'
  }
];

export default function Dashboard({ onPlayVideo, user, streakClaimed, onClaimStreak }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [chowpalPosts, setChowpalPosts] = useState([
    { id: 1, author: 'Ramesh Singh', text: 'बद्री-केदार महाआरती के पूर्ण बोल अपलोड करें कृपया।', time: '2 hrs ago' },
    { id: 2, author: 'Kavita Rawat', text: 'नंदा देवी राजजात के जागर सुनकर हृदय तृप्त हो गया!', time: '5 hrs ago' }
  ]);
  const [newPost, setNewPost] = useState('');

  const filteredVideos = selectedCategory === 'All' 
    ? INITIAL_VIDEOS 
    : INITIAL_VIDEOS.filter(v => v.category === selectedCategory);

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (!newPost.trim()) return;
    setChowpalPosts([
      { id: Date.now(), author: user ? user.name : 'Pahadi Devotee', text: newPost, time: 'Just now' },
      ...chowpalPosts
    ]);
    setNewPost('');
  };

  return (
    <div className="flex-1 flex flex-col gap-6">
      {/* Live Notice / Interactive Banner */}
      <div className="bg-gradient-to-r from-red-950/80 via-slate-900 to-amber-950/80 border border-red-500/40 p-4 rounded-2xl flex flex-wrap items-center justify-between gap-4 text-white shadow-md">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-red-600 rounded-xl animate-pulse">
            <Radio size={20} className="text-white" />
          </div>
          <div>
            <span className="text-[11px] font-bold bg-red-600 px-2 py-0.5 rounded uppercase">Live Stream Ready</span>
            <h3 className="font-bold text-base text-amber-200 mt-0.5">नंदा देवी मंदिर लाइव दर्शन एवं संध्या आरती</h3>
          </div>
        </div>
        <button 
          onClick={() => onPlayVideo({
            youtubeId: 'AbZvYpSdKTY',
            title: 'Live: नंदा देवी पावन जागर व आरती दर्शन',
            category: 'Live Stream',
            isLive: true
          })}
          className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl flex items-center gap-2 transition shadow-lg"
        >
          <Play size={15} fill="white" /> Watch Live Now
        </button>
      </div>

      {/* Analytics Counter Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm hover:shadow transition">
          <span className="text-xs text-slate-500 font-medium">Channel Total Views</span>
          <p className="text-2xl font-black text-slate-800 mt-1">183.59K</p>
          <span className="text-[10px] text-emerald-600 font-bold">▲ Growing fast</span>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm hover:shadow transition">
          <span className="text-xs text-slate-500 font-medium">Devotee Comments</span>
          <p className="text-2xl font-black text-slate-800 mt-1">1,240+</p>
          <span className="text-[10px] text-amber-600 font-bold">● Active Community</span>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm hover:shadow transition">
          <span className="text-xs text-slate-500 font-medium">Subscribers</span>
          <p className="text-2xl font-black text-slate-800 mt-1">34.2K</p>
          <span className="text-[10px] text-emerald-600 font-bold">+160 this week</span>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm hover:shadow transition">
          <span className="text-xs text-slate-500 font-medium">Pahadi Listeners</span>
          <p className="text-2xl font-black text-slate-800 mt-1">100% Active</p>
          <span className="text-[10px] text-blue-600 font-bold">Worldwide Diaspora</span>
        </div>
      </div>

      {/* Main Split Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6" id="feed">
        {/* Left 2 Cols: Interactive Video Feeds */}
        <div className="xl:col-span-2 flex flex-col gap-6">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h3 className="font-extrabold text-lg text-slate-900">Latest Traditional Videos</h3>
              
              {/* Category Filter Tabs */}
              <div className="flex gap-1.5 overflow-x-auto text-xs font-semibold">
                {['All', 'Jagar', 'Mangal Geet', 'Bhajan', 'Holi'].map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg transition ${
                      selectedCategory === cat 
                        ? 'bg-amber-500 text-slate-950 shadow' 
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Video Cards List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredVideos.map((vid) => (
                <div 
                  key={vid._id}
                  onClick={() => onPlayVideo(vid)}
                  className="group bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:shadow-md hover:border-amber-400 transition cursor-pointer flex flex-col"
                >
                  <div className="relative aspect-video w-full bg-slate-900 overflow-hidden">
                    <img 
                      src={vid.thumbnail} 
                      alt={vid.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-amber-500/90 text-slate-950 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition">
                        <Play size={20} fill="currentColor" />
                      </div>
                    </div>
                    <span className="absolute bottom-2 right-2 bg-black/80 text-white text-[11px] font-semibold px-2 py-0.5 rounded">
                      {vid.duration}
                    </span>
                  </div>

                  <div className="p-4 flex flex-col flex-1 justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                        {vid.category}
                      </span>
                      <h4 className="font-bold text-sm text-slate-900 mt-2 line-clamp-2 group-hover:text-amber-600 transition">
                        {vid.title}
                      </h4>
                    </div>

                    <div className="flex items-center justify-between text-xs text-slate-500 mt-4 pt-3 border-t border-slate-200 font-medium">
                      <span className="flex items-center gap-1"><Eye size={14}/> {vid.views}</span>
                      <span className="flex items-center gap-1"><MessageSquare size={14}/> {vid.comments}</span>
                      <span className="flex items-center gap-1"><ThumbsUp size={14}/> {vid.likes}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Community Chowpal (Discussions & Requests) */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm" id="chowpal">
            <h3 className="font-extrabold text-lg text-slate-900 mb-1">Community Chowpal (चौपाल)</h3>
            <p className="text-xs text-slate-500 mb-4">पारंपरिक गीतों की फरमाइश करें या अपनी प्रतिक्रिया साझा करें</p>

            {/* Input Box */}
            <form onSubmit={handlePostSubmit} className="flex gap-2 mb-4">
              <input 
                type="text" 
                placeholder="Write your folk song or lyrics request..."
                className="flex-1 border border-slate-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-amber-500"
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
              />
              <button 
                type="submit" 
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 transition"
              >
                <Send size={15} /> Post
              </button>
            </form>

            {/* Chowpal Posts List */}
            <div className="space-y-2.5">
              {chowpalPosts.map((post) => (
                <div key={post.id} className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-start justify-between">
                  <div>
                    <span className="text-xs font-bold text-amber-700">{post.author}</span>
                    <p className="text-xs text-slate-800 mt-0.5">{post.text}</p>
                  </div>
                  <span className="text-[10px] text-slate-400 whitespace-nowrap ml-2">{post.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Col: Gamified Retention, Streaks & Calendar */}
        <div className="flex flex-col gap-6" id="streak">
          {/* Daily Streak Card */}
          <div className="bg-gradient-to-br from-amber-500 via-amber-600 to-orange-600 text-white p-6 rounded-3xl shadow-lg relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-[11px] uppercase font-bold tracking-wider text-amber-100">Daily Devbhoomi Streak</span>
                <h4 className="text-2xl font-black mt-0.5">15 Days Active</h4>
              </div>
              <Flame className="w-12 h-12 text-yellow-200 fill-current animate-bounce" />
            </div>

            <div className="grid grid-cols-2 gap-3 bg-black/20 p-3.5 rounded-2xl mb-4 backdrop-blur-sm">
              <div>
                <span className="text-[11px] text-amber-100 block">Current Devotee</span>
                <span className="text-sm font-bold truncate block">{user ? user.name : 'Pushpa Devotee'}</span>
              </div>
              <div className="border-l border-white/20 pl-3">
                <span className="text-[11px] text-amber-100 block">Pahadi Points</span>
                <span className="text-base font-black">3,500 🏆</span>
              </div>
            </div>

            <button 
              onClick={onClaimStreak}
              disabled={streakClaimed}
              className={`w-full py-2.5 rounded-xl font-bold text-xs transition flex items-center justify-center gap-2 ${
                streakClaimed 
                  ? 'bg-emerald-600 text-white cursor-default' 
                  : 'bg-slate-950 hover:bg-slate-900 text-amber-400 shadow-md'
              }`}
            >
              {streakClaimed ? (
                <> <CheckCircle2 size={16} /> Today's Streak Claimed (+50 Pts) </>
              ) : (
                <> <Sparkles size={16} /> Claim Morning Streak (+50 Pts) </>
              )}
            </button>
          </div>

          {/* Uttarakhand Traditional Festival Calendar */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Calendar className="text-amber-500 w-5 h-5" />
              <h4 className="font-bold text-sm text-slate-800">Traditional Uttarakhand Calendar</h4>
            </div>

            <div className="space-y-2">
              <div className="p-3 bg-orange-50 border border-orange-200 rounded-xl flex items-center justify-between">
                <div>
                  <h5 className="font-bold text-xs text-orange-900">घी संक्रांति (Ghee Sakrand)</h5>
                  <p className="text-[11px] text-orange-700">पारंपरिक घी एवं पकवान अर्पण</p>
                </div>
                <span className="text-xs font-extrabold text-orange-800 bg-orange-200 px-2 py-0.5 rounded">15 Days</span>
              </div>

              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-between">
                <div>
                  <h5 className="font-bold text-xs text-emerald-900">हरेला पर्व (Harela)</h5>
                  <p className="text-[11px] text-emerald-700">पर्यावरण एवं सुख-समृद्धि का लोकपर्व</p>
                </div>
                <span className="text-xs font-extrabold text-emerald-800 bg-emerald-200 px-2 py-0.5 rounded">15 Days</span>
              </div>

              <div className="p-3 bg-pink-50 border border-pink-200 rounded-xl flex items-center justify-between">
                <div>
                  <h5 className="font-bold text-xs text-pink-900">बैठकी होली (Baithaki Holi)</h5>
                  <p className="text-[11px] text-pink-700">शास्त्रीय व पारम्परिक राग गायन</p>
                </div>
                <span className="text-xs font-extrabold text-pink-800 bg-pink-200 px-2 py-0.5 rounded">15 Days</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}