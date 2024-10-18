import React, { useEffect, useState } from "react";
import Particle from "./Particle";

const App = () => {
  const [time, setTime] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const startDate = new Date("2024-10-18T10:00:00").getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = startDate + 24 * 60 * 60 * 1000 - now;

      if (distance > 0) {
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTime({
          hours: String(hours).padStart(2, "0"),
          minutes: String(minutes).padStart(2, "0"),
          seconds: String(seconds).padStart(2, "0"),
        });
      } else {
        setTime({ hours: "00", minutes: "00", seconds: "00" });
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen bg-gradient-to-b from-black via-gray-900 to-black flex items-center justify-center">
      {/* Particles.js Background */}
      <Particle />

      <div className="relative z-10 text-center p-6 animate-fade-in">
        <h1
          className="text-6xl md:text-7xl lg:text-9xl tracking-wider font-extrabold mb-8 bg-clip-text text-transparent 
            bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 drop-shadow-lg"
        >
          INNOTHON '24
        </h1>

        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 lg:gap-12 text-center mb-10 tracking-wider">
          {["hours", "minutes", "seconds"].map((unit, index) => (
            <div key={index} className="text-center">
              <div
                className="text-6xl md:text-7xl lg:text-9xl font-bold"
                style={{ fontFamily: "Stick No Bills", color: "white" }}
              >
                {time[unit]}
              </div>
              <div className="text-md md:text-lg uppercase text-gray-400">
                {unit}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center space-x-3 md:space-x-6 mt-8">
          <span className="text-lg md:text-2xl text-white font-semibold tracking-widest">
            PLAN
          </span>
          <span className="text-lg md:text-2xl text-white font-semibold">
            |
          </span>
          <span className="text-lg md:text-2xl text-white font-semibold tracking-widest">
            DEVELOP
          </span>
          <span className="text-lg md:text-2xl text-white font-semibold">
            |
          </span>
          <span className="text-lg md:text-2xl text-white font-semibold tracking-widest">
            CONQUER
          </span>
        </div>
      </div>
    </div>
  );
};

export default App;
