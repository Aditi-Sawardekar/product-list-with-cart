import products from "../../data/data.json";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./ProductList.module.css";

export default function ProductList() {
  const productList = products.map((product) => {
    console.log(product);
    return (
      <li className={styles.productList} key={product.id}>
        <ProductCard product={product} />
      </li>
    );
  });

  return <ul>{productList}</ul>;
}
