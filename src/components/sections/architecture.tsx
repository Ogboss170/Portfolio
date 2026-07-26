"use client";

import { motion } from "framer-motion";
import { Cpu, Server, Database, Cloud, ShieldCheck, Globe, ArrowDown, ArrowRight } from "lucide-react";

export function ArchitectureDiagram() {
  return (
    <section id="architecture" className="py-24 relative z-10 bg-[#08090a] border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-400">
            <Cpu className="w-3.5 h-3.5" /> High-Availability Infrastructure
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            System Architecture
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Interactive visualization of how clients, API microservices, databases, and external cloud provider networks synchronize in real time.
          </p>
        </div>

        {/* Interactive Architecture Flow Diagram */}
        <div className="glass-card rounded-3xl border border-white/10 p-6 md:p-12 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

          {/* Node 1: Mobile Client Layer */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-8"
          >
            <div className="w-full max-w-md p-5 rounded-2xl bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-purple-600/20 border border-blue-500/30 text-center shadow-lg backdrop-blur-md hover:border-blue-400 transition-colors">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-400 mb-1">
                <Globe className="w-4 h-4" /> CLIENT PRESENTATION LAYER
              </div>
              <div className="text-lg font-bold text-white">React Native (Expo + TypeScript)</div>
              <div className="text-xs text-zinc-400 mt-1 font-mono">
                iOS & Android Native Bundles • FlashList • Reanimated • Expo Router
              </div>
            </div>
          </motion.div>

          {/* Animated Connector Arrow Down */}
          <div className="flex justify-center my-4">
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="flex flex-col items-center text-blue-400 font-mono text-xs gap-1"
            >
              <span className="bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">gRPC / HTTPS / WebSockets</span>
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </div>

          {/* Node 2: Core API Layer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mb-10"
          >
            <div className="w-full max-w-lg p-6 rounded-2xl bg-[#121318] border border-indigo-500/40 text-center shadow-xl relative group">
              <div className="absolute -inset-0.5 rounded-2xl bg-indigo-500/20 blur opacity-75 group-hover:opacity-100 transition" />
              <div className="relative space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-indigo-400">
                  <Server className="w-4 h-4" /> BACKEND BUSINESS LOGIC CORE
                </div>
                <div className="text-xl font-bold text-white">NestJS + Prisma ORM Backend</div>
                <div className="text-xs text-zinc-400 font-mono">
                  Modular Controller Microservices • JWT Auth Guards • Rate Limiting • Webhook Listeners
                </div>
              </div>
            </div>
          </motion.div>

          {/* Connectors Branching Out to 3 Infrastructure Columns */}
          <div className="hidden md:flex justify-around items-center my-6 text-zinc-500 font-mono text-xs">
            <div className="flex items-center gap-1 text-cyan-400">
              <ArrowDown className="w-4 h-4" /> Relational Data
            </div>
            <div className="flex items-center gap-1 text-amber-400">
              <ArrowDown className="w-4 h-4" /> Real-time Platform
            </div>
            <div className="flex items-center gap-1 text-purple-400">
              <ArrowDown className="w-4 h-4" /> Integrated APIs
            </div>
          </div>

          {/* Node 3: 3 Column Backend Infrastructure */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Column A: PostgreSQL Cloud SQL */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-5 rounded-2xl bg-[#121318] border border-cyan-500/30 space-y-3"
            >
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs">
                <Database className="w-4 h-4" /> RELATIONAL DATA STORE
              </div>
              <div className="font-bold text-white text-base">PostgreSQL (Cloud SQL)</div>
              <ul className="text-xs text-zinc-400 space-y-1.5 font-mono">
                <li>• Strict ACID Financial Transactions</li>
                <li>• User Profiles & Wallet Ledgers</li>
                <li>• Contract & Escrow States</li>
                <li>• Indexed Geospatial Queries</li>
              </ul>
            </motion.div>

            {/* Column B: Firebase Platform */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-5 rounded-2xl bg-[#121318] border border-amber-500/30 space-y-3"
            >
              <div className="flex items-center gap-2 text-amber-400 font-mono text-xs">
                <Cloud className="w-4 h-4" /> REAL-TIME PLATFORM
              </div>
              <div className="font-bold text-white text-base">Firebase Suite</div>
              <ul className="text-xs text-zinc-400 space-y-1.5 font-mono">
                <li>• Firebase Authentication</li>
                <li>• Firestore Real-Time Chat</li>
                <li>• Cloud Storage (Assets & Documents)</li>
                <li>• FCM Push Notification Engine</li>
              </ul>
            </motion.div>

            {/* Column C: External Integrations */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-5 rounded-2xl bg-[#121318] border border-purple-500/30 space-y-3"
            >
              <div className="flex items-center gap-2 text-purple-400 font-mono text-xs">
                <ShieldCheck className="w-4 h-4" /> THIRD-PARTY SERVICES
              </div>
              <div className="font-bold text-white text-base">External APIs</div>
              <ul className="text-xs text-zinc-400 space-y-1.5 font-mono">
                <li>• Google Maps (Location & Routing)</li>
                <li>• Paystack (African Payments & Escrow)</li>
                <li>• Stripe (Global Payments)</li>
                <li>• Smile ID (Biometric Verification)</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
