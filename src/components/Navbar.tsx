"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";

const links = [
  { href: "/about", label: "About" },
  { href: "/approach", label: "Approach" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo} onClick={() => setOpen(false)}>
          <span className={styles.logoMark}>PRACAD</span>
          <span className={styles.logoSub}>Technologies</span>
        </Link>

        <nav className={styles.desktopNav} aria-label="Primary">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="/products/linkmycampus" className={`btn btn-primary ${styles.desktopCta}`}>
          Explore LinkMyCampus
          <ArrowRight className="arrow" size={16} aria-hidden />
        </Link>

        <button
          type="button"
          className={styles.menuBtn}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        className={`${styles.mobileOverlay} ${open ? styles.mobileOpen : ""}`}
        aria-hidden={!open}
        inert={!open ? true : undefined}
      >
        <nav className={styles.mobileNav} aria-label="Mobile">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.mobileLink}
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/products/linkmycampus"
          className={`btn btn-on-dark ${styles.mobileCta}`}
          tabIndex={open ? 0 : -1}
          onClick={() => setOpen(false)}
        >
          Explore LinkMyCampus
          <ArrowRight className="arrow" size={16} aria-hidden />
        </Link>
      </div>
    </header>
  );
}
