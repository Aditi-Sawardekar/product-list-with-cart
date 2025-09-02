import productImg from "../../assets/images/image-waffle-mobile.jpg";
import styles from "./CardImage.module.css";

export default function CardImage() {
  return (
    <img
      className={styles.cardImage}
      src={productImg}
      alt="Image of waffle with berries"
    />
  );
}
