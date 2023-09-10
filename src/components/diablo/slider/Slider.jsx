import { useState } from "react";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import css from "../Diablo.module.scss";

const Slider = ({ data }) => {
  const [slide, setSlide] = useState(0);

  return (
    <>
      <div className={css.slider_controls}>
        {data.map((item, index) => {
          return (
            <div
              key={Math.random()}
              className={
                slide === index
                  ? `${css.class_icon}`
                  : `${css.class_icon_inactive}`
              }
            >
              <img
                key={Math.random()}
                onClick={() => setSlide(index)}
                src={item.classIcon}
              />
              <span>{item.class}</span>
            </div>
          );
        })}
      </div>

      <MouseParallaxContainer
        className={css.carousel}
        globalFactorX={0.2}
        globalFactorY={0.2}
        resetOnLeave
      >
        {data.map((item, index) => {
          return (
            <>
              <MouseParallaxChild key={index} factorX={0.04} factorY={0.08}>
                <div className={css.slide_background}>
                  <img
                    src={item.src}
                    atl={item.alt}
                    key={Math.random()}
                    className={
                      slide === index ? `${css.slide}` : `${css.slide_hidden}`
                    }
                  />
                </div>
              </MouseParallaxChild>
              <MouseParallaxChild
                key={index + Math.random()}
                factorX={0.1}
                factorY={0.07}
                className={
                  slide === index
                    ? `${css.class_description}`
                    : `${css.slide_hidden}`
                }
              >
                <span>{item.classDescription}</span>
              </MouseParallaxChild>
            </>
          );
        })}
      </MouseParallaxContainer>
    </>
  );
};

export default Slider;
