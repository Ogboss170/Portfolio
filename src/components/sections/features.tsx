"use client";

import { motion } from "framer-motion";
import { 
  Briefcase, MapPin, Car, BookOpen, BarChart3, Wallet, 
  ShieldCheck, MessageSquare, Bell, UserCheck, Sparkles 
} from "lucide-react";

const features = [
  {
    icon: Briefcase,
    title: "Freelance Marketplace",
    tag: "Bidding & Milestones",
    color: "from-blue-500/20 to-indigo-500/20 border-blue-500/30 text-blue-400",
    description: "End-to-end gig creation, proposal bidding, milestone breakdown, client-freelancer contracts, and delivery confirmation.",
  },
  {
    icon: MapPin,
    title: "Nearby Services",
    tag: "Geo Matching",
    color: "from-indigo-500/20 to-purple-500/20 border-indigo-500/30 text-indigo-400",
    description: "On-demand handyman, repair, and artisan discovery based on user GPS proximity with dynamic scheduling.",
  },
  {
    icon: Car,
    title: "Ride-Hailing",
    tag: "Live Route Tracking",
    color: "from-purple-500/20 to-pink-500/20 border-purple-500/30 text-purple-400",
    description: "Driver dispatch engine, real-time vehicle geolocation updates via WebSockets, trip estimation, and driver rating.",
  },
  {
    icon: BookOpen,
    title: "Tutorials & Learning",
    tag: "Skill Development",
    color: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-400",
    description: "Interactive video lessons, skill assessments, certification badges, and mentor booking integrations.",
  },
  {
    icon: BarChart3,
    title: "Surveys & Market Insights",
    tag: "Analytics Engine",
    color: "from-cyan-500/20 to-blue-500/20 border-cyan-500/30 text-cyan-400",
    description: "Monetized user feedback surveys, market research tools, and instant response analytics reporting.",
  },
  {
    icon: Wallet,
    title: "Digital Wallet",
    tag: "Multi-Currency",
    color: "from-amber-500/20 to-yellow-500/20 border-amber-500/30 text-amber-400",
    description: "In-app virtual balances, instant P2P transfers, bank payouts via Paystack API, and automated transaction history.",
  },
  {
    icon: ShieldCheck,
    title: "Financial Escrow",
    tag: "Safe Payments",
    color: "from-red-500/20 to-orange-500/20 border-red-500/30 text-red-400",
    description: "Two-party funds vault protection ensuring freelancers and service providers get paid only when work criteria is met.",
  },
  {
    icon: MessageSquare,
    title: "Real-Time Chat",
    tag: "Firestore WebSockets",
    color: "from-blue-500/20 to-cyan-500/20 border-blue-500/30 text-blue-300",
    description: "Instant messaging, image & file attachments, audio messages, and typing indicators powered by Firestore listeners.",
  },
  {
    icon: Bell,
    title: "Push Notifications",
    tag: "Firebase FCM",
    color: "from-violet-500/20 to-indigo-500/20 border-violet-500/30 text-violet-300",
    description: "Contextual push alerts for ride arrivals, chat messages, escrow updates, and job proposals.",
  },
  {
    icon: UserCheck,
    title: "Identity Verification",
    tag: "Smile ID Biometrics",
    color: "from-teal-500/20 to-emerald-500/20 border-teal-500/30 text-teal-300",
    description: "Government ID verification and biometric liveness checks preventing fraud across service providers and drivers.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 relative z-10 bg-[#08090a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
            <Sparkles className="w-3.5 h-3.5" /> Workspace Core Capabilities
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Integrated Ecosystem Features
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Ten production-grade modules engineered seamlessly into a single React Native application.
          </p>
        </div>

        {/* 10 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="glass-card p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br border ${feat.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-zinc-400">
                    {feat.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {feat.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {feat.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
