import styles from "./CardPrice.module.css";

export default function CardPrice() {
  return (
    // Using <data> element to semantically represent price with a machine-readable value.
    <data className={`text-preset-3 ${styles.cardPrice}`} value="6.50">
      $6.50
    </data>
  );
}
