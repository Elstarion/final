import css from "./Shop.module.scss";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { useSelector } from "react-redux";

const ShopNavbar = () => {
  const { cartItemsQuantity } = useSelector((state) => state.cart);

  return (
    <div className={css.shop_navbar}>
      <div className={css.shop_links}>
        <Link to="/" className={css.home_link}>
          Home
        </Link>
        <Link to="/shop">Shop</Link>
        <Link to="/shop/cart">
          <ShoppingCart size={32} />
          <span className={css.cart_total_items}>{cartItemsQuantity}</span>
        </Link>
      </div>
    </div>
  );
};

export default ShopNavbar;
