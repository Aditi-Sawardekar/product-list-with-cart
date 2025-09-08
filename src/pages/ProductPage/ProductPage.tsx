import ProductList from "../../components/ProductList/ProductList";
import styles from "./ProductPage.module.css";

export default function ProductPage() {
  return (
    <main className={styles.pageContainer}>
      <h1 className={`text-preset-1 ${styles.pageHeading}`}>Desserts</h1>
      <ProductList />
    </main>
  );
}
