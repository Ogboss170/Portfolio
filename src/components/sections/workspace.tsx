"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Layers, ShieldCheck, MapPin, DollarSign, MessageSquare, ExternalLink, Zap, CheckCircle2, Play, ArrowRight, UserCheck, Wallet, Search } from "lucide-react";

export function WorkspaceProduct() {
  const [activeTab, setActiveTab] = useState<"overview" | "screens" | "features" | "architecture" | "revenue">("overview");
  const [activeScreen, setActiveScreen] = useState<number>(0);

  const realScreens = [
    {
      title: "Explore & Home Dashboard",
      subtitle: "Unified Search, Categories (Quick Ride, Nearby Services, Remote Jobs, Freelance Gigs), Featured Jobs & Recommended Pros",
      image: "/images/workspace-home.jpg",
      alt: "Workspace Home Explore Screen",
    },
    {
      title: "Opportunities Feed",
      subtitle: "Filterable feed for Nearby Services, Remote Jobs, Surveys & Freelance Gigs with live currency badges (NGN & USD)",
      image: "/images/workspace-gigs.jpg",
      alt: "Workspace Opportunities & Gigs Screen",
    },
    {
      title: "Join Workspace Authentication Flow",
      subtitle: "Real-time handle availability verification (@ogboss170), full name, email, Nigerian phone prefix (+234), & security validation",
      image: "/images/workspace-signup.jpg",
      alt: "Workspace Join Account Creation Screen",
    },
    {
      title: "Worker Profile & Badge System",
      subtitle: "Verified status, WorkSpace ID (WS-7X4P92), Gigs Completed (47), 4.9 Star Rating & Total Earnings Ledger (₦2.4M)",
      image: "/images/workspace-profile.jpg",
      alt: "Workspace User Profile Screen",
    },
    {
      title: "Digital Wallet & Escrow Ledger",
      subtitle: "Live Available Balance (₦248,540.75), Escrow Vault (₦504,800), Deposit/Withdrawal, and Real-Time Transaction Audit",
      image: "/images/workspace-wallet.jpg",
      alt: "Workspace Digital Wallet & Escrow Screen",
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

        {/* Live App Screenshots Showcase Carousel */}
        <div className="glass-card rounded-3xl border border-white/10 overflow-hidden p-6 lg:p-10 shadow-2xl relative mb-12">
          <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold">PRODUCTION APPLICATION SCREENSHOTS</span>
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

            {/* Right Screen Device Display with Real Image */}
            <div className="lg:col-span-6 flex justify-center">
              <motion.div
                key={activeScreen}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-[280px] aspect-[9/19] rounded-[44px] bg-[#161820] border-4 border-zinc-700 shadow-2xl p-2 flex flex-col justify-between overflow-hidden relative group"
              >
                {/* Camera notch */}
                <div className="w-28 h-4 bg-black rounded-b-2xl mx-auto absolute top-0 left-1/2 -translate-x-1/2 z-30" />

                {/* Render Actual Uploaded Screenshot Image */}
                <div className="h-full w-full rounded-[34px] overflow-hidden relative">
                  <Image
                    src={realScreens[activeScreen].image}
                    alt={realScreens[activeScreen].alt}
                    fill
                    className="object-cover object-top rounded-[34px]"
                    priority
                  />
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
