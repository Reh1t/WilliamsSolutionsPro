import type { NextPage } from "next";
import { useCallback } from "react";
import Card from "./card";
import styles from "./services.module.css";

export type ServicesType = {
  className?: string;
};

const Services: NextPage<ServicesType> = ({ className = "" }) => {
  const onCard1ContainerClick = useCallback(() => {
    window.open("https://williamsplumbingsolutions.vercel.app/");
  }, []);

  const onCard4ContainerClick = useCallback(() => {
    window.open(
      "https://williamsplumbingsolutions.vercel.app/more-u-v-water-purification"
    );
  }, []);

  const onCard3ContainerClick = useCallback(() => {
    window.open("https://williams-septic.vercel.app/");
  }, []);

  return (
    <section className={[styles.services, className].join(" ")}>
      <div className={styles.heading}>
        <h1 className={styles.ourServices}>Our Services</h1>
      </div>
      <div className={styles.servicesCards}>
        <Card
          onPlumbingTextClick={onCard1ContainerClick}
          photo="/photo@2x.png"
          plumbing="Plumbing"
        />
        <Card
          onPlumbingTextClick={onCard4ContainerClick}
          photo="/photo-1@2x.png"
          plumbing="Water Treatment"
          propDisplay="unset"
          propMinWidth="unset"
        />
        <Card
          onPlumbingTextClick={onCard3ContainerClick}
          photo="/photo-2@2x.png"
          plumbing="Septic"
          propDisplay="inline-block"
          propMinWidth="60px"
        />
        <Card
          onPlumbingTextClick={onCard3ContainerClick}
          photo="/photo-3@2x.png"
          plumbing={`Excavation & Aggregate`}
          propDisplay="unset"
          propMinWidth="unset"
        />
      </div>
    </section>
  );
};

export default Services;
