import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  detail?: string;
};

const experience: ExperienceItem[] = [
  {
    role: "Web App QA Tester",
    company: "Agrivanna",
    period: "Oct - Nov 2026",
    detail:
      "Filed 38 GitHub issues; 24 fixes confirmed in my retests. Wrote 5 Playwright smoke tests and ran an accessibility and Lighthouse audit.",
  },
  {
    role: "Backend Developer & Curriculum Developer",
    company: "My Code Club",
    period: "Jul - Oct 2026",
    detail:
      "Owned the backend of an existing registration platform: Node.js Cloud Functions, Firestore, Stripe, and a PHP email API.",
  },
  { role: "Operations & Customer Experience Lead", company: "IlluminEd Tutoring", period: "Aug 2026" },
  { role: "Amazon Operational Strategy & People Analytics Externship", company: "Extern", period: "Jun - Aug 2026" },
  { role: "Web Developer & UX (CCT341 client project)", company: "Turtle Island Charity", period: "May - Aug 2026" },
  { role: "Internal Relations Executive", company: "UTMMSA", period: "Jun 2025 - Jun 2026" },
  { role: "Manufacturing Operator", company: "Mondelēz International", period: "May - Aug 2024" },
  { role: "Coding Instructor", company: "Code Ninjas", period: "May - Aug 2023" },
  { role: "Technical Mentor", company: "Cyber-Seniors", period: "Jun 2020 - Jun 2023" },
  { role: "Coding Tutor", company: "My Code Club", period: "May - Aug 2022" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="about" className="section-padding border-b border-border">
      <div className="page-width" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          <p className="eyebrow mb-3">About</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Background
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground/85 md:text-lg">
            BA at the University of Toronto Mississauga in Technology, Coding &amp;
            Society (TCS) and Culture, Communication, Information &amp; Technology
            (CCIT), with a Statistics minor. Expected graduation Apr 2029. Seeking a
            12-16 month co-op starting May 2027.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            At My Code Club (Jul - Oct 2026) I joined an existing platform and owned
            the backend: Node.js Cloud Functions, Firestore, Stripe, and a PHP email
            API, from requirements through testing and
            deployment. The platform has 100+ registered families and a newsletter
            reach of about 500. After that I did QA testing on Agrivanna's web app.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            I've also built OurCal, a tested React and Supabase app used by 40+
            people, done client web implementation for Turtle Island Charity, and
            analyzed Toronto firearm incident data with Python and DuckDB SQL. I like
            projects where I can move between the technical and the practical:
            understanding both how something is built and why it matters to the person
            using it.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="mt-14"
        >
          <h3 className="eyebrow">Experience</h3>
          <ul className="mt-5 divide-y divide-border border-y border-border">
            {experience.map((item) => (
              <li
                key={`${item.role}-${item.company}-${item.period}`}
                className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <div className="max-w-lg">
                  <p className="font-medium text-foreground">{item.role}</p>
                  <p className="text-sm text-muted-foreground">{item.company}</p>
                  {item.detail ? (
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {item.detail}
                    </p>
                  ) : null}
                </div>
                <p className="shrink-0 font-body text-sm tabular-nums text-muted-foreground">
                  {item.period}
                </p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
