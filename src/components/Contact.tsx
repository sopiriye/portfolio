import { Mail, Linkedin, Github, Twitter, ArrowUpRight, FileDown } from "lucide-react";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "sopiriyerobinson@outlook.com",
    href: "mailto:sopiriyerobinson@outlook.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/sopiriye-robinson",
    href: "https://linkedin.com/in/sopiriye-robinson/",
  },
  {
    icon: Twitter,
    label: "X / Twitter",
    value: "@majordev_",
    href: "https://x.com/majordev_",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/sopiriye",
    href: "https://github.com/sopiriye",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="bg-navy py-20 sm:py-28">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent-sky">Contact</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-foreground sm:text-4xl">
              Let&apos;s build something that matters.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-navy-muted">
              Open to backend, infrastructure, fintech, and product-driven engineering
              collaborations. Reach out through any channel.
            </p>

            <a
              href="/files/Sopiriye_Robinson_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent-blue px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent-sky"
            >
              <FileDown className="h-4 w-4" />
              Download Resume
            </a>
          </div>

          <div className="md:col-span-7">
            <ul className="grid gap-3 sm:grid-cols-2">
              {channels.map(({ icon: Icon, label, value, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-4 rounded-2xl border border-navy-border bg-white/[0.03] p-5 transition-colors hover:border-accent-sky/60 hover:bg-white/[0.07]"
                  >
                    <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-accent-blue/15 text-accent-sky">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs font-medium text-navy-muted">{label}</span>
                      <span className="mt-0.5 block truncate text-sm font-medium text-navy-foreground">
                        {value}
                      </span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 flex-shrink-0 text-navy-muted transition-colors group-hover:text-accent-sky" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-navy-border pt-8 text-xs text-navy-muted sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Sopiriye Robinson. All rights reserved.</p>
          <p>Designed and built with focus on clarity & systems.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;