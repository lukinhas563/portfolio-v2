import { useState } from "react";
import Icon from "../../icons/Icon";
import styles from "./slide.module.css";
import { icons as allIcons } from "@/components/icons/icons";

interface SlideProps {
  direction?: "left" | "right";
}

export default function Slide({ direction = "left" }: SlideProps) {
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const scroll =
    direction === "left"
      ? "animate-infinite-scroll"
      : "animate-infinite-scroll-reverse";
  const width = 50;

  const icons: (keyof typeof allIcons)[] = [
    "javascript",
    "react",
    "typescript",
    "vue",
    "next",
    "html",
    "css",
    "node",
    "docker",
    "svelte",
    "figma",
    "postgresql",
    "npm",
    "mysql",
    "firebase",
    "mongodb",
    "knex",
    "tailwind",
    "git",
    "webpack",
    "yarn",
    "jest",
    "csharp",
    "java",
    "dotnet",
    "python",
    "angular",
    "spring",
    "rabbitmq",
    "aws",
    "azure",
  ];

  return (
    <div
      id="skills"
      className={styles.skills}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        role="listitem"
        className={`flex items-center gap-6 ${scroll} ${
          isPaused ? "paused" : ""
        }`}
      >
        {icons.map((icon, index) => (
          <Icon
            key={index}
            name={icon}
            width={width}
            className={styles.skill}
          />
        ))}
      </div>
      <div
        className={`flex items-center gap-6 ${scroll} ${
          isPaused ? "paused" : ""
        }`}
      >
        {icons.map((icon, index) => (
          <Icon
            key={`dup-${index}`}
            name={icon}
            width={width}
            className={styles.skill}
          />
        ))}
      </div>
    </div>
  );
}
