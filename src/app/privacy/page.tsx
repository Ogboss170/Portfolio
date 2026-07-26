"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Mail, Code2, Share2, Lock, EyeOff, Server, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function PrivacyPolicy() {
  return (
    <main className="relative bg-[#08090a] min-h-screen text-slate-100 selection:bg-blue-500 selection:text-white">
      <Navbar />

      <section className="pt-32 pb-24 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Back button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Portfolio
          </Link>

          {/* Page Header */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
              <ShieldCheck className="w-3.5 h-3.5" /> Legal & Transparency
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-zinc-400 text-sm font-mono">
              Last updated: July 26, 2026 • Oghosa (Ogboss) Official Portfolio
            </p>
          </div>

          {/* Privacy Content Glass Card */}
          <div className="glass-card p-6 md:p-10 rounded-3xl border border-white/10 space-y-8 text-sm text-zinc-300 leading-relaxed">
            {/* 1. Introduction */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Lock className="w-5 h-5 text-blue-400" /> 1. Introduction
              </h2>
              <p>
                Your privacy is fundamental to engineering excellence. This Privacy Policy outlines how personal data is collected, processed, and protected when visiting{" "}
                <strong className="text-white">https://portfolio-eta-kohl-93.vercel.app</strong> or communicating through the interactive contact forms.
              </p>
            </div>

            {/* 2. Information We Collect */}
            <div className="space-y-3 pt-4 border-t border-white/5">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <EyeOff className="w-5 h-5 text-indigo-400" /> 2. Information We Collect
              </h2>
              <p>When using the contact form, the following details are submitted voluntarily:</p>
              <ul className="list-disc list-inside space-y-1.5 text-zinc-400 font-mono text-xs pl-2">
                <li><strong className="text-zinc-200">Full Name:</strong> Used to personalize communication.</li>
                <li><strong className="text-zinc-200">Email Address:</strong> Used solely to reply to inquiries or contract opportunities.</li>
                <li><strong className="text-zinc-200">Message Content & Subject:</strong> Context provided regarding technical roles, consulting, or project inquiries.</li>
              </ul>
            </div>

            {/* 3. Data Protection Guarantee */}
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 space-y-2">
              <h3 className="font-bold text-emerald-400 text-base flex items-center gap-2">
                ✓ Zero Data Commercialization Guarantee
              </h3>
              <p className="text-xs text-zinc-300">
                I strictly <strong className="text-white">do not sell, rent, trade, or monetize</strong> your personal information to any third party, advertiser, or data broker under any circumstances.
              </p>
            </div>

            {/* 4. Analytics & Hosting Infrastructure */}
            <div className="space-y-3 pt-4 border-t border-white/5">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Server className="w-5 h-5 text-amber-400" /> 4. Analytics & Hosting Infrastructure
              </h2>
              <p>
                This portfolio is hosted globally on <strong className="text-white">Vercel Inc.</strong> and utilizes <strong className="text-white">Vercel Analytics</strong> to monitor platform performance, page load times, and aggregated regional traffic.
              </p>
              <p className="text-xs text-zinc-400">
                Vercel Analytics collects privacy-friendly, anonymized telemetry metrics (such as browser device type, country, and page views) without tracking individual identities or using invasive cross-site cookies.
              </p>
            </div>

            {/* 5. Contact Information */}
            <div className="space-y-4 pt-4 border-t border-white/5">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Mail className="w-5 h-5 text-purple-400" /> 5. Direct Contact & Rights
              </h2>
              <p>
                If you have questions regarding this Privacy Policy or wish to request the removal of any communicated message data, please contact me directly:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 font-mono text-xs">
                <a
                  href="mailto:ogboss170@gmail.com"
                  className="p-3.5 rounded-xl bg-[#121318] border border-white/10 hover:border-white/20 text-zinc-300 hover:text-white flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span className="truncate">ogboss170@gmail.com</span>
                </a>

                <a
                  href="https://github.com/ogboss170"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#121318] border border-white/10 hover:border-white/20 text-zinc-300 hover:text-white flex items-center gap-2"
                >
                  <Code2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span className="truncate">@ogboss170</span>
                </a>

                <a
                  href="https://linkedin.com/in/osadolor-oghosa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#121318] border border-white/10 hover:border-white/20 text-zinc-300 hover:text-white flex items-center gap-2"
                >
                  <Share2 className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                  <span className="truncate">Osadolor Oghosa</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
