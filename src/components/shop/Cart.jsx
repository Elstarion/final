import { Link } from "react-router-dom";
import css from "./Shop.module.scss";
import ShopNavbar from "./ShopNavbar";
import { useDispatch, useSelector } from "react-redux";
import { ArrowLeft } from "phosphor-react";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotal,
  removeFromCart,
} from "../../store/cartSlice";
import { useEffect } from "react";
import doit from "../../assets/justdoit.png";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);

  const handleIncreaseCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleDecreaseCart = (item) => {
    dispatch(decreaseCart(item));
  };

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className={css.container}>
      <ShopNavbar />
      <div className={css.cart_container}>
        <h2>Shopping Cart</h2>
        {cart.cartItems.length === 0 ? (
          <div className={css.cart_empty}>
            <p>Your cart is currently empty</p>
            <div className={css.start_shopping}>
              <Link to="/shop">
                <ArrowLeft size={32} weight="bold" />
                <span>Start shopping</span>
              </Link>
            </div>
            <img src={doit} alt="justdoit" className={css.justdoit} />
          </div>
        ) : (
          <div>
            <div className={css.titles}>
              <h3 className={css.product_title}>Product</h3>
              <h3 className={css.product_price}>Price</h3>
              <h3 className={css.product_quantity}>Quantity</h3>
              <h3 className={css.product_total}>Total</h3>
            </div>

            <div className={css.cart_items}>
              {cart.cartItems?.map((item) => (
                <div className={css.cart_item} key={item.id}>
                  <div className={css.cart_product}>
                    <img src={item.image} alt={item.name} />
                    <div className={css.item_description}>
                      <h3>{item.name}</h3>
                      <button onClick={() => handleRemoveFromCart(item)}>
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className={css.cart_product_price}>${item.price}</div>
                  <div className={css.cart_product_quantity}>
                    <button
                      onClick={() =>
                        item.inCart === 1
                          ? handleRemoveFromCart(item)
                          : handleDecreaseCart(item)
                      }
                    >
                      -
                    </button>
                    <div className={css.count}>{item.inCart}</div>
                    <button onClick={() => handleIncreaseCart(item)}>+</button>
                  </div>
                  <div className={css.cart_product_total_price}>
                    ${item.price * item.inCart}
                  </div>
                </div>
              ))}
            </div>

            <div className={css.cart_summary}>
              <button
                className={css.clear_cart}
                onClick={() => handleClearCart()}
              >
                Clear Cart
              </button>
              <div className={css.cart_checkout}>
                <div className={css.subtotal}>
                  <span>Subtotal</span>
                  <span className={css.amount}>
                    ${cart.cartTotalPrice.toFixed(2)}
                  </span>
                </div>
                <p>Taxes and shipping calculated at checkout</p>
                <button className={css.shop_button}>Checkout</button>
                <div className={css.continue_shopping}>
                  <Link to="/shop">
                    <ArrowLeft size={32} weight="bold" />
                    <span>Continue shopping</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
