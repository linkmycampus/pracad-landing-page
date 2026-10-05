import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import styles from "./page.module.css";

const pillars = [
  {
    title: "Product Development",
    body: "Research, design, develop and scale digital products that solve identified problems.",
  },
  {
    title: "Software & Technology Solutions",
    body: "Technology-driven solutions for communities, businesses and organizations.",
  },
  {
    title: "Product Growth & Scaling",
    body: "Systems, infrastructure and strategies for adoption and long-term growth.",
  },
];

const stages = [
  {
    title: "Discover",
    body: "Understand the problem, users and environment.",
  },
  {
    title: "Build",
    body: "Design and develop practical technology around the identified need.",
  },
  {
    title: "Connect",
    body: "Create systems that bring users, businesses, institutions and opportunities together.",
  },
  {
    title: "Scale",
    body: "Improve, expand and take successful products into new markets.",
  },
];

const values = [
  { title: "Excellence", note: "Craft with care" },
  { title: "Punctuality", note: "Respect for time" },
  { title: "Respect & Communication", note: "Clear and human" },
  { title: "Innovation & Leadership", note: "Practical progress" },
  { title: "The PRACAD Spirit", note: "Passion + Integrity" },
];

export default function HomePage() {
  return (
    <>
      <PageHero
        title="Building hardware & software solutions for the world."
        lede="A technology and product development company building digital solutions that connect people, businesses and opportunities to create global impact."
        actions={
          <>
            <Link href="/products/linkmycampus" className="btn btn-on-dark">
              Explore LinkMyCampus
              <ArrowRight className="arrow" size={16} aria-hidden />
            </Link>
            <Link href="/about" className="btn btn-ghost-on-dark">
              Learn about us
            </Link>
          </>
        }
      />

      <section className="section">
        <div className="container">
          <Reveal>
            <div className={styles.sectionHead}>
              <h2 className="heading-2">Technology products, not agency deliverables.</h2>
            </div>
          </Reveal>
          <div className={styles.pillars}>
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 80}>
                <article className={styles.pillar}>
                  <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                  <p className={styles.pillarBody}>{pillar.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.approach}`}>
        <div className="container">
          <Reveal>
            <div className={styles.approachHead}>
              <h2 className="heading-2">Discover. Build. Connect. Scale.</h2>
              <p className="lede">
                We believe great technology starts with a real problem. Then we build practical
                systems around it.
              </p>
              <Link href="/approach" className="btn btn-ghost-on-dark">
                See the full approach
                <ArrowRight className="arrow" size={16} aria-hidden />
              </Link>
            </div>
          </Reveal>
          <div className={styles.stages}>
            {stages.map((stage, i) => (
              <Reveal key={stage.title} delay={i * 90}>
                <article className={styles.stage}>
                  <h3 className={styles.stageTitle}>{stage.title}</h3>
                  <p className={styles.stageBody}>{stage.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className={styles.productCopy}>
              <h2 className="heading-2">LinkMyCampus</h2>
              <p className="lede">
                Campus and community technology that connects people and opportunities. The
                flagship product of PRACAD Technologies.
              </p>
              <Link href="/products/linkmycampus" className="btn btn-primary">
                Explore LinkMyCampus
                <ArrowRight className="arrow" size={16} aria-hidden />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div className={styles.values}>
              <h2 className="heading-2">How we work</h2>
              <ul className={styles.valuesList}>
                {values.map((value) => (
                  <li key={value.title} className={styles.valueItem}>
                    {value.title}
                    <span>{value.note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className={`section ${styles.closing}`}>
        <div className="container">
          <Reveal>
            <div className={styles.closingInner}>
              <div>
                <h2 className="heading-2">Partner with us.</h2>
                <p className="lede" style={{ marginTop: "0.75rem" }}>
                  Have a real problem worth solving? Let&apos;s talk.
                </p>
              </div>
              <Link href="/contact" className="btn btn-primary">
                Get in touch
                <ArrowRight className="arrow" size={16} aria-hidden />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
