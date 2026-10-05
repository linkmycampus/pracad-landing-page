import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "Discover, Build, Connect, Scale. How PRACAD Technologies turns real problems into practical technology.",
};

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

export default function ApproachPage() {
  return (
    <>
      <PageHero
        title="We believe great technology starts with a real problem."
        lede="Identify real problems. Build practical technology. Connect people and opportunities. Create scalable impact."
      />

      <section className="section">
        <div className="container">
          <ol className={styles.timeline}>
            {stages.map((stage, i) => (
              <Reveal key={stage.title} delay={i * 80}>
                <li className={styles.stage}>
                  <h2 className="heading-2">{stage.title}</h2>
                  <p>{stage.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className={`section ${styles.cta}`}>
        <div className={`container ${styles.ctaInner}`}>
          <h2 className="heading-2">See it in our products.</h2>
          <Link href="/products/linkmycampus" className="btn btn-on-dark">
            Explore LinkMyCampus
            <ArrowRight className="arrow" size={16} aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
