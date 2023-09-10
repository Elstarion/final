import css from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <div className={css.not_found}>
      <h2>404</h2>
      <p>Page not found</p>
    </div>
  );
};

export default NotFound;
