import type { ReactNode } from "react";
import styles from "./PageHero.module.css";

type PageHeroProps = {
  title: string;
  lede?: string;
  actions?: ReactNode;
};

export default function PageHero({ title, lede, actions }: PageHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroMedia} aria-hidden />
      <div className={styles.heroContent}>
        <h1 className={`heading-hero ${styles.heroTitle}`}>{title}</h1>
        {lede ? <p className={styles.heroSupport}>{lede}</p> : null}
        {actions ? <div className={`cta-group ${styles.heroActions}`}>{actions}</div> : null}
      </div>
    </section>
  );
}
