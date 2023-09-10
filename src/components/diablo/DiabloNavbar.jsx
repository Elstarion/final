import { Link } from "react-router-dom";
import css from "./Diablo.module.scss";

const DiabloNavbar = () => {
  return (
    <div className={css.diablo_navbar}>
      <nav>
        <div className={css.link_wrapper}>
          <Link to="/">Home</Link>
        </div>
      </nav>
    </div>
  );
};

export default DiabloNavbar;
