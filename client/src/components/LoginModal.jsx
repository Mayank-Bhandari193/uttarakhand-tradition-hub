import React, { useState } from 'react';
import { X, Lock, Mail, User, Sparkles } from 'lucide-react';

export default function LoginModal({ isOpen, onClose, onLoginSuccess }) {
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      name: isRegister ? formData.name : (formData.email.split('@')[0] || 'Devotee'),
      email: formData.email,
      streakDays: 16,
      pahadiPoints: 3500
    };
    localStorage.setItem('uttarakhand_user', JSON.stringify(user));
    onLoginSuccess(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fadeIn">
      <div className="bg-slate-900 border border-amber-500/40 rounded-3xl w-full max-w-md p-6 text-white shadow-2xl relative">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-400 hover:text-white p-1 rounded-full hover:bg-slate-800"
        >
          <X size={20} />
        </button>

        <div className="text-center mb-6">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 mb-3">
            <Sparkles size={28} />
          </div>
          <h3 className="text-2xl font-bold text-amber-400">
            {isRegister ? 'देवभूमि परिवार से जुड़ें' : 'Login to Uttarakhand Hub'}
          </h3>
          <p className="text-xs text-gray-400 mt-1">
            {isRegister ? 'निशुल्क खाता बनाएं व दैनिक जागर स्ट्रीक शुरू करें' : 'Welcome back to your spiritual home'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {isRegister && (
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">आपका नाम (Full Name)</label>
              <div className="relative">
                <User size={18} className="absolute left-3 top-3 text-gray-500" />
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. Mayank Bhandari"
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-10 pr-3 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1">ईमेल (Email Address)</label>
            <div className="relative">
              <Mail size={18} className="absolute left-3 top-3 text-gray-500" />
              <input 
                type="email" 
                required 
                placeholder="you@example.com"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-10 pr-3 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1">पासवर्ड (Password)</label>
            <div className="relative">
              <Lock size={18} className="absolute left-3 top-3 text-gray-500" />
              <input 
                type="password" 
                required 
                placeholder="••••••••"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-10 pr-3 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold py-2.5 rounded-xl transition shadow-lg mt-2"
          >
            {isRegister ? 'Register & Start Streak' : 'Login Now'}
          </button>
        </form>

        <div className="text-center mt-5 text-xs text-gray-400">
          {isRegister ? 'पहले से खाता है?' : "खाता नहीं है?"}{' '}
          <button 
            onClick={() => setIsRegister(!isRegister)} 
            className="text-amber-400 font-semibold hover:underline"
          >
            {isRegister ? 'Login Karein' : 'Naya Account Banayein'}
          </button>
        </div>
      </div>
    </div>
  );
}