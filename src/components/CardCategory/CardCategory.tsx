import styles from "./CardCategory.module.css";

interface CardCategoryProps {
  category: string;
}

export default function CardCategory({ category }: CardCategoryProps) {
  return <h3 className={`text-preset-4 ${styles.cardCategory}`}>{category}</h3>;
}
