const links = [
  {
    label: "Email",
    value: "kabelohlako.kh@gmail.com",
    href: "mailto:kabelohlako.kh@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/hlakokabelo",
    href: "https://github.com/hlakokabelo",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/hlakokabelo",
    href: "https://www.linkedin.com/in/hlakokabelo",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section">
      <h2 className="section-title">Contact</h2>
      <p className="section-subtitle">
        Open to junior software development roles, on-site or remote.
        Immediately available.
      </p>

      <div className="grid sm:grid-cols-3 gap-4 max-w-3xl">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target={l.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="border border-slate-800 hover:border-accent/60 rounded-lg p-5 bg-slate-900/30 transition-colors group"
          >
            <p className="font-mono text-xs text-slate-500 mb-2 uppercase tracking-wider">
              {l.label}
            </p>
            <p className="text-sm text-slate-300 group-hover:text-accent transition-colors break-all">
              {l.value}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
