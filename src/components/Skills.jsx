import React, { useState } from 'react';
import { useSprings, animated, to as interpolate } from '@react-spring/web';
import { useDrag } from 'react-use-gesture';
import '../styles/Skills.css';

const skills = [
 
    { name: "TypeScript", url: 'https://raw.githubusercontent.com/edent/SuperTinyIcons/d2d4dadd66db9b3ff0cd9297e2c77f44c0e0808e/images/svg/typescript.svg' },
  { name: "React", url: 'https://raw.githubusercontent.com/vscode-icons/vscode-icons/a4cd157323d217cd61b9efd873197ee6c2bf499b/icons/file_type_reactjs.svg' },

  { name: "Node.js", url: 'https://raw.githubusercontent.com/get-icon/geticon/fc0f660daee147afb4a56c64e12bde6486b73e39/icons/nodejs.svg' },
  { name: "MongoDB", url: 'https://raw.githubusercontent.com/detain/svg-logos/b02ee1ac30c7ff4757278337c95588b01ed0954b/svg/m/mongodb-icon-1.svg' },

  { name: "Express", url: 'https://raw.githubusercontent.com/pheralb/svgl/948d2fe59ce136a816f44069484c766de884f2a7/static/library/expressjs.svg' },
  { name: "HTML5", url: 'https://vectorwiki.com/images/tmnX3__html.svg' },
  { name: "CSS3", url: 'https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg' },


  { name: "JavaScript", url: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
 
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
  `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`;

function Skills() {
  const [gone] = useState(() => new Set());
  const [props, api] = useSprings(skills.length, (i) => ({
    ...to(i),
    from: from(i),
  }));

  const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
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
  });

  return (
    <div className="container">
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div className="deck" key={i} style={{ x, y }}>
          <animated.div
            {...bind(i)}
            className="card"
            style={{
              padding:"0.5rem 0",
              transform: interpolate([rot, scale], trans),
              backgroundImage: `url(${skills[i].url})`,
              backgroundSize: 'contain',
            }}
          >
            <h4 style={{ padding: '0.5rem' }}>{skills[i].name}</h4>
          </animated.div>
        </animated.div>
      ))}
    </div>
  );
}

export default Skills;
