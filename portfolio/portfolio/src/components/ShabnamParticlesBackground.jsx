import { useEffect, useState } from "react";

export const ShabnamParticlesBackground = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    generateParticles();

    const handleResize = () => generateParticles();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateParticles = () => {
    const count = Math.floor((window.innerWidth * window.innerHeight) / 10000);
    const generated = [];

    for (let i = 0; i < count; i++) {
      generated.push({
        id: i,
        size: Math.random() * 6 + 3,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.3 + 0.2,
        floatDuration: Math.random() * 10 + 5,
        delay: Math.random() * 5,
      });
    }

    setParticles(generated);
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-indigo-300"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.x}%`,
            top: `${p.y}%`,
            opacity: p.opacity,
            animation: `float ${p.floatDuration}s ease-in-out ${p.delay}s infinite alternate`,
            filter: "blur(1.5px)",
          }}
        />
      ))}

      <style>{`
        @keyframes float {
          0% {
            transform: translateY(0px) translateX(0px) scale(1);
          }
          50% {
            transform: translateY(-10px) translateX(5px) scale(1.1);
          }
          100% {
            transform: translateY(0px) translateX(0px) scale(1);
          }
        }
      `}</style>
    </div>
  );
};
