import React, { useEffect, useState } from "react";

export default function BalloonEffect({ active }) {
  const [balloons, setBalloons] = useState([]);

  useEffect(() => {
    if (!active) return;
    const interval = setInterval(() => {
      setBalloons(prev => [
        ...prev,
        { id: Date.now(), x: Math.random() * window.innerWidth }
      ]);
    }, 500);

    return () => clearInterval(interval);
  }, [active]);

  return (
    <>
      {balloons.map(balloon => (
        <div
          key={balloon.id}
          className="balloon"
          style={{ left: balloon.x, top: "100vh" }}
        >
          🎈
        </div>
      ))}
    </>
  );
}
