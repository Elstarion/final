import css from "./Projects.module.scss";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section className={css.projects_section}>
      <p className={css.projects_title}>Projects</p>
      <div className={css.projects_preview}>
        <div className={css.preview_card}>
          <Link to="/diablo">
            <img className={css.project_image} src="src/assets/d4.png" />
            <span className={css.project_description}>
              A yet to be completed landing page for one of the fastest selling
              games of 2023.
            </span>
          </Link>
        </div>
        <div className={css.preview_card}>
          <Link to="/shop">
            <img className={css.project_image} src="src/assets/mamazon.png" />
            <span className={css.project_description}>
              Mini store that manages it's state with Redux Toolkit.
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
