import css from "./Hero.module.scss";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <div className={css.motion_wrapper}>
        <motion.h1
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 100, opacity: 1 }}
          transition={{
            duration: "2",
            delay: "1",
          }}
          className={css.hero_title}
        >
          Greetings
        </motion.h1>
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: "2",
            delay: "1.5",
          }}
          className={css.hero_p}
        >
          My name is Vlad
        </motion.p>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: "2",
            delay: "2",
          }}
          className={css.hero_p}
        >
          and I'm a
        </motion.p>
        <motion.p
          initial={{ y: 100, opacity: 0, scale: 2 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{
            duration: "2",
            delay: "2",
          }}
          className={css.hero_p}
        >
          Front End Developer
        </motion.p>
      </div>
      <video src="./circuit.mp4" autoPlay loop muted className={css.video} />
    </>
  );
};

export default Hero;
