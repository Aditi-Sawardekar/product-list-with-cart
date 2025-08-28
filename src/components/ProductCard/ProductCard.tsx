import CardButton from "../CardButton/CardButton";
import CardCategory from "../CardCategory/CardCategory";
import CardImage from "../CardImage/CardImage";
import CardPrice from "../CardPrice/CardPrice";
import CardTitle from "../CardTitle/CardTitle";

export default function ProductCard() {
  return (
    <article>
      <CardImage />
      <CardButton />
      <CardCategory />
      <CardTitle />
      <CardPrice />
    </article>
  );
}
