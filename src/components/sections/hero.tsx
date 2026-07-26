"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Download, Layers, ShieldCheck, Cpu, Code2, Globe } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-pattern">
      {/* Background Animated Gradient Mesh */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-blue-600/20 via-indigo-500/15 to-purple-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-1/3 left-1/3 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Status Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121318]/90 border border-white/10 text-xs text-zinc-300 backdrop-blur-md mb-8 shadow-inner"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-mono text-zinc-400">Available for Senior Roles & Consulting</span>
          <span className="text-zinc-600">|</span>
          <span className="text-blue-400 font-medium flex items-center gap-1">
            Founder @ Workspace <Sparkles className="w-3 h-3 text-amber-400" />
          </span>
        </motion.div>

        {/* Large Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white dark:text-white light:text-slate-900 leading-[1.1]"
        >
          Building products that{" "}
          <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
            connect people,
          </span>{" "}
          opportunities, & technology.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-zinc-400 dark:text-zinc-400 light:text-zinc-600 max-w-3xl mx-auto leading-relaxed font-normal"
        >
          I&apos;m <span className="text-white font-medium">Ogboss</span>, a 21-year-old Mobile & Backend Engineer from Nigeria specializing in <span className="text-blue-400 font-mono">React Native</span>, <span className="text-indigo-400 font-mono">NestJS</span>, <span className="text-cyan-400 font-mono">PostgreSQL</span>, <span className="text-amber-400 font-mono">Firebase</span>, and scalable marketplace platforms.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#workspace"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold text-sm shadow-xl shadow-blue-600/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            Explore Workspace <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#121318] hover:bg-[#1a1b22] text-zinc-200 hover:text-white font-semibold text-sm border border-white/10 shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            Hire Me
          </a>

          <a
            href="#resume"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#121318]/60 hover:bg-[#121318] text-zinc-400 hover:text-white font-medium text-sm border border-white/10 transition-all duration-200"
          >
            <Download className="w-4 h-4 text-zinc-400" /> Download Résumé
          </a>
        </motion.div>

        {/* Architectural Highlights Quick Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 text-left"
        >
          <div className="glass-card p-4 rounded-xl border border-white/10">
            <div className="flex items-center gap-2 text-blue-400 font-mono text-xs mb-1">
              <Code2 className="w-4 h-4" /> Cross-Platform
            </div>
            <div className="text-sm font-semibold text-white">Expo + React Native</div>
            <div className="text-xs text-zinc-400 mt-1">Single codebase, native speed</div>
          </div>

          <div className="glass-card p-4 rounded-xl border border-white/10">
            <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs mb-1">
              <Cpu className="w-4 h-4" /> Scalable Core
            </div>
            <div className="text-sm font-semibold text-white">NestJS + Prisma</div>
            <div className="text-xs text-zinc-400 mt-1">Modular enterprise API layer</div>
          </div>

          <div className="glass-card p-4 rounded-xl border border-white/10">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs mb-1">
              <ShieldCheck className="w-4 h-4" /> Financial Escrow
            </div>
            <div className="text-sm font-semibold text-white">Paystack + Stripe</div>
            <div className="text-xs text-zinc-400 mt-1">Secure two-party funds release</div>
          </div>

          <div className="glass-card p-4 rounded-xl border border-white/10">
            <div className="flex items-center gap-2 text-purple-400 font-mono text-xs mb-1">
              <Globe className="w-4 h-4" /> Ecosystem
            </div>
            <div className="text-sm font-semibold text-white">Workspace Founder</div>
            <div className="text-xs text-zinc-400 mt-1">All-in-one super platform</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
