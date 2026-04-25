import { Briefcase } from "lucide-react";

type Role = {
  title: string;
  company: string;
  location: string;
  type: string;
  period: string;
  summary: string;
  achievements: string[];
  tags: string[];
};

const roles: Role[] = [
  {
    title: "Back End Engineer",
    company: "Bincom Dev Center",
    location: "Lagos State, Nigeria · Hybrid",
    type: "Apprenticeship",
    period: "May 2025 – Jul 2025 · 3 mos",
    summary:
      "Worked on server-side features and internal tools, collaborating with a small team to ship reliable backend functionality and improve developer workflow.",
    achievements: [
      "Built and maintained PHP-based server-side modules in production",
      "Implemented data models and queries against MySQL for core features",
      "Translated requirements into clean, testable backend logic",
      "Collaborated through code reviews and Git-based workflows",
    ],
    tags: ["PHP", "Server-Side Programming", "MySQL", "Git"],
  },
  {
    title: "Intern",
    company: "HiiT Plc",
    location: "Ikeja, Lagos State, Nigeria · On-site",
    type: "Internship",
    period: "Jan 2023 – Jun 2023 · 6 mos",
    summary:
      "Hands-on training in core web technologies with a focus on building responsive interfaces and applying programming fundamentals to real projects.",
    achievements: [
      "Developed responsive layouts using HTML and CSS",
      "Wrote interactive features in JavaScript for training projects",
      "Practiced fundamentals of programming, debugging, and version control",
      "Delivered assigned project milestones within tight timelines",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-navy py-20 sm:py-28">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
            <Briefcase className="h-5 w-5" />
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-navy-foreground sm:text-4xl">
            Work Experience
          </h2>
        </div>
        <p className="mt-3 max-w-2xl text-sm text-navy-muted">
          Roles, internships, and hands-on engagements that shaped my approach to
          backend engineering and product delivery.
        </p>

        <div className="mt-10 space-y-6">
          {roles.map((role) => (
            <article
              key={role.title + role.company}
              className="rounded-2xl border border-navy-border bg-white/[0.03] p-6 shadow-elevated transition-colors hover:border-primary/50 sm:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-primary sm:text-2xl">
                    {role.title}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-navy-foreground">
                    {role.company}{" "}
                    <span className="font-normal text-navy-muted">· {role.type}</span>
                  </p>
                  <p className="text-xs text-navy-muted">{role.location}</p>
                </div>
                <span className="inline-flex items-center rounded-md border border-navy-border bg-navy/40 px-3 py-1.5 text-xs font-medium text-navy-foreground">
                  {role.period}
                </span>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-navy-foreground/90">
                {role.summary}
              </p>

              <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-primary">
                Key Achievements
              </p>
              <ul className="mt-3 space-y-2">
                {role.achievements.map((a) => (
                  <li
                    key={a}
                    className="flex gap-3 text-sm leading-relaxed text-navy-foreground/90"
                  >
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {role.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium text-navy-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;