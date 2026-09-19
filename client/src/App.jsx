import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans text-slate-800">
      <Navbar />
      <Hero />
      <main className="max-w-7xl mx-auto w-full p-4 md:p-6 flex flex-col lg:flex-row gap-6 flex-1">
        <Sidebar />
        <Dashboard />
      </main>
      <footer className="bg-[#0B1528] text-gray-400 py-6 border-t border-slate-800 text-center text-xs mt-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p>© 2026 The Channel of Uttarakhand Tradition (@pushpabhandari6645). Devbhoomi Heritage Preservation.</p>
          <div className="flex gap-4">
            <a href="https://www.youtube.com/@pushpabhandari6645" target="_blank" rel="noreferrer" className="hover:text-amber-400">YouTube Channel</a>
            <a href="#" className="hover:text-amber-400">Privacy Policy</a>
            <a href="#" className="hover:text-amber-400">Community Guidelines</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
