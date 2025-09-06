import styles from "./CardTitle.module.css";

interface CardTitleProps {
  title: string;
}

export default function CardTitle({ title }: CardTitleProps) {
  return <h2 className={`text-preset-3 ${styles.cardTitle}`}>{title}</h2>;
}
