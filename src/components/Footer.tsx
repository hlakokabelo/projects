export default function Footer() {
  return (
    <footer className="border-t border-slate-800/60 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
        <p>
          © {new Date().getFullYear()} Kabelo Hlako. Built with React,
          TypeScript, Tailwind CSS, and Vite.
        </p>
        <p className="font-mono">Boksburg, South Africa</p>
      </div>
    </footer>
  );
}
