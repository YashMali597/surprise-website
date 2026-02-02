import React, { useState } from "react";
import SurpriseCard from "./components/SurpriseCard";
import HeartEffect from "./components/HeartEffect";
import HeartTrail from "./components/HeartTrail";
import BalloonEffect from "./components/BalloonEffect";
import ConfettiEffect from "./components/confettiEffect";
import MiniSurprise from "./components/MiniSurprise";
import Valentine from "./components/Valentine";
import "./style.css";
//import musicFile from "./assets/music/surprise.mp3"; // optional

export default function App() {
  const [showSurprise, setShowSurprise] = useState(false);
  const [playMusic, setPlayMusic] = useState(false);
  const [showValentine, setShowValentine] = useState(false);

  const handleClick = () => {
    setShowSurprise(true);
    setPlayMusic(true);
  };

  return (
    <div className="container">
      
      <HeartTrail />
      <ConfettiEffect active={showSurprise} />
      <HeartEffect active={showSurprise} />
      <BalloonEffect active={showSurprise} />

      <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '12px' }}>
        <button onClick={() => { setShowValentine(false); setShowSurprise(false); }}>Home</button>
        <button onClick={() => setShowValentine(true)}>Be My Valentine 💘</button>
      </div>

      {!showValentine ? (
        <>
          <h1>Hey Sweetheart! 💖</h1>
          <p>I have a surprise for you… Click below!</p>

          {!showSurprise ? (
            <button onClick={handleClick}>Reveal Surprise 💌</button>
          ) : (
            <>
              <MiniSurprise />
              <SurpriseCard />
            </>
          )}
        </>
      ) : (
        <Valentine onClose={() => setShowValentine(false)} />
      )}
    </div>
  );
}
