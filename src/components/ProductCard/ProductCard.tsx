import CardButton from "../CardButton/CardButton";
import CardCategory from "../CardCategory/CardCategory";
import CardImage from "../CardImage/CardImage";
import CardPrice from "../CardPrice/CardPrice";
import CardTitle from "../CardTitle/CardTitle";

import styles from "./ProductCard.module.css";

interface ProductProps {
  id: number;
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  name: string;
  category: string;
  price: number;
}

interface ProductCardProps {
  product: ProductProps;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className={styles.cardContainer}>
      <div className={styles.cardMediaContainer}>
        <CardImage
          src={product.image.mobile}
          alt={`Image of ${product.name}`}
        />
        <CardButton label="Add to Cart" />
      </div>

      <div className={styles.cardContentContainer}>
        <CardCategory category={product.category} />
        <CardTitle title={product.name} />
        <CardPrice currency="$" amount={product.price} />
      </div>
    </article>
  );
}
