import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const linkClass = "text-foreground underline underline-offset-2 hover:text-primary";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="contact" className="section-padding">
      <div className="page-width" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          <p className="eyebrow mb-3">Contact</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Let's talk
          </h2>
          <p className="mt-3 max-w-md text-base text-muted-foreground">
            Seeking a 12-16 month co-op starting May 2027. Email{" "}
            <a href="mailto:5781mahmood@gmail.com" className={linkClass}>
              5781mahmood@gmail.com
            </a>
            , or find me on{" "}
            <a
              href="https://www.linkedin.com/in/mahmoodsultan5/"
              target="_blank"
              rel="noreferrer"
              className={linkClass}
            >
              LinkedIn
            </a>{" "}
            and{" "}
            <a
              href="https://github.com/5781mahmood"
              target="_blank"
              rel="noreferrer"
              className={linkClass}
            >
              GitHub
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
