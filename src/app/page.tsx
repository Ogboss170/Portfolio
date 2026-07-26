import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { WorkspaceProduct } from "@/components/sections/workspace";
import { ArchitectureDiagram } from "@/components/sections/architecture";
import { EngineeringPhilosophy } from "@/components/sections/philosophy";
import { Features } from "@/components/sections/features";
import { TechStack } from "@/components/sections/techstack";
import { Services } from "@/components/sections/services";
import { GithubShowcase } from "@/components/sections/github";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative bg-[#08090a] min-h-screen text-slate-100 selection:bg-blue-500 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <WorkspaceProduct />
      <ArchitectureDiagram />
      <EngineeringPhilosophy />
      <Features />
      <TechStack />
      <Services />
      <GithubShowcase />
      <Contact />
      <Footer />
    </main>
  );
}
