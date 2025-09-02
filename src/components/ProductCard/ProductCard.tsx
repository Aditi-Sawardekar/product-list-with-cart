import CardButton from "../CardButton/CardButton";
import CardCategory from "../CardCategory/CardCategory";
import CardImage from "../CardImage/CardImage";
import CardPrice from "../CardPrice/CardPrice";
import CardTitle from "../CardTitle/CardTitle";

import styles from "./ProductCard.module.css";

export default function ProductCard() {
  return (
    <article className={styles.cardContainer}>
      <div className={styles.cardMediaContainer}>
        <CardImage />
        <CardButton />
      </div>

      <div className={styles.cardContentContainer}>
        <CardCategory />
        <CardTitle />
        <CardPrice />
      </div>
    </article>
  );
}
