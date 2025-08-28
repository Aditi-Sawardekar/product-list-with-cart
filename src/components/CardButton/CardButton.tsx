import cartIcon from "../../assets/images/icon-add-to-cart.svg";

export default function CardButton() {
  return (
    <button>
      <img src={cartIcon} alt="" aria-hidden="true" />
      Add to Cart
    </button>
  );
}
