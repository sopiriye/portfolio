import { ArrowUpRight } from "lucide-react";
import xeneport from "@/assets/project-xeneport.jpg";
import userlog from "@/assets/project-userlog.jpg";

type Project = {
  name: string;
  image: string;
  description: string;
  stack: string[];
  tags: string[];
  href?: string;
};

const projects: Project[] = [
  {
    name: "Xeneport",
    image: xeneport,
    description:
      "Investment intelligence tool for portfolio monitoring and capital allocation — surfacing the signals that matter for allocation decisions.",
    stack: ["TypeScript", "NestJS", "PostgreSQL", "Prisma"],
    tags: ["#FinTech", "#BackendEngineering", "#SystemDesign", "#TechnicalProductManagement"],
  },
  {
    name: "ProjectUserLog",
    image: userlog,
    description:
      "Secure authentication system with login, role-based access, file uploads, and an admin dashboard built on a hardened PHP + MySQL stack.",
    stack: ["PHP", "MySQL", "Auth", "RBAC"],
    tags: ["#BackendEngineering", "#Security", "#SystemDesign"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Selected Work</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Projects I&apos;ve shipped & I&apos;m building.
            </h2>
          </div>
          <p className="text-sm text-muted-foreground">
            Backend systems, fintech tooling, and infrastructure.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.name}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-elevated"
            >
              <div className="aspect-[16/10] overflow-hidden bg-muted">
                <img
                  src={p.image}
                  alt={`${p.name} preview`}
                  loading="lazy"
                  width={1280}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-semibold text-foreground">{p.name}</h3>
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-secondary text-muted-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-border bg-background px-2 py-1 text-xs font-medium text-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5 border-t border-border pt-4">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium text-primary transition-colors hover:text-accent-cyan"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;