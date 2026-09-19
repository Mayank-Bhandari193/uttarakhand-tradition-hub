import React from 'react';
import { Youtube } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-[#0B1528] to-[#12223f] text-white py-12 px-4 text-center border-b border-slate-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-extrabold text-amber-400 mb-3 leading-snug">
          स्वागत है! देवभूमि की पावन परंपरा, लोक संगीत और जागर का संगम
        </h2>
        <p className="text-gray-300 text-sm md:text-base mb-6 font-medium">
          Welcome! Convergence of the pure tradition of Devbhoomi, Folk Music and Jagar
        </p>

        <a 
          href="https://www.youtube.com/@pushpabhandari6645" 
          target="_blank" 
          rel="noreferrer" 
          className="inline-flex items-center gap-2 bg-[#CC0000] hover:bg-red-700 text-white font-bold px-6 py-2.5 rounded-full shadow-lg transition transform hover:-translate-y-0.5"
        >
          <Youtube className="w-5 h-5" /> Subscribe & Join
        </a>

        <div className="mt-2 text-xs text-gray-400 font-mono">
          YouTube: @pushpabhandari6645
        </div>
      </div>
    </section>
  );
}
