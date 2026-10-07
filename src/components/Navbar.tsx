import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-800/60"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-mono text-sm text-white tracking-tight hover:text-accent transition-colors"
        >
          kabelo<span className="text-accent">.</span>hlako
        </a>

        <a
          href="https://github.com/hlakokabelo"
          target="_blank"
          rel="noreferrer"
          className="text-sm text-slate-400 hover:text-white transition-colors"
        >
          GitHub ↗
        </a>
      </nav>
    </header>
  );
}
