"use client";

import { motion } from "framer-motion";
import { Smartphone, Server, Layers, CreditCard, Cloud, Lock, Cpu, Wrench, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Cross-Platform Mobile App Development",
    description: "Building production React Native & Expo applications for iOS & Android with 60fps animations, offline storage, and native module integrations.",
    deliverables: ["Expo App Prebuild", "TypeScript Architecture", "App Store & Play Store Submissions"],
  },
  {
    icon: Server,
    title: "Backend API & Microservices",
    description: "Designing RESTful and WebSocket microservices with NestJS, Prisma ORM, and PostgreSQL designed for horizontal scaling and low latency.",
    deliverables: ["Swagger Open API Specs", "ACID Compliant DB Schemas", "JWT & OAuth Security"],
  },
  {
    icon: Layers,
    title: "Marketplace Platform Development",
    description: "Architecting multi-sided marketplaces connecting buyers, sellers, drivers, and service providers with dynamic matching engines.",
    deliverables: ["Multi-Role Dashboards", "Order State Machine", "Dispute Resolution Modules"],
  },
  {
    icon: CreditCard,
    title: "Payment & Escrow Integrations",
    description: "Integrating Paystack and Stripe webhooks, automated payout ledgers, multi-currency processing, and double-signed escrow vaults.",
    deliverables: ["Webhook Audit Logging", "Automated Payouts", "PCI-DSS Compliant Flows"],
  },
  {
    icon: Cloud,
    title: "Real-Time Systems & Push Alerts",
    description: "Implementing live WebSocket channels, Firestore subscriptions, and Firebase Cloud Messaging for location tracking and chat.",
    deliverables: ["<150ms Latency Channels", "FCM Device Tokens", "Background Sync Tasks"],
  },
  {
    icon: Lock,
    title: "Authentication & Identity (KYC)",
    description: "Integrating biometrics, government identity checks via Smile ID, multi-factor auth, and granular RBAC authorization rules.",
    deliverables: ["Smile ID Verification", "Session Refresh Tokens", "Security Hardening"],
  },
  {
    icon: Cpu,
    title: "Cloud Infrastructure Consulting",
    description: "Configuring GCP Cloud SQL, Firebase Hosting, Docker containers, and CI/CD pipelines for zero-downtime deployment.",
    deliverables: ["GCP Infrastructure", "Automated EAS Builds", "Database Indexing & Tuning"],
  },
  {
    icon: Wrench,
    title: "Mobile App Maintenance & Audits",
    description: "Optimizing bundle size, resolving memory leaks, upgrading React Native versions, and fixing performance bottlenecks.",
    deliverables: ["Lighthouse & Profiling Audits", "Dependency Upgrades", "Bug Remediation"],
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 relative z-10 bg-[#08090a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
            <Wrench className="w-3.5 h-3.5" /> Client Services & Consulting
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            How We Can Work Together
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Specialized engineering services for startups, enterprise platforms, and ambitious founders.
          </p>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="glass-card p-6 md:p-8 rounded-3xl border border-white/10 hover:border-blue-500/40 transition-all duration-300 space-y-4 group"
              >
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <a
                    href="#contact"
                    className="text-xs font-mono text-zinc-400 group-hover:text-blue-400 flex items-center gap-1"
                  >
                    Request Proposal <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {service.description}
                </p>

                <div className="pt-3 border-t border-white/5 flex flex-wrap gap-2">
                  {service.deliverables.map((deliv) => (
                    <span
                      key={deliv}
                      className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300"
                    >
                      ✓ {deliv}
                    </span>
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
