import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./nav-h-e-a-d-e-r.module.css";

export type NavHEADERType = {
  className?: string;
};

const NavHEADER: NextPage<NavHEADERType> = ({ className = "" }) => {
  const onPlumbingTextClick = useCallback(() => {
    window.open("https://williamsplumbingsolutions.vercel.app/");
  }, []);

  const onSepticTextClick = useCallback(() => {
    window.open("https://williams-septic.vercel.app/");
  }, []);

  const onWaterTreatmentTextClick = useCallback(() => {
    window.open(
      "https://williamsplumbingsolutions.vercel.app/more-u-v-water-purification"
    );
  }, []);

  const onExcavationAggregateClick = useCallback(() => {
    window.open("https://getjobber.com");
  }, []);

  const onContactButtonClick = useCallback(() => {
    window.open("https://getjobber.com/");
  }, []);

  return (
    <header className={[styles.navHeader, className].join(" ")}>
      <div className={styles.logo}>
        <img
          className={styles.williams20logo3transparentIcon}
          loading="lazy"
          alt=""
          src="/williams20logo3transparent20bgroundpng@2x.png"
        />
        <b className={styles.williamsSolutionspro}>Williams Solutions.Pro</b>
      </div>
      <div className={styles.list}>
        <a className={styles.plumbing} onClick={onPlumbingTextClick}>
          Plumbing
        </a>
        <a className={styles.septic} onClick={onSepticTextClick}>
          Septic
        </a>
        <a
          className={styles.waterTreatment}
          onClick={onWaterTreatmentTextClick}
        >
          Water Treatment
        </a>
        <a
          className={styles.excavationAggregate}
          onClick={onExcavationAggregateClick}
        >{`Excavation & Aggregate`}</a>
        <button className={styles.contactButton} onClick={onContactButtonClick}>
          <a className={styles.contactUsToday}>Contact Us Today</a>
        </button>
      </div>
    </header>
  );
};

export default NavHEADER;
