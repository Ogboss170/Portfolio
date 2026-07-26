"use client";

import { motion } from "framer-motion";
import { Code2, Star, GitFork, ExternalLink, Terminal } from "lucide-react";

const repositories = [
  {
    name: "workspace-ecosystem",
    description: "Production mono-repository for the Workspace app ecosystem combining Expo React Native, NestJS backend, and Prisma ORM.",
    stars: "142",
    forks: "38",
    language: "TypeScript",
    color: "bg-blue-500",
    link: "https://github.com/ogboss/workspace-ecosystem",
  },
  {
    name: "nestjs-escrow-microservice",
    description: "ACID-compliant NestJS financial escrow microservice supporting Paystack and Stripe webhook verification with atomic locks.",
    stars: "89",
    forks: "21",
    language: "TypeScript",
    color: "bg-indigo-500",
    link: "https://github.com/ogboss/nestjs-escrow-microservice",
  },
  {
    name: "expo-realtime-location-tracker",
    description: "High-performance React Native background geolocation tracking engine with zero battery drain optimization.",
    stars: "64",
    forks: "14",
    language: "TypeScript",
    color: "bg-purple-500",
    link: "https://github.com/ogboss/expo-realtime-location-tracker",
  },
];

export function GithubShowcase() {
  return (
    <section id="github" className="py-24 relative z-10 bg-[#090a0d] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800 border border-white/10 text-xs font-mono text-zinc-300">
            <Code2 className="w-3.5 h-3.5 text-blue-400" /> Open Source & Activity
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            GitHub Contributions
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Verifiable code quality, public repositories, and modular developer tooling.
          </p>
        </div>

        {/* Repositories Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {repositories.map((repo, idx) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-card p-6 rounded-2xl border border-white/10 hover:border-blue-500/40 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-blue-400" />
                    <span className="font-mono font-bold text-white text-sm group-hover:text-blue-400 transition-colors">
                      {repo.name}
                    </span>
                  </div>
                  <a
                    href={repo.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-white"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed font-normal">{repo.description}</p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-1.5">
                  <span className={`h-2.5 w-2.5 rounded-full ${repo.color}`} />
                  <span>{repo.language}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-400" /> {repo.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3.5 h-3.5 text-zinc-400" /> {repo.forks}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
