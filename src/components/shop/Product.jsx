import css from "./Shop.module.scss";
import { useDispatch } from "react-redux";

const Product = ({ data }) => {
  const { id, productImage, productName, price } = data;
  const dispatch = useDispatch();

  return (
    <div className={css.product}>
      <img src={productImage} />
      <div className={css.description}>
        <p>{productName}</p>
        <p>${price}</p>
      </div>
      <button className={css.addToCartBttn} onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
