import css from "./Diablo.module.scss";
import DiabloNavbar from "./DiabloNavbar";
import Slider from "./slider/Slider";
import { slides } from "/src/assets/slider/carouselData.json";

const Diablo = () => {
  return (
    <>
      <div className={css.container}>
        <DiabloNavbar />
        <section>
          <div className={css.hero_section}>
            <img src="/src/assets/elias.png" className={css.hero_image} />
            <video
              src="red-rose.mp4"
              autoPlay
              loop
              muted
              className={css.overlay}
            />
            <img src="/src/assets/d4-logo.png" className={css.logo} />
          </div>
        </section>

        <section className={css.story_section}>
          <h2 className={css.story_title}>Story</h2>
          <div className={css.story}>
            <img
              src="/src/assets/inarius-lilith.jpg"
              className={css.story_img}
            />
            <div>
              <p className={css.story_text}>
                Seeking refuge from the eternal conflict between the High
                Heavens and the Burning Hells, Inarius and Lilith formed
                Sanctuary and gave life to the Nephalem with the stolen
                Worldstone. Fearing for the destruction of her hybrid offspring,
                Lilith led a violent, protective act to protect the Nephalem;
                ultimately leading Inarius to turn his back on her, banishing
                her to the abyss, becoming enemies henceforth. Lilith's return
                ushers in an age of darkness and misery. What fate awaits?
              </p>
              <div className={css.cinematic_button}>
                <a
                  href="https://www.youtube.com/watch?v=9bRWIdOMfro&ab_channel=Diablo"
                  target="blank"
                >
                  CINEMATIC
                </a>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className={css.story_title}>Classes</h2>
          <Slider data={slides} />
        </section>

        <section className={css.siege_section}>
          <h2 className={css.story_title}>Lift the Demonic Siege</h2>
          <div className={css.siege_image}>
            <p className={css.siege_text}>
              Over 3 million players have battled the demonic hordes of Diablo
              IV. Now it's your turn to join the crusade and take up arms
              against the enemies of the mortal realms.
            </p>
            <img src="/src/assets/inariusvslilith.jpg" />
          </div>
        </section>
      </div>
    </>
  );
};

export default Diablo;
