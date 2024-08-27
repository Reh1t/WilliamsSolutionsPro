import type { NextPage } from "next";
import NavHEADER from "../components/nav-h-e-a-d-e-r";
import HeroSection from "../components/hero-section";
import Services from "../components/services";
import NavigationFooter from "../components/navigation-footer";
import styles from "./index.module.css";

const PortalPge: NextPage = () => {
  return (
    <div className={styles.portalPge}>
      <NavHEADER />
      <HeroSection />
      <Services />
      <NavigationFooter />
    </div>
  );
};

export default PortalPge;
