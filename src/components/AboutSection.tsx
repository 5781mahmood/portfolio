import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experience = [
  { role: "Curriculum Developer & Junior Backend Developer", company: "My Code Club", period: "Jul 2026 – Present" },
  { role: "Operations & Customer Experience Lead", company: "IlluminEd Tutoring", period: "Aug 2026" },
  { role: "Amazon Operational Strategy & People Analytics Externship", company: "Extern", period: "Jun – Aug 2026" },
  { role: "Web Developer & UX (CCT341 client project)", company: "Turtle Island Charity", period: "May – Aug 2026" },
  { role: "Internal Relations Executive", company: "UTMMSA", period: "Jun 2025 – Jun 2026" },
  { role: "Manufacturer", company: "Mondelēz International", period: "May – Aug 2024" },
  { role: "Coding Instructor", company: "Code Ninjas", period: "Jul – Aug 2023" },
  { role: "Senior Mentor", company: "Cyber-Seniors", period: "Jun 2020 – Jun 2023" },
  { role: "Coding Tutor", company: "My Code Club", period: "May – Aug 2022" },
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
            BA Double Major at the University of Toronto Mississauga in Technology,
            Coding &amp; Society (TCS) and Culture, Communication, Information &amp;
            Technology (CCIT), expected Apr 2028.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Currently the backend developer behind My Code Club's registration and
            payments platform, building on an existing system with Firebase Cloud
            Functions, Stripe integration, and Firestore security rules. This work
            continues into the school year alongside curriculum and teaching
            responsibilities.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Beyond MCC, I've done client-facing web implementation (Turtle Island
            Charity), a Python/Pandas analysis of Toronto public safety data, and a
            customer experience consulting project for a tutoring company. I like
            projects where I can move between the technical and the practical —
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
                <div>
                  <p className="font-medium text-foreground">{item.role}</p>
                  <p className="text-sm text-muted-foreground">{item.company}</p>
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
