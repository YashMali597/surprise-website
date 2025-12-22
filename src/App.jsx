import React, { useState } from "react";
import SurpriseCard from "./components/SurpriseCard";
import HeartEffect from "./components/HeartEffect";
import HeartTrail from "./components/HeartTrail";
import BalloonEffect from "./components/BalloonEffect";
import ConfettiEffect from "./components/confettiEffect";
import MiniSurprise from "./components/MiniSurprise";
import "./style.css";
//import musicFile from "./assets/music/surprise.mp3"; // optional

export default function App() {
  const [showSurprise, setShowSurprise] = useState(false);
  const [playMusic, setPlayMusic] = useState(false);

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
    </div>
  );
}
