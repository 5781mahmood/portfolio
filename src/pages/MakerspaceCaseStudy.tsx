import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import empathyMap from "@/assets/makerspace-empathy-map.png";
import poster from "@/assets/makerspace-poster.png";

const TITLE = "UTM Makerspace Access - UX Case Study | Mahmood Sultan";
const DESCRIPTION =
  "CCT204 case study: a four-person team researching why immigrant ICCIT students at UTM avoid the Library Makerspace. Interview, observation, reframe, and a research poster.";
const URL = "https://www.mahmoodsultan.com/projects/utm-makerspace";
const OG_IMAGE = "https://www.mahmoodsultan.com/og-image.png";

const useDocumentMeta = () => {
  useEffect(() => {
    const head = document.head;

    const setMeta = (selector: string, attr: string, value: string) => {
      let el = head.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        const [, name, key] = selector.match(/\[(name|property)="([^"]+)"\]/) || [];
        if (name && key) el.setAttribute(name, key);
        head.appendChild(el);
      }
      el.setAttribute(attr, value);
      return el;
    };

    const setLink = (rel: string, href: string) => {
      let el = head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        head.appendChild(el);
      }
      el.setAttribute("href", href);
      return el;
    };

    const prev = {
      title: document.title,
      description: head
        .querySelector('meta[name="description"]')
        ?.getAttribute("content"),
      canonical: head
        .querySelector('link[rel="canonical"]')
        ?.getAttribute("href"),
      ogTitle: head
        .querySelector('meta[property="og:title"]')
        ?.getAttribute("content"),
      ogDescription: head
        .querySelector('meta[property="og:description"]')
        ?.getAttribute("content"),
      ogUrl: head
        .querySelector('meta[property="og:url"]')
        ?.getAttribute("content"),
    };

    const prevOgType = head
      .querySelector('meta[property="og:type"]')
      ?.getAttribute("content");
    const prevOgImage = head
      .querySelector('meta[property="og:image"]')
      ?.getAttribute("content");
    const prevTwImage = head
      .querySelector('meta[name="twitter:image"]')
      ?.getAttribute("content");

    document.title = TITLE;
    setMeta('meta[name="description"]', "content", DESCRIPTION);
    setLink("canonical", URL);
    setMeta('meta[property="og:title"]', "content", TITLE);
    setMeta('meta[property="og:description"]', "content", DESCRIPTION);
    setMeta('meta[property="og:url"]', "content", URL);
    setMeta('meta[property="og:type"]', "content", "article");
    setMeta('meta[property="og:image"]', "content", OG_IMAGE);
    setMeta('meta[name="twitter:title"]', "content", TITLE);
    setMeta('meta[name="twitter:description"]', "content", DESCRIPTION);
    setMeta('meta[name="twitter:image"]', "content", OG_IMAGE);

    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.id = "case-study-jsonld";
    ld.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "UTM Makerspace Access - UX Case Study",
      description: DESCRIPTION,
      author: { "@type": "Person", name: "Mahmood Sultan" },
      mainEntityOfPage: URL,
      url: URL,
      datePublished: "2025-11-01",
      image: OG_IMAGE,
    });
    head.appendChild(ld);

    return () => {
      if (prev.title) document.title = prev.title;
      if (prev.description)
        head
          .querySelector('meta[name="description"]')
          ?.setAttribute("content", prev.description);
      if (prev.canonical)
        head
          .querySelector('link[rel="canonical"]')
          ?.setAttribute("href", prev.canonical);
      if (prev.ogTitle)
        head
          .querySelector('meta[property="og:title"]')
          ?.setAttribute("content", prev.ogTitle);
      if (prev.ogDescription)
        head
          .querySelector('meta[property="og:description"]')
          ?.setAttribute("content", prev.ogDescription);
      if (prev.ogUrl)
        head
          .querySelector('meta[property="og:url"]')
          ?.setAttribute("content", prev.ogUrl);
      if (prevOgType)
        head
          .querySelector('meta[property="og:type"]')
          ?.setAttribute("content", prevOgType);
      if (prevOgImage)
        head
          .querySelector('meta[property="og:image"]')
          ?.setAttribute("content", prevOgImage);
      if (prevTwImage)
        head
          .querySelector('meta[name="twitter:image"]')
          ?.setAttribute("content", prevTwImage);
      document.getElementById("case-study-jsonld")?.remove();
    };
  }, []);
};

const Section = ({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) => (
  <section className="mb-14 md:mb-16">
    <p className="eyebrow mb-2">{eyebrow}</p>
    <h2 className="mb-5 font-display text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
      {title}
    </h2>
    <div className="space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
      {children}
    </div>
  </section>
);

const Figure = ({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) => (
  <figure className="mb-14 md:mb-16">
    <div className="overflow-hidden border border-border bg-secondary/30">
      <img src={src} alt={alt} className="h-auto w-full" loading="lazy" />
    </div>
    <figcaption className="mt-3 text-sm text-muted-foreground">{caption}</figcaption>
  </figure>
);

const MakerspaceCaseStudy = () => {
  useDocumentMeta();

  return (
    <main className="min-h-screen bg-background">
      <article className="page-width-wide px-5 py-16 md:px-10 md:py-24 lg:px-14">
        <Link
          to="/#work"
          className="mb-12 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to selected work
        </Link>

        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-12 max-w-3xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-primary" aria-hidden />
            <p className="text-sm text-muted-foreground">
              CCT204 · UX research · Sep - Nov 2025
            </p>
          </div>
          <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl md:leading-[1.1]">
            Why immigrant ICCIT students weren't using the UTM Makerspace
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            A four-person UX research study into why immigrant ICCIT students
            didn't use the University of Toronto Mississauga Library Makerspace.
          </p>
        </motion.header>

        <div className="mb-14 grid max-w-3xl grid-cols-2 gap-6 border-b border-border pb-12 md:grid-cols-4">
          {[
            { label: "Role", value: "UX research & interview lead" },
            { label: "Course", value: "CCT204" },
            { label: "Team", value: "4-person student team" },
            { label: "Outcome", value: "36×48″ research poster" },
          ].map((item) => (
            <div key={item.label}>
              <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                {item.label}
              </p>
              <p className="text-sm font-medium text-foreground">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl">
          <Section eyebrow="01 - Problem" title="A space that existed, and students who didn't enter it">
            <p>
              The UTM Library Makerspace is open to students across campus, including
              ICCIT students in programs like CCIT and TCS. In practice, many second- and
              third-year immigrant ICCIT students rarely used it unless a course forced
              them inside. From the outside, that looked like disinterest. Our team
              treated it as a research question instead: what actually kept people out?
            </p>
            <p>
              The working question became: how might we make the makerspace easier to
              understand, and help new and immigrant ICCIT students feel connected,
              supported, and confident the first time they use it?
            </p>
          </Section>

          <Section eyebrow="02 - Research" title="Interview and observation">
            <p>
              I personally ran a semi-structured interview with a second-year student
              about how they approached campus spaces, booking, and group work. The rest
              of the team observed real makerspace usage and spoke with the makerspace
              instructor. Together, that mix of interview, observation, and staff
              conversation became the evidence base for the project.
            </p>
            <p>
              What showed up was not a lack of curiosity. Students described unclear
              booking and access, a space that felt crowded or already claimed by people
              who knew what they were doing, and a sense that the room belonged to other
              programs. Some walked past without entering. Others only went when coursework
              required it, then left once the task was done.
            </p>
          </Section>
        </div>

        <Figure
          src={empathyMap}
          alt="Empathy map for second- and third-year ICCIT immigrant students new to the UTM Makerspace, organized into Says, Thinks, Does, and Feels"
          caption="Empathy map synthesizing what students said, thought, did, and felt about the makerspace."
        />

        <div className="max-w-3xl">
          <Section eyebrow="03 - The reframe" title="Confidence, information, and social connection">
            <p>
              The research reframed the problem. Students were not avoiding the makerspace
              because they did not care about making. They lacked confidence, clear
              information, and social connections that would make participation feel
              legitimate. Feeling like an outsider (unsure what was allowed, unsure who
              to ask, unsure whether the space was "for people like me") mattered more
              than machine availability.
            </p>
            <p>
              That shift mattered for the design response. A better map of the room would
              not have solved the real barrier. The work had to address onboarding,
              belonging, and a first successful visit.
            </p>
          </Section>

          <Section eyebrow="04 - Proposed direction" title="Workshops, clearer onboarding, shared interests">
            <p>
              The team's proposed direction followed the reframe: structured workshops so
              students had a reason and a cohort for a first visit; clearer onboarding so
              booking and basic use were not guesswork; and a way for students with shared
              interests, including ICCIT-relevant skills like video and photo work, to
              find each other instead of walking into a room of strangers.
            </p>
            <p>
              The point was not to add more equipment. It was to lower the social and
              informational cost of showing up.
            </p>
          </Section>

          <Section eyebrow="05 - Poster / outcome" title="A 36×48″ research poster">
            <p>
              The project culminated in a 36×48″ research poster that documented the
              problem, methods, reframe, and proposed direction for the course. The poster
              was the deliverable that held the argument together: access is not only about
              open hours and machines. It is about whether students believe they belong
              there.
            </p>
          </Section>
        </div>

        <Figure
          src={poster}
          alt="Final CCT204 research poster: Helping new and immigrant ICCIT students feel connected in the UTM Makerspace"
          caption="Final research poster for CCT204. Designed for print at 36×48″; shown here for web review."
        />

        <div className="max-w-3xl border-t border-border pt-10">
          <Link
            to="/#work"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to selected work
          </Link>
        </div>
      </article>
    </main>
  );
};

export default MakerspaceCaseStudy;
