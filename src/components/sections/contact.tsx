"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2, Code2, Share2, MessageSquare, FileText, Download } from "lucide-react";
import confetti from "canvas-confetti";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  subject: z.string().min(3, "Subject must be at least 3 characters."),
  message: z.string().min(10, "Message must be at least 10 characters long."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message.");
      }

      setSubmitted(true);
      confetti({ particleCount: 80, spread: 60, origin: { y: 0.8 } });
      reset();
    } catch (error) {
      alert("Message sending failed. Please try emailing directly to ogboss170@gmail.com");
    }
  };

  const handleDownloadResume = () => {
    // Dynamically generate and trigger PDF/text summary download of Oghosa's Resume
    const resumeText = `
===================================================================
                  OGHOSA (OGBOSS) - ENGINEERING CV
===================================================================
Title: Full-Stack Web, Mobile & Backend Engineer | Founder @ Workspace
Location: Benin, Nigeria (Open for Remote Opportunities)
Email: ogboss170@gmail.com
WhatsApp: +234 9050045836
GitHub: https://github.com/ogboss170
LinkedIn: https://linkedin.com/in/osadolor-oghosa

SUMMARY
-------------------------------------------------------------------
21-year-old Software Engineer and Founder of Workspace. Specializing in
cross-platform mobile apps (React Native / Expo), enterprise web (Next.js),
and scalable microservice backends (NestJS, Prisma ORM, PostgreSQL).

FLAGSHIP PRODUCT: WORKSPACE ECOSYSTEM
-------------------------------------------------------------------
An all-in-one marketplace platform unifying freelance gigs, nearby services,
ride-hailing, interactive learning, automated financial escrow, and real-time chat.

CORE SKILLS
-------------------------------------------------------------------
• Mobile: React Native, Expo, TypeScript, FlashList, Reanimated
• Web: Next.js 15, React, Tailwind CSS, Framer Motion, TypeScript
• Backend: NestJS, Prisma ORM, PostgreSQL, REST, WebSockets, Microservices
• Cloud & Services: Firebase Auth, Firestore, Cloud SQL, FCM Push
• Integrations: Paystack API, Stripe, Google Maps Platform, Smile ID KYC
===================================================================
    `.trim();

    const blob = new Blob([resumeText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Oghosa_Ogboss_Software_Engineer_Resume.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="contact" className="py-24 relative z-10 bg-[#08090a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Links & Resume Download */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
                <Mail className="w-3.5 h-3.5" /> Direct Communication
              </div>
              <h2 className="text-4xl font-bold text-white tracking-tight">
                Let&apos;s Build Production Systems Together
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Whether you have a senior engineering role, require marketplace consulting, or want to partner on Workspace, I am always open to conversation.
              </p>
            </div>

            {/* Social Buttons List */}
            <div className="space-y-3">
              <a
                href="https://github.com/ogboss170"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-[#121318] border border-white/10 hover:border-white/20 transition-all text-white font-medium text-sm group"
              >
                <div className="flex items-center gap-3">
                  <Code2 className="w-5 h-5 text-zinc-400 group-hover:text-white" />
                  <span>GitHub Profile</span>
                </div>
                <span className="text-xs font-mono text-zinc-500 group-hover:text-blue-400">@ogboss170 →</span>
              </a>

              <a
                href="https://linkedin.com/in/osadolor-oghosa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-[#121318] border border-white/10 hover:border-white/20 transition-all text-white font-medium text-sm group"
              >
                <div className="flex items-center gap-3">
                  <Share2 className="w-5 h-5 text-blue-400" />
                  <span>LinkedIn Network</span>
                </div>
                <span className="text-xs font-mono text-zinc-500 group-hover:text-blue-400">Osadolor Oghosa →</span>
              </a>

              <a
                href="mailto:ogboss170@gmail.com"
                className="flex items-center justify-between p-4 rounded-xl bg-[#121318] border border-white/10 hover:border-white/20 transition-all text-white font-medium text-sm group"
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-amber-400" />
                  <span>Direct Email</span>
                </div>
                <span className="text-xs font-mono text-zinc-500 group-hover:text-blue-400">ogboss170@gmail.com →</span>
              </a>

              <a
                href="https://wa.me/2349050045836"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-[#121318] border border-white/10 hover:border-white/20 transition-all text-white font-medium text-sm group"
              >
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-5 h-5 text-emerald-400" />
                  <span>WhatsApp Instant</span>
                </div>
                <span className="text-xs font-mono text-zinc-500 group-hover:text-emerald-400">+234 9050045836 →</span>
              </a>
            </div>

            {/* Resume Download Feature Box */}
            <div id="resume" className="p-6 rounded-2xl bg-gradient-to-tr from-blue-600/15 to-purple-600/15 border border-blue-500/30 space-y-4">
              <div className="flex items-center gap-3">
                <FileText className="w-6 h-6 text-blue-400" />
                <div>
                  <h4 className="font-bold text-white text-base">Oghosa CV / Engineering Résumé</h4>
                  <p className="text-xs text-zinc-400">Updated 2026 • Full-Stack Web, Mobile & Backend</p>
                </div>
              </div>
              <button
                onClick={handleDownloadResume}
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 transition-all active:scale-95"
              >
                <Download className="w-4 h-4" /> Download Official Résumé
              </button>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 md:p-10 rounded-3xl border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-white">Send a Message</h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-3"
                >
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="text-xl font-bold text-white">Message Transmitted!</h4>
                  <p className="text-xs text-zinc-300">
                    Thank you for reaching out. I will respond to your message within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-4 py-2 rounded-xl bg-[#121318] text-xs font-mono text-zinc-300 border border-white/10 hover:border-white/30 transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-zinc-300">Your Name</label>
                      <input
                        {...register("name")}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl bg-[#121318] border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                      />
                      {errors.name && (
                        <p className="text-[11px] text-red-400">{errors.name.message}</p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-zinc-300">Email Address</label>
                      <input
                        {...register("email")}
                        type="email"
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#121318] border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-400">{errors.message?.message || errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-300">Subject</label>
                    <input
                      {...register("subject")}
                      placeholder="Project details or engineering role opportunity"
                      className="w-full px-4 py-3 rounded-xl bg-[#121318] border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    />
                    {errors.subject && (
                      <p className="text-[11px] text-red-400">{errors.subject.message}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-300">Message</label>
                    <textarea
                      {...register("message")}
                      rows={5}
                      placeholder="Tell me about your product, role details, or technical scope..."
                      className="w-full px-4 py-3 rounded-xl bg-[#121318] border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-400">{errors.message.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-xl shadow-blue-600/20 transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      "Transmitting..."
                    ) : (
                      <>
                        Send Message <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
