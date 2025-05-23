
import { useEffect, useState } from "react";
import { SnowfallBackground } from "./SnowfallBackground";
import {ShabnamParticlesBackground } from "./ShabnamParticlesBackground";

export const BackgroundEffect = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);

    const observer = new MutationObserver(() => {
      const currentTheme = document.documentElement.classList.contains("dark") ? "dark" : "light";
      setTheme(currentTheme);
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  return theme === "dark" ? <SnowfallBackground /> : <ShabnamParticlesBackground/>;
};
