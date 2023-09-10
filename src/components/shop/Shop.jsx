import css from "./Shop.module.scss";
import ShopNavbar from "./ShopNavbar";
import { products } from "../../assets/products/products.json";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";

const Shop = () => {
  console.log(products);
  const dispatch = useDispatch();
  const handleAddToCart = (product) => dispatch(addToCart(product));
  return (
    <div className={css.container}>
      <ShopNavbar />
      <h1>Mamazon</h1>
      <div className={css.products}>
        {products.map((product) => (
          <div key={product.id} className={css.product}>
            <h3>{product.name}</h3>
            <img src={product.image} alt={product.name} />
            <div className={css.details}>
              <span className={css.price}>${product.price}</span>
            </div>
            <button
              className={css.shop_button}
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
