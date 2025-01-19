import React, { useEffect } from "react";

import bg from "../assets/name-logo/nameBg.svg";
import HomeHeader from "./Home/HomeHeader";
import HomeSocials from "./Home/HomeSocials";
import HomeLatestWork from "./Home/HomeLatestWork";
import { homeBackgroundAnimation } from "../utils/homeBacgroundAnimation";
import BlurText from "../animated-ui-components/BlurText";
import DecryptedText from "../animated-ui-components/DecryptedText";

const Home = () => {
  useEffect(() => {
    homeBackgroundAnimation();
  }, []);

  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <section className="flex flex-col justify-between h-screen">
      <HomeHeader />
      <div className="absolute inset-0 hidden md:block" id="wrapper-canvas" />
      <div className="flex -mt-10 relative">
        <div className="w-full px-4 max-w-screen-xl mx-auto">
          <img
            src={bg}
            alt=""
            className="pointer-events-none absolute top-0 left-1/2 -translate-y-[80px] sm:-translate-y-[180px] -translate-x-1/2 w-[300px] sm:w-[400px] md:w-[650px]"
          />
          <div className="relative ml-4 md:ml-12">
            <BlurText
              text="Rohit Kumar Kashyap"
              delay={100}
              animateBy="letters"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="pointer-events-none text-2xl md:text-[64px]  mr-12"
              repeatDelay={1000}
            />

            <div className="mt-5">
              <DecryptedText
                text="Software Developer"
                animateOn="view"
                revealDirection="start"
                speed={100}
                sequential={true}
                useOriginalCharsOnly={true}
               className="pointer-events-none text-xm md:text-xl font-['Merriweather'] italic my-4 md:my-8"
              />
            </div>

            <div>
              <DecryptedText
                text="Build, Break, Learn, Repeat."
                animateOn="view"
                revealDirection="start"
                speed={100}
                sequential={true}
                useOriginalCharsOnly={true}
                className="pointer-events-none text-xm md:text-xl font-['Merriweather'] italic my-4 md:my-8"
              />
            </div>
          </div>
        </div>
        <HomeSocials />
      </div>

      <HomeLatestWork />
    </section>
  );
};

export default Home;
