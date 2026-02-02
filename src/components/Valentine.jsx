import React, { useState, useRef } from "react";
import ConfettiEffect from "./confettiEffect";
import HeartEffect from "./HeartEffect";
import BalloonEffect from "./BalloonEffect";
import HeartTrail from "./HeartTrail";

export default function Valentine({ onClose }) {
  const [accepted, setAccepted] = useState(null);
  const [showFanfare, setShowFanfare] = useState(false);
  const [noPos, setNoPos] = useState({ left: "50%", top: "60%" });
  const areaRef = useRef(null);

  const handleYes = () => {
    setAccepted(true);
    setShowFanfare(true);
  };

  const handleNo = () => {
    // If user actually clicks No (rare), record it and stop fanfare
    setAccepted(false);
    setShowFanfare(false);
  };

  const dodgeNo = () => {
    const area = areaRef.current;
    if (!area) return;
    const rect = area.getBoundingClientRect();
    const padding = 20; // keep button inside
    const maxX = Math.max(0, rect.width - 100 - padding);
    const maxY = Math.max(0, rect.height - 40 - padding);
    const left = Math.floor(Math.random() * maxX) + padding;
    const top = Math.floor(Math.random() * maxY) + padding;
    setNoPos({ left: `${left}px`, top: `${top}px` });
  };

  return (
    <div className="container" style={{ maxWidth: "700px" }}>
      <HeartTrail />
      <ConfettiEffect active={showFanfare} />
      <HeartEffect active={showFanfare} />
      <BalloonEffect active={showFanfare} />

      <div style={{ padding: 10 }}>
        <h1 style={{ fontSize: "3rem", color: "#d81b60" }}>Will you be my Valentine?</h1>
        <p style={{ fontSize: "1.2rem", color: "#444" }}>I made this just for you — full of hearts, confetti and silly charm.</p>

        {accepted === null ? (
          <div ref={areaRef} style={{ position: "relative", height: 220, marginTop: 18 }}>
            <button
              onClick={handleYes}
              style={{
                position: "absolute",
                left: "20%",
                top: "60%",
                transform: "translate(-50%,-50%)",
                background: "#ff4b5c",
                padding: "10px 18px",
                borderRadius: 10,
              }}
            >
              Yes 💖
            </button>

            <button
              onClick={handleNo}
              onMouseEnter={dodgeNo}
              onMouseMove={dodgeNo}
              style={{
                position: "absolute",
                left: noPos.left,
                top: noPos.top,
                transform: "translate(-50%,-50%)",
                background: "#ffb3c6",
                padding: "10px 18px",
                borderRadius: 10,
                transition: "left 0.15s ease, top 0.15s ease",
                cursor: "pointer",
              }}
            >
              No 😅
            </button>
          </div>
        ) : accepted ? (
          <div style={{ marginTop: 20 }}>
            <div style={{ fontSize: "4rem" }}>💘</div>
            <h2 style={{ color: "#ff4b5c" }}>You made my day! 🌹</h2>
            <p>Let's celebrate with a little surprise...</p>
            <div style={{ marginTop: 12 }}>
              <button onClick={onClose}>Hug 💞</button>
            </div>
          </div>
        ) : (
          <div style={{ marginTop: 20 }}>
            <h2 style={{ color: "#ff758f" }}>Oh — you said no 💌</h2>
            <p>That's okay — I'll keep sending little surprises.</p>
            <div style={{ marginTop: 12 }}>
              <button onClick={onClose}>Back</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

