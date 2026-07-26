"use client";

import { motion } from "framer-motion";
import { UserCheck, Rocket, Zap, Shield, Sparkles } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 relative z-10 border-t border-white/5 bg-[#08090a]/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Left Column: Founder Persona Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-5/12"
          >
            <div className="relative group">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-25 blur-lg group-hover:opacity-40 transition duration-500" />
              <div className="relative glass-card rounded-2xl p-6 border border-white/10 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center font-bold text-lg text-white font-mono shadow-md">
                      OG
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base">Oghosa (Ogboss)</h3>
                      <p className="text-xs text-blue-400 font-mono">21-Year-Old Software Founder</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] font-mono">
                    Nigeria 🇳🇬
                  </span>
                </div>

                <div className="space-y-3 pt-2 border-t border-white/10 text-xs text-zinc-300 font-mono">
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-zinc-500">Primary Discipline</span>
                    <span className="text-zinc-200">Mobile & Backend Architecture</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-zinc-500">Core Stack</span>
                    <span className="text-zinc-200">React Native + NestJS</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-zinc-500">Flagship Venture</span>
                    <span className="text-blue-400">Workspace Ecosystem</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-zinc-500">Production Experience</span>
                    <span className="text-zinc-200">Production-Scale Ecosystems</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-blue-500/5 border border-blue-500/20 flex items-center gap-3 text-xs text-blue-300">
                  <Sparkles className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span>&quot;I don&apos;t build demo apps. I build products that process transactions and serve real users.&quot;</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative Story */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full md:w-7/12 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
              <UserCheck className="w-3.5 h-3.5" /> Founder Story & Purpose
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              I am a 21-year-old software engineer focused on building <span className="bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">scalable digital products</span>.
            </h2>

            <div className="space-y-4 text-zinc-400 text-sm leading-relaxed">
              <p>
                Rather than spending time creating standard tutorial projects or superficial clones, I dedicated my engineering journey to solving complex real-world multi-sided marketplace problems from Nigeria for Africa and the world.
              </p>
              <p>
                I engineered <strong className="text-white">Workspace</strong>—an ambitious production ecosystem that unifies freelancing, nearby service bookings, ride-hailing transportation, interactive learning, secure automated escrow payments, and instant low-latency real-time communications.
              </p>
              <p>
                My work spans cross-platform mobile engineering with Expo/React Native down to enterprise-grade backend infrastructure powered by NestJS, Prisma ORM, PostgreSQL, and resilient financial integrations with Paystack and Stripe.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="p-3 rounded-xl bg-[#121318] border border-white/10 text-center">
                <div className="text-2xl font-bold text-white font-mono">21</div>
                <div className="text-[11px] text-zinc-500">Years Old</div>
              </div>
              <div className="p-3 rounded-xl bg-[#121318] border border-white/10 text-center">
                <div className="text-2xl font-bold text-blue-400 font-mono">7-in-1</div>
                <div className="text-[11px] text-zinc-500">Platform Modules</div>
              </div>
              <div className="p-3 rounded-xl bg-[#121318] border border-white/10 text-center">
                <div className="text-2xl font-bold text-purple-400 font-mono">100%</div>
                <div className="text-[11px] text-zinc-500">Production Mindset</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
