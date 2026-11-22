import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

type CaseStudy = {
  title: string;
  meta: string;
  description: string;
  href?: string;
};

type OtherProject = {
  title: string;
  meta: string;
  description: string;
  links?: { label: string; href: string }[];
};

const caseStudies: CaseStudy[] = [
  {
    title: "My Code Club",
    meta: "Backend Developer & Curriculum Developer · Jul - Oct 2026",
    description:
      "Joined an existing parent and student registration platform and owned the backend: Node.js Cloud Functions, Firestore, Stripe, and a PHP email API, from requirements through testing and deployment. 100+ registered families.",
  },
  {
    title: "UTM Makerspace Access",
    meta: "CCT204 · 4-person team UX research · Sep - Nov 2025",
    description:
      "Researched why immigrant ICCIT students at UTM avoided the Library Makerspace. Interview and observation reframed the barrier as confidence, information, and belonging, not disinterest.",
    href: "/projects/utm-makerspace",
  },
  {
    title: "Turtle Island Charity",
    meta: "CCT341 team project · May - Aug 2026",
    description:
      "Four-person consulting team. Owned the client Services page in Wix and contributed to the homepage gallery. Client site link pending team approval.",
  },
];

const otherProjects: OtherProject[] = [
  {
    title: "OurCal",
    meta: "React 19 · TypeScript · Vite · Supabase",
    description:
      "Local-first calorie and macro diary with optional Supabase sync, used by 40+ people. 70+ automated tests (Vitest and Playwright) run in GitHub Actions.",
    links: [
      { label: "Live app", href: "https://ourcal-pi.vercel.app" },
      { label: "GitHub", href: "https://github.com/5781mahmood/OurCal" },
    ],
  },
  {
    title: "Toronto Firearm Analysis",
    meta: "CCT416 · Python, Pandas, DuckDB SQL · May - Jun 2026",
    description:
      "Toronto Police open data: do the neighbourhoods with the most firearm incidents also carry the most harm? Cleaned the data in Pandas, cross-checked results in DuckDB SQL, and built visualizations for a report and presentation.",
    links: [
      { label: "GitHub", href: "https://github.com/5781mahmood/cct416-firearm-analysis" },
    ],
  },
  {
    title: "100-Level Platformer",
    meta: "Python Game Development · 2024",
    description:
      "Platformer with 100 unique levels, custom sprites and pixel art, player physics, collision detection, and level progression.",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="work" className="section-padding border-b border-border">
      <div className="page-width" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          <p className="eyebrow mb-3">Selected work</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Case studies
          </h2>
          <p className="mt-3 max-w-xl text-base text-muted-foreground">
            Research, backend and client work.
          </p>
        </motion.div>

        <ul className="mt-12 divide-y divide-border border-y border-border">
          {caseStudies.map((project, index) => {
            const body = (
              <div className="flex gap-5 md:gap-8">
                <span className="shrink-0 pt-0.5 font-body text-sm tabular-nums text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                    <h3 className="font-display text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{project.meta}</p>
                  </div>
                  <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  {project.href ? (
                    <span className="mt-3 inline-block text-sm font-medium text-primary">
                      Read case study →
                    </span>
                  ) : null}
                </div>
              </div>
            );

            return (
              <motion.li
                key={project.title}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.35, delay: 0.06 * index }}
              >
                {project.href ? (
                  <Link
                    to={project.href}
                    className="block py-7 transition-colors hover:bg-secondary/50 md:-mx-3 md:px-3"
                  >
                    {body}
                  </Link>
                ) : (
                  <div className="py-7 md:-mx-3 md:px-3">{body}</div>
                )}
              </motion.li>
            );
          })}
        </ul>

        <div className="mt-16">
          <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">
            Other projects
          </h3>
          <ul className="mt-6 space-y-7">
            {otherProjects.map((project) => (
              <li key={project.title} className="max-w-xl">
                <p className="font-medium text-foreground">{project.title}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">{project.meta}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                {project.links ? (
                  <p className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-sm">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-primary underline-offset-4 hover:underline"
                      >
                        {link.label}
                        <span className="sr-only"> for {project.title} (opens in a new tab)</span>
                      </a>
                    ))}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
