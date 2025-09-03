import cartIcon from "../../assets/images/icon-add-to-cart.svg";
import styles from "./CardButton.module.css";

export default function CardButton() {
  return (
    <button className={`text-preset-5 ${styles.cardButton}`}>
      <img src={cartIcon} alt="" aria-hidden="true" />
      Add to Cart
    </button>
  );
}
