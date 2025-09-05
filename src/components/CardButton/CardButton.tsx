import cartIcon from "../../assets/images/icon-add-to-cart.svg";
import styles from "./CardButton.module.css";

interface CardButtonProps {
  label: string;
}

export default function CardButton({ label }: CardButtonProps) {
  return (
    <button type="button" className={`text-preset-5 ${styles.cardButton}`}>
      <img src={cartIcon} alt="" aria-hidden="true" />
      {label}
    </button>
  );
}
