import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Philosophy } from "@/components/sections/Philosophy";
import { Features } from "@/components/sections/Features";
import { Pricing } from "@/components/sections/Pricing";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-brand-cream selection:text-black">
      <Navbar />
      <Hero />
      <Philosophy />
      <Features />
      <Pricing />
      <Contact />

      <footer className="py-8 bg-black text-zinc-600 text-center text-xs uppercase tracking-widest border-t border-zinc-900">
        © {new Date().getFullYear()} Morphid Performance. Todos los derechos reservados.
      </footer>
    </main>
  );
}
