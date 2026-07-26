"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Layers, ShieldCheck, MapPin, DollarSign, MessageSquare, ExternalLink, Zap, CheckCircle2, Play } from "lucide-react";

export function WorkspaceProduct() {
  const [activeTab, setActiveTab] = useState<"overview" | "features" | "architecture" | "revenue">("overview");

  return (
    <section id="workspace" className="py-24 relative z-10 bg-[#0b0c0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Tag */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
            <Layers className="w-3.5 h-3.5" /> Flagship Product
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Workspace Ecosystem
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            An all-in-one marketplace ecosystem connecting users to freelance work, nearby services, transportation, learning, secure escrow payments, and real-time communication.
          </p>
        </div>

        {/* Product Showcase Card Container */}
        <div className="glass-card rounded-3xl border border-white/10 overflow-hidden p-6 lg:p-10 shadow-2xl relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

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
              01. Ecosystem Overview
            </button>
            <button
              onClick={() => setActiveTab("features")}
              className={`px-4 py-2 rounded-xl text-xs font-medium font-mono transition-all ${
                activeTab === "features"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                  : "bg-[#121318] text-zinc-400 hover:text-white"
              }`}
            >
              02. Integrated Modules
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
                <div className="lg:col-span-6 space-y-6">
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Production Scale Marketplace Architecture
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    Unifying Commerce, Services & Mobility into a Single React Native Engine
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Workspace eliminates fragmentation by consolidating disparate consumer services into one high-performance Expo app powered by a NestJS enterprise microservices backend.
                  </p>

                  <div className="grid grid-cols-2 gap-4 pt-2">
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

                {/* Right Column: Interactive Phone Mockup Illustration */}
                <div className="lg:col-span-6 flex justify-center">
                  <div className="relative w-full max-w-sm aspect-[9/18] rounded-[44px] bg-[#161820] border-4 border-zinc-700 shadow-2xl p-3 flex flex-col justify-between overflow-hidden group">
                    {/* Camera notch */}
                    <div className="w-32 h-5 bg-black rounded-b-2xl mx-auto absolute top-0 left-1/2 -translate-x-1/2 z-20" />

                    {/* App Mock Screen Content */}
                    <div className="bg-[#090a0d] h-full w-full rounded-[34px] pt-8 px-4 pb-4 flex flex-col justify-between overflow-hidden relative">
                      {/* Top Bar */}
                      <div className="flex justify-between items-center text-xs text-zinc-400 font-mono mb-4">
                        <span>Workspace App</span>
                        <span className="text-emerald-400 font-bold">● Active</span>
                      </div>

                      {/* Mock UI Modules Stack */}
                      <div className="space-y-3">
                        <div className="p-3 rounded-xl bg-gradient-to-r from-blue-600/30 to-indigo-600/30 border border-blue-500/30">
                          <div className="text-xs font-bold text-white flex items-center justify-between">
                            <span>Freelance Gig Escrow</span>
                            <span className="text-blue-300">$450.00</span>
                          </div>
                          <div className="text-[11px] text-zinc-300 mt-1">Status: Funded in Escrow</div>
                        </div>

                        <div className="p-3 rounded-xl bg-purple-600/20 border border-purple-500/30">
                          <div className="text-xs font-bold text-white flex items-center justify-between">
                            <span>Nearby Ride-Hailing</span>
                            <span className="text-purple-300 font-mono">Driver Arriving</span>
                          </div>
                          <div className="text-[11px] text-zinc-300 mt-1">Toyota Corolla • 2 mins away</div>
                        </div>

                        <div className="p-3 rounded-xl bg-amber-600/20 border border-amber-500/30">
                          <div className="text-xs font-bold text-white flex items-center justify-between">
                            <span>Handyman Service</span>
                            <span className="text-amber-300">Verified Pro</span>
                          </div>
                          <div className="text-[11px] text-zinc-300 mt-1">Electrical Repair • Scheduled</div>
                        </div>
                      </div>

                      {/* Bottom Nav Mock */}
                      <div className="pt-3 border-t border-white/10 flex justify-around text-zinc-400">
                        <div className="text-center text-[10px] text-blue-400">
                          <Smartphone className="w-4 h-4 mx-auto" /> Home
                        </div>
                        <div className="text-center text-[10px]">
                          <DollarSign className="w-4 h-4 mx-auto" /> Wallet
                        </div>
                        <div className="text-center text-[10px]">
                          <MessageSquare className="w-4 h-4 mx-auto" /> Chat
                        </div>
                      </div>
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
