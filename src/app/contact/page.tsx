import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with PRACAD Technologies about products, partnerships and enquiries.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Get in touch."
        lede="Partnerships, product conversations and general enquiries. We'd like to hear from you."
      />

      <section className="section">
        <div className={`container ${styles.layout}`}>
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={100}>
            <aside className={styles.aside}>
              <p>
                PRACAD Technologies builds technology products that solve real problems and create
                scalable impact, the technology arm of the PRACAD Group.
              </p>
              <p className={styles.asideNote}>
                Official email, phone and office details will appear here once confirmed. Until
                then, use the form.
              </p>
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  );
}
