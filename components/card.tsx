import type { NextPage } from "next";
import { useMemo, type CSSProperties, useCallback } from "react";
import styles from "./card.module.css";

export type CardType = {
  className?: string;
  photo?: string;
  plumbing?: string;

  /** Style props */
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];

  /** Action props */
  onPlumbingTextClick?: () => void;
};

const Card: NextPage<CardType> = ({
  className = "",
  onPlumbingTextClick,
  photo,
  plumbing,
  propDisplay,
  propMinWidth,
}) => {
  const plumbingStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const onCard1ContainerClick = useCallback(() => {
    window.open("https://williamsplumbingsolutions.vercel.app/");
  }, []);

  return (
    <div
      className={[styles.card1, className].join(" ")}
      onClick={onPlumbingTextClick}
    >
      <img className={styles.photoIcon} loading="lazy" alt="" src={photo} />
      <div className={styles.serviceNameAndLink}>
        <div className={styles.plumbing} style={plumbingStyle}>
          {plumbing}
        </div>
        <img
          className={styles.arrowForwardIcon}
          loading="lazy"
          alt=""
          src="/arrow-forward.svg"
        />
      </div>
    </div>
  );
};

export default Card;
