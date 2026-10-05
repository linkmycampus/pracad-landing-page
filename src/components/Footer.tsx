import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <p className={styles.logo}>
            <span>PRACAD</span> Technologies
          </p>
          <p className={styles.desc}>
            PRACAD Technologies is a technology and product development company building digital
            solutions that connect people, businesses and opportunities to create global impact.
          </p>
        </div>

        <div>
          <ul className={styles.list}>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/approach">Approach</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <ul className={styles.list}>
            <li>
              <Link href="/products/linkmycampus">LinkMyCampus</Link>
            </li>
          </ul>
        </div>

        <div>
          <p className={styles.eco}>
            PRACAD Technologies is the technology arm of the PRACAD Group, building and operating
            technology products within the broader ecosystem.
          </p>
          <p className={styles.eco} style={{ marginTop: "1rem" }}>
            Reach us via the{" "}
            <Link href="/contact" className={styles.inlineLink}>
              contact form
            </Link>
            .
          </p>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>© 2026 PRACAD Technologies Limited. All rights reserved.</p>
        <p>Part of the PRACAD Group.</p>
      </div>
    </footer>
  );
}
