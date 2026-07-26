"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Layers, ShieldCheck, MapPin, DollarSign, MessageSquare, ExternalLink, Zap, CheckCircle2, Play, ArrowRight, UserCheck, Wallet, Search } from "lucide-react";

export function WorkspaceProduct() {
  const [activeTab, setActiveTab] = useState<"overview" | "screens" | "features" | "architecture" | "revenue">("overview");
  const [activeScreen, setActiveScreen] = useState<number>(0);

  const realScreens = [
    {
      title: "Explore & Home Dashboard",
      subtitle: "Unified Search, Categories (Quick Ride, Nearby Services, Remote Jobs, Freelance Gigs), Featured Jobs & Recommended Pros",
      accent: "from-blue-600 to-indigo-600",
      content: (
        <div className="bg-[#090b10] border border-cyan-500/30 rounded-[32px] p-5 space-y-4 text-left font-sans text-xs">
          {/* Header Bar */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-blue-500/20 border border-blue-400/40 flex items-center justify-center font-bold text-blue-400">
                C
              </div>
              <div>
                <div className="text-[11px] text-zinc-300 font-medium">Good morning, <span className="text-white font-bold">Chidera</span> 👋</div>
                <div className="text-[10px] text-cyan-400 font-mono">Rise and grind — new opportunities await ☀️</div>
              </div>
            </div>
            <div className="p-2 rounded-full bg-[#121620] border border-white/10 text-zinc-300 relative">
              <span className="h-2 w-2 rounded-full bg-red-500 absolute top-1 right-1" />
              <Search className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Search bar */}
          <div className="p-2.5 rounded-xl bg-[#121620] border border-white/10 text-zinc-400 flex items-center gap-2 font-mono text-[11px]">
            <Search className="w-3.5 h-3.5 text-zinc-500" />
            <span>Search jobs, services, gigs...</span>
          </div>

          {/* Explore Category Chips */}
          <div className="space-y-2">
            <div className="flex justify-between text-zinc-300 font-bold text-[11px]">
              <span>Explore</span>
              <span className="text-cyan-400 font-mono">See all</span>
            </div>
            <div className="grid grid-cols-4 gap-2 text-center">
              <div className="p-2.5 rounded-xl bg-[#121620] border border-cyan-500/20 space-y-1">
                <div className="h-7 w-7 mx-auto rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">🚗</div>
                <div className="text-[9px] text-zinc-200 font-medium">Quick Ride</div>
              </div>
              <div className="p-2.5 rounded-xl bg-[#121620] border border-amber-500/20 space-y-1">
                <div className="h-7 w-7 mx-auto rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400">📍</div>
                <div className="text-[9px] text-zinc-200 font-medium">Nearby</div>
              </div>
              <div className="p-2.5 rounded-xl bg-[#121620] border border-emerald-500/20 space-y-1">
                <div className="h-7 w-7 mx-auto rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">💼</div>
                <div className="text-[9px] text-zinc-200 font-medium">Remote</div>
              </div>
              <div className="p-2.5 rounded-xl bg-[#121620] border border-purple-500/20 space-y-1">
                <div className="h-7 w-7 mx-auto rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">💻</div>
                <div className="text-[9px] text-zinc-200 font-medium">Gigs</div>
              </div>
            </div>
          </div>

          {/* Featured Jobs */}
          <div className="p-3 rounded-2xl bg-[#121620] border border-white/10 space-y-2">
            <div className="flex justify-between items-center text-[10px]">
              <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 font-mono">★ Featured</span>
              <span className="text-emerald-400 font-bold font-mono font-mono">₦850k – ₦1.2M / mo</span>
            </div>
            <div className="font-bold text-white text-xs">Senior Product Designer</div>
            <div className="text-[10px] text-zinc-400">Flutterwave • Lagos, NG (Remote)</div>
          </div>
        </div>
      ),
    },
    {
      title: "Opportunities Feed",
      subtitle: "Filterable feed for Nearby Services, Remote Jobs, Surveys & Freelance Gigs with live currency badges (NGN & USD)",
      accent: "from-cyan-600 to-blue-600",
      content: (
        <div className="bg-[#090b10] border border-cyan-500/30 rounded-[32px] p-5 space-y-4 text-left font-sans text-xs">
          <div className="text-sm font-bold text-white flex justify-between items-center">
            <span>Opportunities Feed</span>
            <span className="text-xs font-mono text-cyan-400">+ Filter</span>
          </div>

          {/* Filter Pills */}
          <div className="flex gap-1.5 font-mono text-[9px] overflow-x-auto pb-1">
            <span className="px-2.5 py-1 rounded-full bg-cyan-500 text-black font-bold">All</span>
            <span className="px-2.5 py-1 rounded-full bg-[#121620] text-zinc-300 border border-white/10">Nearby Services</span>
            <span className="px-2.5 py-1 rounded-full bg-[#121620] text-zinc-300 border border-white/10">Remote Jobs</span>
          </div>

          {/* Card 1 */}
          <div className="p-3 rounded-2xl bg-[#121620] border border-cyan-500/30 space-y-2">
            <div className="flex justify-between items-center">
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[9px]">REMOTE JOB</span>
              <span className="text-zinc-400 text-[10px]">Full-time</span>
            </div>
            <div className="font-bold text-white">Senior Product Designer</div>
            <div className="text-[10px] text-zinc-400">Flutterwave • Lagos, NG</div>
            <div className="flex justify-between items-center pt-1">
              <span className="font-mono text-emerald-400 font-bold text-[11px]">₦850k – ₦1.2M / mo</span>
              <span className="px-3 py-1 rounded-lg bg-emerald-500 text-black font-bold text-[10px]">Apply Now →</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-3 rounded-2xl bg-[#121620] border border-purple-500/30 space-y-2">
            <div className="flex justify-between items-center">
              <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-400 font-mono text-[9px]">FREELANCE GIG</span>
              <span className="text-amber-400 text-[10px]">★ 4.8</span>
            </div>
            <div className="font-bold text-white">Design a modern fintech landing page</div>
            <div className="text-[10px] text-zinc-400">PayHub Nigeria • Figma / UI/UX</div>
          </div>
        </div>
      ),
    },
    {
      title: "Join Workspace Authentication Flow",
      subtitle: "Real-time handle availability verification (@ogboss170), full name, email, Nigerian phone prefix (+234), & security validation",
      accent: "from-indigo-600 to-purple-600",
      content: (
        <div className="bg-[#090b10] border border-blue-500/30 rounded-[32px] p-5 space-y-3 text-left font-sans text-xs">
          <div className="text-center space-y-1">
            <div className="text-sm font-bold text-white">Join Work Space</div>
            <div className="text-[10px] text-zinc-400">Start earning in minutes — it&apos;s free.</div>
          </div>

          <div className="space-y-2">
            <div className="space-y-1">
              <span className="text-[10px] text-zinc-400">Full name</span>
              <div className="p-2 rounded-lg bg-[#121620] border border-white/10 text-zinc-300 font-mono text-[10px]">
                Chidera Adekunle
              </div>
            </div>

            {/* Handle Live Check */}
            <div className="space-y-1">
              <span className="text-[10px] text-zinc-400">Choose Username Handle</span>
              <div className="p-2 rounded-lg bg-[#121620] border border-cyan-500/50 text-cyan-400 font-mono text-[10px] flex justify-between items-center">
                <span>@ogboss170</span>
                <span className="text-emerald-400 text-[9px] font-bold">✓ Available</span>
              </div>
              <div className="text-[9px] text-emerald-400 font-mono">✓ @ogboss170 is available</div>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] text-zinc-400">Phone number</span>
              <div className="p-2 rounded-lg bg-[#121620] border border-white/10 text-zinc-300 font-mono text-[10px] flex items-center gap-2">
                <span className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300">🇳🇬 +234</span>
                <span>9050045836</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Worker Profile & Badge System",
      subtitle: "Verified status, WorkSpace ID (WS-7X4P92), Gigs Completed (47), 4.9 Star Rating & Total Earnings Ledger (₦2.4M)",
      accent: "from-teal-600 to-emerald-600",
      content: (
        <div className="bg-[#090b10] border border-cyan-400/40 rounded-[32px] p-5 space-y-4 text-left font-sans text-xs">
          {/* Header Profile Cyan Card */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center space-y-2 shadow-lg">
            <div className="h-12 w-12 rounded-full bg-black/20 border-2 border-white/40 mx-auto flex items-center justify-center font-bold text-white text-base">
              CA
            </div>
            <div>
              <div className="font-bold text-sm">Chidera Adekunle</div>
              <div className="text-[10px] text-cyan-100 font-mono">@chidera • ID: WS-7X4P92</div>
            </div>
            <div className="flex justify-center gap-1.5 font-mono text-[8px]">
              <span className="px-2 py-0.5 rounded-full bg-white/20">✓ Verified</span>
              <span className="px-2 py-0.5 rounded-full bg-white/20">💎 Premium</span>
              <span className="px-2 py-0.5 rounded-full bg-white/20">🏆 Top Freelancer</span>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-1 pt-2 border-t border-white/20 text-center font-mono">
              <div>
                <div className="font-bold text-xs">47</div>
                <div className="text-[8px] text-cyan-100">Gigs done</div>
              </div>
              <div>
                <div className="font-bold text-xs">4.9 ★</div>
                <div className="text-[8px] text-cyan-100">Rating</div>
              </div>
              <div>
                <div className="font-bold text-xs">₦2.4M</div>
                <div className="text-[8px] text-cyan-100">Earned</div>
              </div>
            </div>
          </div>

          <div className="space-y-1 text-[11px] font-medium text-zinc-300">
            <div className="p-2.5 rounded-xl bg-[#121620] border border-white/10 flex justify-between items-center">
              <span>💼 My Services</span>
              <span className="text-zinc-500">→</span>
            </div>
            <div className="p-2.5 rounded-xl bg-[#121620] border border-white/10 flex justify-between items-center">
              <span>🛡️ KYC Verification</span>
              <span className="text-emerald-400 text-[10px]">Verified ✓</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Digital Wallet & Escrow Ledger",
      subtitle: "Live Available Balance (₦248,540.75), Escrow Vault (₦504,800), Deposit/Withdrawal, and Real-Time Transaction Audit",
      accent: "from-amber-600 to-cyan-600",
      content: (
        <div className="bg-[#090b10] border border-cyan-400/40 rounded-[32px] p-5 space-y-4 text-left font-sans text-xs">
          {/* Cyan Balance Card */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-600 text-white space-y-2 shadow-lg">
            <div className="text-[10px] text-cyan-100 font-mono">Available balance</div>
            <div className="text-2xl font-bold font-mono tracking-tight">₦248,540<span className="text-sm">.75</span></div>
            <div className="flex justify-between items-center pt-2 border-t border-white/20 text-[10px] font-mono">
              <span>🛡️ Escrow balance: <strong className="text-white">₦504,800</strong></span>
              <span className="px-2 py-0.5 rounded bg-black/20 font-bold">🇳🇬 NGN</span>
            </div>
          </div>

          {/* Action Quick Grid */}
          <div className="grid grid-cols-4 gap-2 text-center font-mono text-[9px]">
            <div className="p-2 rounded-xl bg-[#121620] border border-white/10 text-cyan-400">Deposit</div>
            <div className="p-2 rounded-xl bg-[#121620] border border-white/10 text-amber-400">Withdraw</div>
            <div className="p-2 rounded-xl bg-[#121620] border border-white/10 text-emerald-400">Escrow</div>
            <div className="p-2 rounded-xl bg-[#121620] border border-white/10 text-purple-400">History</div>
          </div>

          {/* Transactions List */}
          <div className="space-y-1.5">
            <div className="text-[10px] font-mono text-zinc-400 justify-between flex">
              <span>Recent Transactions</span>
              <span className="text-cyan-400">Filter</span>
            </div>

            <div className="p-2.5 rounded-xl bg-[#121620] border border-white/5 flex justify-between items-center">
              <div>
                <div className="font-bold text-white text-[11px]">Payment received</div>
                <div className="text-[9px] text-zinc-400">PayHub Nigeria • Milestone 1</div>
              </div>
              <div className="font-mono font-bold text-emerald-400 text-[11px]">+₦180,000</div>
            </div>

            <div className="p-2.5 rounded-xl bg-[#121620] border border-white/5 flex justify-between items-center">
              <div>
                <div className="font-bold text-white text-[11px]">Escrow locked</div>
                <div className="text-[9px] text-zinc-400">SwiftMove Ltd • Milestone 2</div>
              </div>
              <div className="font-mono font-bold text-amber-400 text-[11px]">+₦250,000</div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="workspace" className="py-24 relative z-10 bg-[#0b0c0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Tag */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
            <Layers className="w-3.5 h-3.5" /> Flagship Product Showcase
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Workspace Ecosystem
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            An all-in-one production marketplace ecosystem connecting users to freelance work, nearby services, transportation, learning, secure escrow payments, and real-time communication.
          </p>
        </div>

        {/* Live App Screens Showcase Carousel Tab */}
        <div className="glass-card rounded-3xl border border-white/10 overflow-hidden p-6 lg:p-10 shadow-2xl relative mb-12">
          <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold">PRODUCTION APPLICATION SCREENS</span>
              <h3 className="text-2xl font-bold text-white mt-1">{realScreens[activeScreen].title}</h3>
            </div>
            <div className="flex gap-2">
              {realScreens.map((screen, idx) => (
                <button
                  key={screen.title}
                  onClick={() => setActiveScreen(idx)}
                  className={`h-3 w-8 rounded-full transition-all ${
                    activeScreen === idx ? "bg-cyan-400 w-12" : "bg-white/10 hover:bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Description */}
            <div className="lg:col-span-6 space-y-6">
              <p className="text-zinc-300 text-base leading-relaxed">
                {realScreens[activeScreen].subtitle}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs">
                  React Native Expo
                </span>
                <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-xs">
                  NestJS Microservices
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs">
                  Paystack & Stripe
                </span>
                <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 font-mono text-xs">
                  PostgreSQL & Firestore
                </span>
              </div>

              <div className="grid grid-cols-5 gap-2 pt-4 border-t border-white/10">
                {realScreens.map((sc, i) => (
                  <button
                    key={sc.title}
                    onClick={() => setActiveScreen(i)}
                    className={`p-2.5 rounded-xl border text-[10px] font-mono text-center transition-all ${
                      activeScreen === i
                        ? "bg-cyan-500/20 border-cyan-400 text-cyan-300 font-bold"
                        : "bg-[#121318] border-white/5 text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    Screen 0{i + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Screen Device Display */}
            <div className="lg:col-span-6 flex justify-center">
              <motion.div
                key={activeScreen}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-xs aspect-[9/19] rounded-[44px] bg-[#161820] border-4 border-zinc-700 shadow-2xl p-2.5 flex flex-col justify-between overflow-hidden relative"
              >
                {/* Camera notch */}
                <div className="w-28 h-4 bg-black rounded-b-2xl mx-auto absolute top-0 left-1/2 -translate-x-1/2 z-30" />

                {/* Render Simulated Production UI */}
                <div className="h-full w-full rounded-[34px] overflow-hidden pt-4 relative">
                  {realScreens[activeScreen].content}
                </div>

                {/* Bottom App Navigation Bar */}
                <div className="pt-2 pb-1 bg-[#090b10] border-t border-white/10 flex justify-around text-zinc-500 text-[9px] font-mono z-20">
                  <div className={`text-center ${activeScreen === 0 ? "text-cyan-400 font-bold" : ""}`}>Home</div>
                  <div className={`text-center ${activeScreen === 1 ? "text-cyan-400 font-bold" : ""}`}>Gigs</div>
                  <div className={`text-center ${activeScreen === 4 ? "text-cyan-400 font-bold" : ""}`}>Wallet</div>
                  <div className={`text-center ${activeScreen === 3 ? "text-cyan-400 font-bold" : ""}`}>Profile</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Product Architectural Detail Tabs */}
        <div className="glass-card rounded-3xl border border-white/10 overflow-hidden p-6 lg:p-10 shadow-2xl relative">
          {/* Interactive Mode Nav */}
          <div className="flex flex-wrap gap-2 border-b border-white/10 pb-6 mb-8">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-4 py-2 rounded-xl text-xs font-medium font-mono transition-all ${
                activeTab === "overview"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                  : "bg-[#121318] text-zinc-400 hover:text-white"
              }`}
            >
              01. Ecosystem Architecture
            </button>
            <button
              onClick={() => setActiveTab("features")}
              className={`px-4 py-2 rounded-xl text-xs font-medium font-mono transition-all ${
                activeTab === "features"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                  : "bg-[#121318] text-zinc-400 hover:text-white"
              }`}
            >
              02. Production Modules
            </button>
            <button
              onClick={() => setActiveTab("architecture")}
              className={`px-4 py-2 rounded-xl text-xs font-medium font-mono transition-all ${
                activeTab === "architecture"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                  : "bg-[#121318] text-zinc-400 hover:text-white"
              }`}
            >
              03. Engineering Challenges
            </button>
            <button
              onClick={() => setActiveTab("revenue")}
              className={`px-4 py-2 rounded-xl text-xs font-medium font-mono transition-all ${
                activeTab === "revenue"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                  : "bg-[#121318] text-zinc-400 hover:text-white"
              }`}
            >
              04. Revenue Model
            </button>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === "overview" && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
              >
                {/* Left Info Column */}
                <div className="lg:col-span-12 space-y-6">
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Production Scale Marketplace Architecture
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    Unifying Commerce, Services & Mobility into a Single React Native Engine
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Workspace eliminates fragmentation by consolidating disparate consumer services into one high-performance Expo app powered by a NestJS enterprise microservices backend.
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
                    <div className="p-3.5 rounded-xl bg-[#121318] border border-white/10">
                      <div className="text-xl font-bold text-blue-400 font-mono">100%</div>
                      <div className="text-xs text-zinc-400 mt-0.5">TypeScript End-to-End</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#121318] border border-white/10">
                      <div className="text-xl font-bold text-emerald-400 font-mono">&lt; 150ms</div>
                      <div className="text-xs text-zinc-400 mt-0.5">Real-Time Messaging Latency</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#121318] border border-white/10">
                      <div className="text-xl font-bold text-indigo-400 font-mono">2-Party</div>
                      <div className="text-xs text-zinc-400 mt-0.5">Escrow Transaction Verification</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#121318] border border-white/10">
                      <div className="text-xl font-bold text-amber-400 font-mono">KYC Ready</div>
                      <div className="text-xs text-zinc-400 mt-0.5">Smile ID Verification</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "features" && (
              <motion.div
                key="features"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                <div className="p-5 rounded-2xl bg-[#121318] border border-white/10 space-y-3">
                  <div className="h-10 w-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-white text-base">Freelance Marketplace</h4>
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    Bidding system, portfolio showcase, proposal submission, contract milestone management, and work verification.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#121318] border border-white/10 space-y-3">
                  <div className="h-10 w-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-white text-base">Nearby Services & Ride-Hailing</h4>
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    Geolocation matching via Google Maps Platform API, driver dispatch, price estimation, and live GPS route tracking.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#121318] border border-white/10 space-y-3">
                  <div className="h-10 w-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-white text-base">Escrow & Wallet System</h4>
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    Automated two-party release mechanisms powered by Paystack and Stripe webhooks with audit log immutability.
                  </p>
                </div>
              </motion.div>
            )}

            {activeTab === "architecture" && (
              <motion.div
                key="architecture"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="p-6 rounded-2xl bg-[#121318] border border-white/10 space-y-4">
                  <h4 className="text-lg font-bold text-white">Engineering Bottlenecks Solved</h4>
                  <div className="space-y-3 text-xs text-zinc-300">
                    <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                      <span className="font-mono text-blue-400 font-bold">1. Escrow Deadlocks & Reentrancy Risk</span>
                      <p className="text-zinc-400">Solved using PostgreSQL ACID transactions via Prisma ORM and pessimistic row locking to prevent double-payouts during concurrent webhook triggers.</p>
                    </div>
                    <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                      <span className="font-mono text-indigo-400 font-bold">2. Real-Time Chat & Location Broadcasting</span>
                      <p className="text-zinc-400">Decoupled push updates to Firebase Cloud Messaging & Firestore real-time listeners, keeping heavy state updates out of the core transactional HTTP server.</p>
                    </div>
                    <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                      <span className="font-mono text-cyan-400 font-bold">3. Cross-Platform Native Performance</span>
                      <p className="text-zinc-400">Utilized Expo custom native plugins and FlashList for 60fps smooth scrolling across low-end mobile devices in emerging markets.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "revenue" && (
              <motion.div
                key="revenue"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                <div className="p-5 rounded-2xl bg-[#121318] border border-white/10 space-y-2">
                  <div className="text-xs font-mono text-blue-400 font-bold">COMMISSION MODEL</div>
                  <h4 className="text-base font-bold text-white">Marketplace Take-Rate</h4>
                  <p className="text-xs text-zinc-400">5-10% transaction fee charged on completed freelance milestones and service bookings.</p>
                </div>
                <div className="p-5 rounded-2xl bg-[#121318] border border-white/10 space-y-2">
                  <div className="text-xs font-mono text-indigo-400 font-bold">RIDE SURCHARGE</div>
                  <h4 className="text-base font-bold text-white">Ride-Hailing Cut</h4>
                  <p className="text-xs text-zinc-400">Fixed percentage cut on trip fares with dynamic surge pricing based on regional driver density.</p>
                </div>
                <div className="p-5 rounded-2xl bg-[#121318] border border-white/10 space-y-2">
                  <div className="text-xs font-mono text-purple-400 font-bold">ESCROW FEE</div>
                  <h4 className="text-base font-bold text-white">Escrow Processing</h4>
                  <p className="text-xs text-zinc-400">1.5% flat verification fee for securing funds and managing dispute resolution protocols.</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
