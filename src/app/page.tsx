"use client";

import { motion, Variants } from "framer-motion";
import { Globe, Mail, MapPin, Briefcase, GraduationCap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const hoverEffects = {
  hover: {
    scale: 1.03,
    transition: { type: "spring", stiffness: 400, damping: 10 },
  },
  tap: { scale: 0.97 },
};

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050505] text-white selection:bg-purple-500/30">
      {/* Animated Background Blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-[10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[100px] animate-blob"></div>
        <div className="absolute right-[0%] top-[20%] h-[600px] w-[600px] rounded-full bg-blue-600/20 blur-[120px] animate-blob-reverse"></div>
        <div className="absolute -bottom-[10%] left-[20%] h-[500px] w-[500px] rounded-full bg-emerald-600/10 blur-[100px] animate-blob"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid w-full grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-4 auto-rows-[minmax(120px,auto)]"
        >
          {/* Profile Card (Bento span) */}
          <motion.div
            variants={itemVariants}
            whileHover="hover"
            whileTap="tap"
            className="glass-panel col-span-1 flex flex-col items-center justify-center gap-4 rounded-3xl p-8 md:col-span-2 md:row-span-2 relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-white/20 shadow-xl group-hover:border-purple-400/50 transition-colors duration-300">
              <Image
                src="/img/profil.jpeg"
                alt="Fahrisal Basri Profile"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="text-center z-10">
              <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Fahrisal Basri
              </h1>
              <p className="mt-1 text-sm font-medium text-purple-300">
                @Ryzax
              </p>
            </div>
          </motion.div>

          {/* Bio Card */}
          <motion.div
            variants={itemVariants}
            whileHover="hover"
            whileTap="tap"
            className="glass-panel col-span-1 flex flex-col justify-center rounded-3xl p-6 md:col-span-2 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="z-10 flex flex-col gap-3">
              <div className="flex items-start gap-2 text-white/80">
                <Briefcase className="h-5 w-5 text-blue-400 mt-0.5" />
                <span className="text-sm font-medium leading-tight">Freelance Web Developer,<br />Networking & Server Admin</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <GraduationCap className="h-5 w-5 text-emerald-400" />
                <span className="text-sm font-medium leading-tight">Sudah Tidak Sekolah</span>
              </div>
              <div className="flex items-center gap-2 text-white/80 mt-1">
                <MapPin className="h-5 w-5 text-rose-400" />
                <span className="text-sm font-medium">Takalar, Sulsel, Indonesia</span>
              </div>
            </div>
          </motion.div>

          {/* Tech Instagram */}
          <motion.a
            href="https://instagram.com/ryzax.tech"
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            whileHover="hover"
            whileTap="tap"
            className="glass-panel col-span-1 flex flex-col items-center justify-center gap-3 rounded-3xl p-6 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="rounded-full bg-white/10 p-4 group-hover:bg-pink-500/20 transition-colors duration-300 z-10">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-400"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
            </div>
            <div className="text-center z-10">
              <p className="text-sm font-semibold text-white">Tech & Biz</p>
              <p className="text-xs text-white/60">@ryzax.tech</p>
            </div>
          </motion.a>

          {/* Personal Instagram */}
          <motion.a
            href="https://instagram.com/157faaa"
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            whileHover="hover"
            whileTap="tap"
            className="glass-panel col-span-1 flex flex-col items-center justify-center gap-3 rounded-3xl p-6 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/20 to-rose-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="rounded-full bg-white/10 p-4 group-hover:bg-rose-500/20 transition-colors duration-300 z-10">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-rose-400"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
            </div>
            <div className="text-center z-10">
              <p className="text-sm font-semibold text-white">Personal</p>
              <p className="text-xs text-white/60">@157faaa</p>
            </div>
          </motion.a>

          {/* Portfolio Web */}
          <motion.a
            href="https://portofolio-ryzax.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            whileHover="hover"
            whileTap="tap"
            className="glass-panel col-span-1 md:col-span-2 flex items-center justify-between rounded-3xl p-6 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex items-center gap-4 z-10">
              <div className="rounded-2xl bg-cyan-500/20 p-4 group-hover:bg-cyan-400/30 transition-colors duration-300">
                <Globe className="h-8 w-8 text-cyan-400" />
              </div>
              <div>
                <p className="text-lg font-bold text-white">My Web Portfolio</p>
                <p className="text-sm text-white/60">portofolio-ryzax.vercel.app</p>
              </div>
            </div>
            <div className="z-10 h-10 w-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/60 group-hover:text-white transition-colors transform group-hover:-translate-y-1 group-hover:translate-x-1 duration-300"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
            </div>
          </motion.a>

          {/* Github */}
          <motion.a
            href="https://github.com/ryzax1507"
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            whileHover="hover"
            whileTap="tap"
            className="glass-panel col-span-1 md:col-span-2 flex items-center justify-between rounded-3xl p-6 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-600/20 to-gray-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex items-center gap-4 z-10">
              <div className="rounded-2xl bg-white/10 p-4 group-hover:bg-white/20 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
              </div>
              <div>
                <p className="text-lg font-bold text-white">GitHub</p>
                <p className="text-sm text-white/60">Projects & Repositories</p>
              </div>
            </div>
            <div className="z-10 h-10 w-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/60 group-hover:text-white transition-colors transform group-hover:-translate-y-1 group-hover:translate-x-1 duration-300"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
            </div>
          </motion.a>

        </motion.div>
      </div>
    </div>
  );
}
