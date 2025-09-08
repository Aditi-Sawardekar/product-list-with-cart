import styles from "./CardPrice.module.css";

interface CardPriceProps {
  currency: string;
  amount: number;
}

export default function CardPrice({ currency, amount }: CardPriceProps) {
  return (
    // Using <data> element to semantically represent price with a machine-readable value.
    <data
      className={`text-preset-3 ${styles.cardPrice}`}
      data-currency={currency}
      value={amount}
      aria-label={`Price: ${currency}${amount.toFixed(2)}`}
    >
      {`${currency}${amount.toFixed(2)}`}
    </data>
  );
}
