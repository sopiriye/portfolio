import { Brain, Code2, LineChart, Rocket, BookOpen } from "lucide-react";

const items = [
  { icon: Code2, title: "Backend Engineer", desc: "Designing APIs, data models, and services that scale." },
  { icon: Brain, title: "Systems Thinker", desc: "Reasoning about architecture, trade-offs, and second-order effects." },
  { icon: LineChart, title: "Finance + Technology", desc: "Bridging product, capital, and engineering decisions." },
  { icon: Rocket, title: "Currently Building", desc: "Xeneport — investment intelligence for capital allocation." },
  { icon: BookOpen, title: "Currently Learning", desc: "Software architecture and large-scale system design." },
];

const Overview = () => {
  return (
    <section className="bg-navy py-20 sm:py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-sky">Overview</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-foreground sm:text-4xl">
            Engineering with intent.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy-muted">
            A focused snapshot of what I do, what I&apos;m building, and where I&apos;m headed.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-navy-border bg-white/[0.03] p-6 transition-colors hover:border-accent-sky/60 hover:bg-white/[0.06]"
            >
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-accent-blue/15 text-accent-sky transition-colors group-hover:bg-accent-blue/25">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-base font-semibold text-navy-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-muted">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overview;