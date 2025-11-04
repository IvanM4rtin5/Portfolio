import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { BackgroundWrapper } from "./styles";

const BackgroundParticles = () => {
  const particlesInit = async (engine) => {
    // console.log("Particles engine:", engine); 
    await loadFull(engine);
  };
  

  return (
    <BackgroundWrapper>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: { value: "transparent" }, 
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse", 
              },
            },
            modes: {
              repulse: {
                distance: 100, 
                duration: 0.2, 
              },
            },
          },
          particles: {
            color: { value: "#415a77" },
            links: {
              color: "#999591",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "bottom",
            },
            number: {
              density: { enable: true, area: 800 },
              value: 80,
            },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: 3 },
          },
          detectRetina: true,
        }}
      />
    </BackgroundWrapper>
  );
};

export default BackgroundParticles;
