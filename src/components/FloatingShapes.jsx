import React from 'react';
import { motion } from 'framer-motion';

export default function FloatingShapes() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Soft gradient blur spheres */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -40, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-br from-[#FFC8DD]/35 to-[#CDB4DB]/25 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -35, 0],
          y: [0, 45, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-1/4 -right-28 w-[420px] h-[420px] rounded-full bg-gradient-to-bl from-[#A2D2FF]/30 to-[#BDE0FE]/35 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute -bottom-20 left-1/3 w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-[#CDB4DB]/25 to-[#FFC8DD]/25 blur-3xl"
      />

      {/* Floating pastel geometric & sparkle accents */}
      <motion.div
        animate={{
          y: [0, -18, 0],
          rotate: [0, 15, -15, 0],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-36 left-[8%] hidden md:block"
      >
        <div className="w-12 h-12 rounded-20 bg-white/60 backdrop-blur-md border border-white/80 shadow-glass flex items-center justify-center text-[#CDB4DB]">
          ✦
        </div>
      </motion.div>

      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -20, 20, 0],
        }}
        transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-52 right-[10%] hidden md:block"
      >
        <div className="w-14 h-14 rounded-24 bg-gradient-to-tr from-[#A2D2FF]/40 to-[#BDE0FE]/50 backdrop-blur-md border border-white/80 shadow-glass flex items-center justify-center text-[#4A4458]/60 text-xs font-semibold">
          AWS ☁️
        </div>
      </motion.div>

      <motion.div
        animate={{
          y: [0, -22, 0],
          rotate: [0, 12, 0],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute top-[60%] left-[5%] hidden lg:block"
      >
        <div className="w-16 h-16 rounded-[22px] bg-gradient-to-br from-[#FFC8DD]/40 to-[#CDB4DB]/40 backdrop-blur-md border border-white/90 shadow-glass flex items-center justify-center text-lg">
          🛡️
        </div>
      </motion.div>

      <motion.div
        animate={{
          y: [0, 16, 0],
          rotate: [0, -10, 0],
        }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[75%] right-[6%] hidden lg:block"
      >
        <div className="w-12 h-12 rounded-full bg-white/70 backdrop-blur-md border border-white/80 shadow-glass flex items-center justify-center text-[#A2D2FF] text-lg font-bold">
          ★
        </div>
      </motion.div>
    </div>
  );
}
