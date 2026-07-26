"use client";

import { motion } from "framer-motion";
import { BookOpen, Database, Shield, Flame, Terminal, Code, Cpu } from "lucide-react";

const decisions = [
  {
    title: "Why PostgreSQL Handles Transactional Data",
    icon: Database,
    tech: "PostgreSQL",
    color: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
    reasoning:
      "Financial ledgers, user balances, and contract milestones require 100% strict ACID guarantees. PostgreSQL prevents race conditions and data corruption during simultaneous escrow transactions using row-level locking and isolated transaction isolation levels.",
  },
  {
    title: "Why Firestore is Used for Real-Time Features",
    icon: Flame,
    tech: "Firestore & FCM",
    color: "text-amber-400 border-amber-500/30 bg-amber-500/10",
    reasoning:
      "Using a traditional relational database for high-frequency chat messages and live location pings causes connection pool exhaustion. Firestore's WebSocket subscription model offloads live sync to edge servers while keeping our primary API stateless.",
  },
  {
    title: "Why NestJS Manages Business Logic",
    icon: Terminal,
    tech: "NestJS",
    color: "text-red-400 border-red-500/30 bg-red-500/10",
    reasoning:
      "NestJS enforces strict modular dependency injection and TypeScript decorators. As Workspace scaled across 7 distinct feature domains, NestJS kept business logic clean, testable, and maintainable without becoming a spaghetti codebase.",
  },
  {
    title: "Why Expo Was Chosen for Mobile",
    icon: Code,
    tech: "Expo + React Native",
    color: "text-blue-400 border-blue-500/30 bg-blue-500/10",
    reasoning:
      "Expo prebuild and native module plugins allowed 95%+ code sharing between iOS and Android. OTA (over-the-air) updates via EAS enabled rapid deployment of critical bug fixes without waiting days for App Store review cycles.",
  },
  {
    title: "Why Prisma is the Backend ORM",
    icon: Cpu,
    tech: "Prisma ORM",
    color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
    reasoning:
      "Prisma generates auto-completed end-to-end TypeScript types directly from database schemas. This eliminates runtime type mismatch crashes between backend NestJS services and database responses during schema migrations.",
  },
  {
    title: "How the Escrow Protocol Secures Transactions",
    icon: Shield,
    tech: "Paystack + Stripe Escrow",
    color: "text-purple-400 border-purple-500/30 bg-purple-500/10",
    reasoning:
      "When a client hires a freelancer or orders a service, funds are locked in a double-signed escrow vault. Funds are only transferred upon buyer verification or cryptographic proof of service delivery, with automated dispute rollback hooks.",
  },
];

export function EngineeringPhilosophy() {
  return (
    <section id="philosophy" className="py-24 relative z-10 bg-[#090a0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
            <BookOpen className="w-3.5 h-3.5" /> Architectural Rationale
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Engineering Philosophy
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Instead of just listing technologies, here is the rationale behind every critical technical decision made when architecting production systems.
          </p>
        </div>

        {/* 6 Decision Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {decisions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="glass-card p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`p-2.5 rounded-xl border ${item.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-zinc-400">
                      {item.tech}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white leading-snug">{item.title}</h3>
                  <p className="text-zinc-400 text-xs leading-relaxed font-normal">{item.reasoning}</p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
                  <span>Decision #{idx + 1}</span>
                  <span className="text-emerald-400">Production Verified ✓</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
