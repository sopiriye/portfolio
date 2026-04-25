const groups = [
  {
    title: "Backend & Infrastructure",
    items: ["TypeScript", "NestJS", "PostgreSQL", "Prisma", "Docker"],
  },
  {
    title: "Frontend",
    items: ["React"],
  },
  {
    title: "Tools & Platforms",
    items: ["Git", "GitHub", "VS Code", "Render", "Vercel"],
  },
  {
    title: "Product Management",
    items: ["Notion"],
  },
];

const Stack = () => {
  return (
    <section className="border-y border-border bg-secondary/40 py-20 sm:py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Stack</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Tools I reach for.
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            A focused toolkit chosen for reliability, type-safety, and long-term maintainability.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {groups.map((g) => (
            <div key={g.title} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <h3 className="text-sm font-semibold text-foreground">{g.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;