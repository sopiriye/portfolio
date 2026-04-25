const points = [
  "Background in software engineering with a focus on backend systems.",
  "Deep interest in financial systems, infrastructure, and capital flows.",
  "Strong learning mindset — strategize deeply before taking action.",
  "Systems-thinking approach to product, architecture, and trade-offs.",
];

const About = () => {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">About</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              I build systems that hold up under real-world weight.
            </h2>
          </div>

          <div className="md:col-span-7">
            <p className="text-base leading-relaxed text-muted-foreground">
              I&apos;m a backend software engineer working at the intersection of business,
              finance, and technology. My focus is on building scalable systems and
              infrastructure that translate into real economic value — not just clean code,
              but software that earns its place in production.
            </p>

            <ul className="mt-8 space-y-4">
              {points.map((p) => (
                <li key={p} className="flex gap-3 text-sm leading-relaxed text-foreground">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            <blockquote className="mt-10 border-l-2 border-primary pl-5">
              <p className="text-base italic text-foreground">Quod tango muto.</p>
              <footer className="mt-1 text-xs text-muted-foreground">
                Whatever I touch, I transform.
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;