import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="section-padding relative flex min-h-[100svh] items-center border-b border-border pt-20"
    >
      <div className="page-width">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8 flex items-center gap-3"
        >
          <span className="h-px w-8 bg-primary" aria-hidden />
          <p className="text-sm text-muted-foreground">
            University of Toronto Mississauga · TCS &amp; CCIT
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="font-display text-5xl font-semibold tracking-tight text-foreground sm:text-6xl md:text-7xl md:leading-[1.05]"
        >
          Mahmood Sultan
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.12 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/80 md:text-xl"
        >
          Backend for a live registration and payments platform, QA testing on
          Agrivanna's web app, and OurCal, a tested React app used by 40+ people.
          Third-year at UTM, seeking a 12–16 month co-op from May 2027.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.22 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#work"
            className="inline-flex bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Selected work
          </a>
          <a
            href="#contact"
            className="inline-flex border border-foreground/25 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Contact
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
