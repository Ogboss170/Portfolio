"use client";

import { motion } from "framer-motion";
import { Smartphone, Server, Cloud, CreditCard, MapPin, ShieldCheck, Layers } from "lucide-react";

const stackGroups = [
  {
    category: "Mobile Engineering",
    icon: Smartphone,
    color: "text-blue-400 border-blue-500/30 bg-blue-500/10",
    items: [
      { name: "React Native", role: "Cross-Platform Framework" },
      { name: "Expo Ecosystem", role: "EAS Build, Prebuild & Native Modules" },
      { name: "TypeScript", role: "Strict Type Safety End-to-End" },
      { name: "Reanimated & FlashList", role: "60fps Smooth UI & High Performance" },
    ],
  },
  {
    category: "Backend & Microservices",
    icon: Server,
    color: "text-indigo-400 border-indigo-500/30 bg-indigo-500/10",
    items: [
      { name: "NestJS", role: "Enterprise Architecture & Dependency Injection" },
      { name: "Prisma ORM", role: "Type-Safe DB Migrations & Query Engine" },
      { name: "PostgreSQL", role: "ACID Transactions & Cloud SQL" },
      { name: "REST & WebSockets", role: "High-Throughput API Gateway" },
    ],
  },
  {
    category: "Cloud & Real-Time Infrastructure",
    icon: Cloud,
    color: "text-amber-400 border-amber-500/30 bg-amber-500/10",
    items: [
      { name: "Firebase Auth", role: "OAuth & Phone Verification" },
      { name: "Firestore", role: "NoSQL Real-Time Sync Engine" },
      { name: "Firebase Storage", role: "Encrypted Asset & Media Hosting" },
      { name: "FCM Push Notifications", role: "Cross-Platform Background Alerts" },
      { name: "Google Cloud Platform", role: "Cloud SQL & Run Hosting" },
    ],
  },
  {
    category: "Financials, Maps & Identity APIs",
    icon: CreditCard,
    color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
    items: [
      { name: "Paystack API", role: "African Payments, Cards & Bank Transfers" },
      { name: "Stripe", role: "Global Credit Card & Escrow Processing" },
      { name: "Google Maps Platform", role: "Places, Geocoding & Distance Matrix" },
      { name: "Smile ID", role: "KYC Biometrics & Government ID Verification" },
    ],
  },
];

export function TechStack() {
  return (
    <section id="tech-stack" className="py-24 relative z-10 bg-[#090a0d] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-400">
            <Layers className="w-3.5 h-3.5" /> Production Arsenal
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Categorized Tech Stack
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Battle-tested technologies selected for resilience, speed, developer velocity, and maintainability.
          </p>
        </div>

        {/* Stack Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stackGroups.map((group, idx) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-6 md:p-8 rounded-3xl border border-white/10 space-y-6"
              >
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-2xl border ${group.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">{group.category}</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="p-3.5 rounded-xl bg-[#121318] border border-white/5 space-y-1 hover:border-white/20 transition-colors"
                    >
                      <div className="font-bold text-sm text-white font-mono">{item.name}</div>
                      <div className="text-[11px] text-zinc-400">{item.role}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
