import React from "react";
import { useSpring, animated } from "react-spring";

export default function SurpriseCard() {
  const message = "I love you more than words can say! 💌🎉🥰";

  const props = useSpring({ transform: "scale(1)", from: { transform: "scale(0.8)" } });

  return (
    <animated.div style={props} className="surprise-card">
      <div className="surprise-emoji" style={{ fontSize: "5rem" }}>
        🎉💖🥰
      </div>
      <p>{message}</p>
    </animated.div>
  );
}
