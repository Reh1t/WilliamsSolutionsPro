import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./navigation-footer.module.css";

export type NavigationFooterType = {
  className?: string;
};

const NavigationFooter: NextPage<NavigationFooterType> = ({
  className = "",
}) => {
  const onSocialIconsContainerClick = useCallback(() => {
    window.open("https://ca.linkedin.com/in/williams-plumbing-solution");
  }, []);

  const onButtonsIconClick = useCallback(() => {
    window.open("https://www.facebook.com/williamsplumbingsolution/");
  }, []);

  const onButtonsIconClick1 = useCallback(() => {
    window.open("https://www.instagram.com/williamsplumbingsolution/");
  }, []);

  const onButtonsIconClick2 = useCallback(() => {
    window.open("https://www.youtube.com/watch?v=HdwCDhqtFuQ");
  }, []);

  const onPlumbingSolutionsTextClick = useCallback(() => {
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

  const onAboutUsTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='heroSection']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onContactUsTextClick = useCallback(() => {
    window.open("https://getjobber.com/");
  }, []);

  return (
    <footer className={[styles.navigationFooter, className].join(" ")}>
      <div className={styles.leftSection}>
        <h3 className={styles.williamsSolutionsPro}>Williams Solutions Pro</h3>
        <img
          className={styles.williams20logo3transparentIcon}
          alt=""
          src="/williams20logo3transparent20bgroundpng-1@2x.png"
        />
        <div
          className={styles.socialIcons}
          onClick={onSocialIconsContainerClick}
        >
          <img
            className={styles.buttonsIcon}
            loading="lazy"
            alt=""
            src="/buttons--icon@2x.png"
            onClick={onButtonsIconClick}
          />
          <img
            className={styles.buttonsIcon1}
            alt=""
            src="/buttons--icon-1@2x.png"
          />
          <img
            className={styles.buttonsIcon}
            alt=""
            src="/buttons--icon-2@2x.png"
            onClick={onButtonsIconClick1}
          />
          <img
            className={styles.buttonsIcon}
            alt=""
            src="/buttons--icon-3@2x.png"
            onClick={onButtonsIconClick2}
          />
        </div>
      </div>
      <div className={styles.servicesInfo}>
        <b className={styles.williamsServices}>Williams Services</b>
        <div className={styles.items}>
          <div
            className={styles.plumbingSolutions}
            onClick={onPlumbingSolutionsTextClick}
          >
            Plumbing Solutions
          </div>
          <div className={styles.septic} onClick={onSepticTextClick}>
            Septic
          </div>
          <div className={styles.septic} onClick={onWaterTreatmentTextClick}>
            Water Treatment
          </div>
          <div
            className={styles.excavationAggregate}
            onClick={onWaterTreatmentTextClick}
          >
            Excavation / Aggregate
          </div>
        </div>
      </div>
      <div className={styles.contactInfo}>
        <div className={styles.contactDetails}>
          <div className={styles.links}>
            <div className={styles.aboutUs} onClick={onAboutUsTextClick}>
              About Us
            </div>
            <div className={styles.contactUs} onClick={onContactUsTextClick}>
              Contact Us
            </div>
          </div>
          <div className={styles.contactMethods}>
            <div className={styles.phoneNumber}>
              <img
                className={styles.solarphoneLinearIcon}
                loading="lazy"
                alt=""
                src="/solarphonelinear.svg"
              />
              <div className={styles.callUs7054928910}>
                Call Us: 705-492-8910
              </div>
            </div>
            <div className={styles.email}>
              <img
                className={styles.svgIcon}
                loading="lazy"
                alt=""
                src="/svg.svg"
              />
              <div className={styles.emailUs}>Email Us:</div>
              <div className={styles.infowilliamsplumbingsolutions}>
                info@williamsplumbingsolutions.ca
              </div>
            </div>
          </div>
        </div>
        <div className={styles.williamsSolutionsPro1}>
          © Williams Solutions Pro 2024. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default NavigationFooter;
