import React, { useState } from "react";
import { useSprings, animated, to as interpolate } from "@react-spring/web";
import { useDrag } from "react-use-gesture";
import "../styles/Skills.css";
import jsLogo from "../assets/skills/jsCardLogo.png";
import cssLogo from "../assets/skills/css.svg";
import htmlLogo from "../assets/skills/html.webp";
import expressLogo from "../assets/skills/expressjs.png";
import mongoLogo from "../assets/skills/mongo.png";
import nodeLogo from "../assets/skills/nodejsLogo.svg";
import reactLogo from "../assets/skills/react.png";
import tsLogo from "../assets/skills/Typescript.png";

const skills = [
  { name: "TypeScript", url: `${tsLogo}` },
  { name: "React", url: `${reactLogo}` },
  { name: "Node.js", url: `${nodeLogo}` },
  { name: "MongoDB", url: `${mongoLogo}` },
  { name: "Express", url: `${expressLogo}` },
  { name: "HTML5", url: `${htmlLogo}` },
  { name: "CSS3", url: `${cssLogo}` },
  { name: "JavaScript", url: `${jsLogo}` },
];

const to = (i) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});

const from = (_i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });

const trans = (r, s) =>
  `perspective(1500px) rotateX(30deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`;

function Skills() {
  const [gone] = useState(() => new Set());
  const [props, api] = useSprings(skills.length, (i) => ({
    ...to(i),
    from: from(i),
  }));

  const bind = useDrag(
    ({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
      const trigger = velocity > 0.2;
      const dir = xDir < 0 ? -1 : 1;
      if (!down && trigger) gone.add(index);
      api.start((i) => {
        if (index !== i) return;
        const isGone = gone.has(index);
        const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0;
        const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0);
        const scale = down ? 1.1 : 1;
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        };
      });
      if (!down && gone.size === skills.length)
        setTimeout(() => {
          gone.clear();
          api.start((i) => to(i));
        }, 600);
    }
  );

  return (
    <div className="container">
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div className="deck" key={i} style={{ x, y }}>
          <animated.div
            {...bind(i)}
            className="card"
            style={{
              padding: "0.5rem 0",
              transform: interpolate([rot, scale], trans),
              backgroundImage: `url(${skills[i].url})`,
              backgroundSize: "contain",
            }}
          >
            <h4 style={{ padding: "0.5rem" }}>{skills[i].name}</h4>
          </animated.div>
        </animated.div>
      ))}
    </div>
  );
}

export default Skills;
