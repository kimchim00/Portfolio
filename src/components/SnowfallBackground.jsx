import { useEffect, useState } from "react";

export const SnowfallBackground = () => {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    generateSnowflakes();

    const handleResize = () => {
      generateSnowflakes();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateSnowflakes = () => {
    const numberOfFlakes = Math.floor((window.innerWidth * window.innerHeight) / 9000);
    const flakes = [];

    for (let i = 0; i < numberOfFlakes; i++) {
      flakes.push({
        id: i,
        size: Math.random() * 6 + 2,
        x: Math.random() * 100,
        delay: Math.random() * 10,
        duration: Math.random() * 10 + 5,
        opacity: Math.random() * 0.5 + 0.5,
      });
    }

    setSnowflakes(flakes);
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute bg-white rounded-full"
          style={{
            width: flake.size + "px",
            height: flake.size + "px",
            left: flake.x + "%",
            top: "-10px",
            opacity: flake.opacity,
            animation: `fall ${flake.duration}s linear ${flake.delay}s infinite`,
            filter: "blur(0.5px)",
          }}
        />
      ))}

      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(110vh);
          }
        }
      `}</style>
    </div>
  );
};
