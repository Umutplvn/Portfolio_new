import React, { useState } from 'react'
import { useSprings, animated, to as interpolate } from '@react-spring/web'
import { useDrag } from 'react-use-gesture'
import '../styles/Skills.css'; 

const skills = [
  { name: 'React', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
  { name: 'Node.js', url: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Node.js_logo_2015.svg' },
  { name: 'MongoDB', url: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/MongoDB_logo.svg' },
  { name: 'Express.js', url: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png' },
  { name: 'JavaScript', url: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
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
      const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0; // Kart dışarıya gidiyorsa, x pozisyonu hesapla
      const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0); // Kartın dönme miktarı
      const scale = down ? 1.1 : 1; // Aktif kart biraz büyür
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
              transform: interpolate([rot, scale], trans),
              backgroundImage: `url(${skills[i].url})`,
            }}
          >
            <div className="card-name">{skills[i].name}</div>
          </animated.div>
        </animated.div>
      ))}
    </div>
  );
}

export default Skills;
