import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "LinkMyCampus",
  description:
    "LinkMyCampus is the flagship product of PRACAD Technologies, campus and community technology that connects people and opportunities.",
};

export default function LinkMyCampusPage() {
  return (
    <>
      <PageHero
        title="LinkMyCampus"
        lede="Campus and community technology that connects people and opportunities."
      />

      <section className="section">
        <div className={`container ${styles.split}`}>
          <Reveal>
            <div>
              <h2 className="heading-2">Built for campuses and the communities around them.</h2>
              <p className="lede" style={{ marginTop: "1rem" }}>
                LinkMyCampus is designed to bring students, institutions and opportunities closer
                together. We keep the story high-level here until fuller product materials are
                ready. No invented features, pricing or metrics.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div>
              <h2 className="heading-2">Our flagship, in the PRACAD ecosystem.</h2>
              <p className="lede" style={{ marginTop: "1rem" }}>
                LinkMyCampus is built and operated by PRACAD Technologies, the technology arm of
                the PRACAD Group, as a living example of our Discover, Build, Connect, Scale
                approach.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className={`section ${styles.cta}`}>
        <div className={`container ${styles.ctaInner}`}>
          <div>
            <h2 className="heading-2">Interested in LinkMyCampus?</h2>
            <p className="lede" style={{ marginTop: "0.75rem", color: "rgba(255,255,255,0.7)" }}>
              Tell us about your campus, organisation or partnership idea.
            </p>
          </div>
          <Link href="/contact" className="btn btn-on-dark">
            Get in touch
            <ArrowRight className="arrow" size={16} aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
