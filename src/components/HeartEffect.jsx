import React, { useEffect, useState } from "react";

export default function HeartEffect({ active }) {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    if (!active) return;
    const interval = setInterval(() => {
      setHearts(prev => [
        ...prev,
        {
          id: Date.now(),
          x: Math.random() * window.innerWidth,
          size: 20 + Math.random() * 30,
        },
      ]);
    }, 200);

    return () => clearInterval(interval);
  }, [active]);

  return (
    <>
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="heart"
          style={{
            left: heart.x,
            fontSize: heart.size,
            top: "100vh",
            color: "red",
          }}
        >
          ❤️
        </div>
      ))}
    </>
  );
}
