import React, { useEffect, useState } from "react";

export default function HeartTrail() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const handleMove = e => {
      setHearts(prev => [...prev, { id: Date.now(), x: e.clientX, y: e.clientY }]);
      setTimeout(() => setHearts(prev => prev.slice(1)), 1000); // remove after 1s
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <>
      {hearts.map(heart => (
        <div 
          key={heart.id} 
          style={{
            position: "fixed",
            left: heart.x,
            top: heart.y,
            fontSize: "1.5rem",
            color: "red",
            pointerEvents: "none",
            userSelect: "none"
          }}
        >
          ❤️
        </div>
      ))}
    </>
  );
}
