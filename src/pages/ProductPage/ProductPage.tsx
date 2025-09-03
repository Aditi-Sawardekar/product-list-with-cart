import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./ProductPage.module.css";

export default function ProductPage() {
  return (
    <main className={styles.pageContainer}>
      <h1 className={`text-preset-1 ${styles.pageHeading}`}>Desserts</h1>
      <ProductCard />
    </main>
  );
}
