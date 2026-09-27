import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Cloud } from 'lucide-react';

export default function Avatar({ size = "lg", className = "" }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className={`relative inline-block ${className}`}>
      {/* Outer pulsing pastel glow */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -inset-2.5 rounded-full bg-gradient-to-tr from-[#FFC8DD] via-[#CDB4DB] to-[#A2D2FF] opacity-60 blur-xl -z-10"
      />

      {/* Outer pastel gradient ring container */}
      <div className="relative p-1.5 rounded-full bg-gradient-to-tr from-[#FFC8DD] via-[#CDB4DB] to-[#A2D2FF] shadow-pastel-card">
        {/* Inner white border */}
        <div className="p-1 rounded-full bg-white/90 backdrop-blur-md">
          {/* Main circular avatar element */}
          <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden bg-gradient-to-b from-[#FFF8FC] to-[#F8F5FF] flex items-center justify-center relative border border-white/80">
            {!imgError ? (
              <img
                src="/avatar.png"
                alt="Phan Nhật Uyên - Avatar"
                onError={() => setImgError(true)}
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
              />
            ) : (
              // Aesthetic Pastel Vector Avatar Fallback
              <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#FFF0F5] to-[#E8D7F1] text-pastel-text p-4 text-center">
                <div className="w-20 h-20 rounded-full bg-white/80 shadow-inner flex items-center justify-center mb-2 text-[#CDB4DB]">
                  <Sparkles size={36} className="text-[#CDB4DB] animate-pulse" />
                </div>
                <span className="font-bold text-lg text-[#4A4458]">Phan Nhật Uyên</span>
                <span className="text-xs text-pastel-muted">Cyber Security · FCAJ</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Floating Badge 1: Cloud & AI */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-2 -right-2 sm:right-0 bg-white/90 backdrop-blur-md border border-white/90 px-3.5 py-1.5 rounded-full shadow-pastel-soft flex items-center gap-1.5 text-xs font-semibold text-[#4A4458]"
      >
        <Cloud size={14} className="text-[#A2D2FF]" />
        <span>FCAJ 2026</span>
      </motion.div>

      {/* Floating Badge 2: Cyber Defense */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-2 -left-2 sm:left-0 bg-white/90 backdrop-blur-md border border-white/90 px-3.5 py-1.5 rounded-full shadow-pastel-soft flex items-center gap-1.5 text-xs font-semibold text-[#4A4458]"
      >
        <Shield size={14} className="text-[#CDB4DB]" />
        <span>InfoSec Trainee</span>
      </motion.div>
    </div>
  );
}
