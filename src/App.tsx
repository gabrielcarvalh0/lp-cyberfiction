import React, { useRef, useEffect, useState } from "react";
import { useSpring, animated, config } from "react-spring";
import { Element, animateScroll as scroll } from "react-scroll";

import "./App.css";
interface AnimationProps {
  scroll: number;
}

const App: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [{ scrollTop }, set] = useSpring(() => ({
    scrollTop: window.scrollY,
    config: { mass: 1, tension: 170, friction: 26 },
  }));
  const windowHeight = window.innerHeight;
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newIndex = Math.floor(scrollY / (windowHeight / 100));

      if (newIndex !== currentImageIndex) {
        setCurrentImageIndex(newIndex);
      }

      set({ scrollTop: scrollY });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const images = [];
  for (let i = 1; i <= 300; i++) {
    images.push(`male${i.toString().padStart(4, "0")}.png`);
  }

  return (
    <div className="w-full relative scroll-smooth">
      <div id="nav">
        <h3>
          <b>CYBER</b>FICTION*
        </h3>
        <button
          onClick={() => {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
          }}
        >
          APRIL,2023
        </button>
      </div>

      <div id="main">
        <div id="page">
          <div id="loop">
            <h1>
              <b>CYBER</b>FICTION IS THE{" "}
              <b>
                <i>REAL</i>
              </b>{" "}
              <span>STORY</span> IN THE
              <span>
                <i>METAVERSE.</i>
              </span>
            </h1>
            <h1>
              <b>CYBER</b>FICTION IS THE{" "}
              <b>
                <i>REAL</i>
              </b>{" "}
              <span>STORY</span> IN THE
              <span>
                <i>METAVERSE.</i>
              </span>
            </h1>
            <h1>
              <b>CYBER</b>FICTION IS THE{" "}
              <b>
                <i>REAL</i>
              </b>{" "}
              <span>STORY</span> IN THE
              <span>
                <i>METAVERSE.</i>
              </span>
            </h1>
          </div>
          <h3>
            CYBERFICTION AIMS TO BE A DECENTRALIZED COMMUNITY THAT CAN <br />{" "}
            CREATE NEW VALUES AND PROFITS THROUGH PLAY IN THE VIRTUAL <br />{" "}
            WORLD.
          </h3>
          <h4>...SCROLL TO READ</h4>
        <canvas id="canvas"></canvas>
        </div>
        <div id="page1">
          <div id="right-text">
            <h3>CYBERFICTION / KEY WORD</h3>
            <h1>
              HAVE FUN
              <br />
              LET'S PLAY
              <br />
              JUST BE TOGETHER
            </h1>
          </div>
          <div id="left-text">
            <h1>
              MAKE A STORY
              <br />
              TAKE A CHANCE
              <br />
              BUILD AND OWNED
            </h1>
            <h3>..AND MAINTAIN GOOD HUMANITY</h3>
          </div>
        </div>
        <div id="page2">
          <div id="text1">
            <h3>CYBERFICTION / HAVE FUN</h3>
            <h1>
              LET'S
              <br />
              HAVE FUN
              <br />
              TOGETHER
            </h1>
          </div>
          <div id="text2">
            <p>
              LET'S HAVE A BLAST! LET'S JUST THROW AWAY AGE, GENDER, REGION,{" "}
              <br /> STATUS, ETC., DON'T COMPETE, DON'T FIGHT, COOPERATE AND
              SHARE <br /> WITH EACH OTHER AND ENJOY IT TOGETHER! SO THAT YOU
              CAN STAND
              <br /> THERE IN THE NOT-TOO-DISTANT FUTURE AND DREAM OF ANOTHER
              NEW <br /> FUTURE
            </p>
          </div>
        </div>
        <div id="page3">
          <div id="text3">
            <h3>CYBERFICTION / PLAYGROUND</h3>
            <h1>
              CYBERFIELD
              <br />
              IS OUR
              <br />
              PLAYGROUND
            </h1>
          </div>
        </div>
      </div>
     
 
    </div>
  );
};

export default App;
