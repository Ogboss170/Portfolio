import { Terminal, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 bg-[#050608] border-t border-white/5 relative z-10 text-xs text-zinc-500 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Brand Identity */}
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <Terminal className="w-3.5 h-3.5" />
            </div>
            <span className="text-zinc-300 font-bold">Oghosa (Ogboss)</span>
            <span>— Founder & Software Engineer @ Workspace</span>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-4">
            <a href="#about" className="hover:text-zinc-300">About</a>
            <a href="#workspace" className="hover:text-zinc-300">Workspace</a>
            <a href="#architecture" className="hover:text-zinc-300">Architecture</a>
            <a href="#philosophy" className="hover:text-zinc-300">Philosophy</a>
            <a href="#contact" className="hover:text-zinc-300">Contact</a>
          </div>

          {/* Right Copyright & Location */}
          <div className="flex items-center gap-1.5">
            <span>Built with Next.js 15 & Tailwind in Nigeria</span>
            <span className="text-red-500">🇳🇬</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
