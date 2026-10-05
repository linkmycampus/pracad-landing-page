import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Products",
  description: "Technology products built and operated by PRACAD Technologies, starting with LinkMyCampus.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="Technology we build and operate."
        lede="Real products for real problems. We feature only what we ship, starting with our flagship, LinkMyCampus."
      />

      <section className="section">
        <div className="container">
          <Reveal>
            <article className={styles.featured}>
              <div className={styles.copy}>
                <h2 className="heading-2">LinkMyCampus</h2>
                <p className="lede">
                  Campus and community technology connecting people and opportunities, built and
                  operated by PRACAD Technologies.
                </p>
                <Link href="/products/linkmycampus" className="btn btn-primary">
                  View product
                  <ArrowRight className="arrow" size={16} aria-hidden />
                </Link>
              </div>
            </article>
          </Reveal>
        </div>
      </section>
    </>
  );
}
