import React, { useState } from "react";

const surprises = [
  "💖 Every moment with you feels like magic",
  "🎉 Surprise! Love you 🥰",
  "🌸 You make ordinary days feel extraordinary ☀️",
  "✨ Being with you feels like home",
  "✨ You are my peace!",
  "🎉 I miss you so much 🥰",
  "💖 You make my world a better place",
  "💌 Hugs and kisses for you 😘",
  "🥰 You are my sunshine on a cloudy day",
    "🌟 Forever grateful to have you in my life",
];

export default function MiniSurprise() {
  const [message, setMessage] = useState("🎉💖🥰");

  const handleClick = () => {
    const random = surprises[Math.floor(Math.random() * surprises.length)];
    setMessage(random);
    new Audio("https://www.soundjay.com/button/beep-07.mp3").play(); // optional sound
  };

  return (
    <div 
      onClick={handleClick} 
      style={{ cursor: "pointer", fontSize: "4rem", marginBottom: "10px" }}
    >
      {message}
    </div>
  );
}
