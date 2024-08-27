import type { NextPage } from "next";
import styles from "./hero-section.module.css";

export type HeroSectionType = {
  className?: string;
};

const HeroSection: NextPage<HeroSectionType> = ({ className = "" }) => {
  return (
    <section
      className={[styles.heroSection, className].join(" ")}
      data-scroll-to="heroSection"
    >
      <div className={styles.text}>
        <h1 className={styles.yourTrustedPartner}>
          Your Trusted Partner in Premium Waterworks, Excavation, and Logging
          Services.
        </h1>
        <div
          className={styles.atWilliamsSolutions}
        >{`At Williams Solutions, we take pride in serving the Tri-town & Area with top-tier waterworks, excavation, aggregate, and logging services. Our commitment to quality and reliability ensures that every project we undertake is executed with precision and care, providing you with solutions that stand the test of time.`}</div>
      </div>
      <div className={styles.heroImages}>
        <img
          className={styles.imagesIcon}
          loading="lazy"
          alt=""
          src="/frame-6@2x.png"
        />
        <img
          className={styles.imagesIcon1}
          loading="lazy"
          alt=""
          src="/frame-7@2x.png"
        />
        <img
          className={styles.imagesIcon1}
          loading="lazy"
          alt=""
          src="/frame-9@2x.png"
        />
        <img
          className={styles.imagesIcon1}
          loading="lazy"
          alt=""
          src="/frame-8@2x.png"
        />
      </div>
    </section>
  );
};

export default HeroSection;
