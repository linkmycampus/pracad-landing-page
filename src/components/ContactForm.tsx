"use client";

import { FormEvent, useState } from "react";
import styles from "@/app/contact/page.module.css";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className={styles.thanks} role="status">
        <h2 className="heading-3">Thanks. Message noted.</h2>
        <p>
          This demo form doesn&apos;t send email yet. When a backend is connected, your enquiry will
          go straight to the team.
        </p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.field}>
        <label htmlFor="name">Full name *</label>
        <input id="name" name="name" type="text" required autoComplete="name" />
      </div>
      <div className={styles.field}>
        <label htmlFor="email">Email *</label>
        <input id="email" name="email" type="email" required autoComplete="email" />
      </div>
      <div className={styles.field}>
        <label htmlFor="org">Organisation</label>
        <input id="org" name="organisation" type="text" autoComplete="organization" />
      </div>
      <div className={styles.field}>
        <label htmlFor="subject">Subject / interest</label>
        <select id="subject" name="subject" defaultValue="General enquiry">
          <option>Product partnership</option>
          <option>General enquiry</option>
          <option>Media</option>
          <option>Other</option>
        </select>
      </div>
      <div className={styles.field}>
        <label htmlFor="message">Message *</label>
        <textarea id="message" name="message" rows={5} required />
      </div>
      <div className={styles.field}>
        <label htmlFor="heard">How did you hear about PRACAD?</label>
        <input id="heard" name="heard" type="text" />
      </div>
      <button type="submit" className="btn btn-primary">
        Send message
      </button>
    </form>
  );
}
