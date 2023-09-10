import css from "./Skills.module.scss";
import html from "/src/assets/html.png";
import cssLogo from "/src/assets/css.png";
import javascript from "/src/assets/javascript.png";
import react from "/src/assets/react.png";
import redux from "/src/assets/redux.png";
import github from "/src/assets/github.png";

const Skills = () => {
  const technologies = [
    {
      id: 1,
      src: html,
      title: "HTML",
      shadow: "0px 5px 10px #e75a26",
    },
    {
      id: 2,
      src: cssLogo,
      title: "CSS",
      shadow: "0px 5px 10px #016DB3",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      shadow: "0px 5px 10px #FDD000",
    },

    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-blue-600",
      shadow: "0px 5px 10px #00D1FC",
    },
    {
      id: 5,
      src: redux,
      title: "Redux",
      shadow: "0px 5px 10px #764ABC",
    },
    {
      id: 6,
      src: github,
      title: "GitHub",
      shadow: "0px 5px 10px #D1D3D5",
    },
  ];

  return (
    <section className={css.skills_section}>
      <p className={css.skills_title}>Technologies I'm working with</p>
      <div className={css.tech}>
        {technologies.map(({ id, src, title, shadow }) => (
          <div
            key={id}
            className={css.tech_card}
            style={{
              boxShadow: shadow,
            }}
          >
            <img src={src} className={css.tech_image} />
            <p className={css.tech_name}>{title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
