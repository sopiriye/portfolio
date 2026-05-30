import { ArrowRight, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-center">
          <div className="max-w-3xl text-center">
            {/* <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan" />
              Available for new opportunities
            </span> */}
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Sopiriye Robinson
            </h1>
            <p className="mt-3 text-base font-medium text-primary sm:text-lg">
              Backend Software Engineer{" "}
              <span className="text-muted-foreground">|</span> Technical Product Manager
            </p>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              A backend-focused software engineer with over 2 years of experience operating
              at the intersection of business, finance, and technology. Focused on building
              scalable systems that deliver real-world economic value.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-card transition-all hover:bg-accent-sky hover:shadow-elevated"
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
