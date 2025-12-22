import React from "react";
import Confetti from "react-confetti";

export default function ConfettiEffect({ active }) {
  if (!active) return null;

  return <Confetti numberOfPieces={300} recycle={false} gravity={0.2} wind={0.01} />;
}
