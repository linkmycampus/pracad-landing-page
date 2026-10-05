import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About",
  description:
    "PRACAD Technologies is a technology company focused on building innovative digital solutions to real-world problems.",
};

const innovate = [
  "Researches problems",
  "Develops products",
  "Builds technology infrastructure",
  "Designs user experiences",
  "Tests products with real users",
  "Iterates based on feedback",
  "Scales technology products",
];

const values = [
  {
    title: "Excellence",
    body: "We hold a high bar for the products we ship and the way we work.",
  },
  {
    title: "Punctuality",
    body: "We respect time: ours, our partners', and the people who use what we build.",
  },
  {
    title: "Respect & Communication",
    body: "Clear, honest communication is how we stay aligned and accountable.",
  },
  {
    title: "Innovation & Leadership",
    body: "We lead with practical innovation rooted in real needs, not trends.",
  },
  {
    title: "The PRACAD Spirit",
    body: "Passion paired with integrity, the standard across the PRACAD ecosystem.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Who we are"
        lede="PRACAD Technologies is a technology company focused on building innovative digital solutions to real-world problems. As part of the PRACAD ecosystem, the company develops and operates technology products, with LinkMyCampus as one of its flagship product."
      />

      <section className={`section ${styles.vm}`}>
        <div className={`container ${styles.vmGrid}`}>
          <Reveal>
            <article>
              <h2 className="heading-3">Vision</h2>
              <p className="lede" style={{ marginTop: "0.75rem" }}>
                To build technology products that improve lives and create lasting global impact.
              </p>
            </article>
          </Reveal>
          <Reveal delay={100}>
            <article>
              <h2 className="heading-3">Mission</h2>
              <p className="lede" style={{ marginTop: "0.75rem" }}>
                To identify real-world problems, build innovative technology around them, and make
                useful digital solutions accessible to the people and communities they serve.
              </p>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.eco}`}>
          <Reveal>
            <h2 className="heading-2">Group and Technologies, clearly distinct.</h2>
          </Reveal>
          <div className={styles.ecoGrid}>
            <Reveal>
              <article className={styles.ecoBlock}>
                <h3 className="heading-3">PRACAD Group</h3>
                <p>
                  The broader parent organization and umbrella ecosystem. PRACAD Group is the home
                  for the wider PRACAD family of initiatives.
                </p>
              </article>
            </Reveal>
            <Reveal delay={100}>
              <article className={styles.ecoBlock}>
                <h3 className="heading-3">PRACAD Technologies</h3>
                <p>
                  The technology arm of the ecosystem. We build and operate technology products,
                  hardware and software, that solve real problems at scale.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className={`section ${styles.innovate}`}>
        <div className="container">
          <Reveal>
            <h2 className="heading-2">Products and innovation, end to end.</h2>
            <p className="lede" style={{ marginTop: "1rem", marginBottom: "2.5rem" }}>
              PRACAD Technologies is building technology, not just websites or apps. We identify
              real problems, develop products around them and build scalable digital ecosystems.
            </p>
          </Reveal>
          <ol className={styles.innovateList}>
            {innovate.map((item, i) => (
              <Reveal key={item} delay={i * 50}>
                <li>{item}</li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <h2 className="heading-2" style={{ marginBottom: "2.5rem" }}>
              Shared across the PRACAD ecosystem.
            </h2>
          </Reveal>
          <div className={styles.values}>
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 60}>
                <article className={styles.value}>
                  <h3 className="heading-3">{value.title}</h3>
                  <p>{value.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.cta}`}>
        <div className={`container ${styles.ctaInner}`}>
          <Reveal>
            <h2 className="heading-2">Explore what we&apos;re building.</h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="cta-group">
              <Link href="/products" className="btn btn-primary">
                View products
                <ArrowRight className="arrow" size={16} aria-hidden />
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Contact us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
