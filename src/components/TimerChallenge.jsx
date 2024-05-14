import { useRef, useState } from "react";
let timer;

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef()
  const [timerExpired, setTimerExpire] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);
  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpire(true);
    }, targetTime * 1000);
    setTimerStarted(true);
  }

  function handelStop() {
    clearTimeout(timer.current);
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You lost!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={timerStarted ? handelStop : handleStart}>
          {timerStarted ? "Stop" : "Start"} Challenge
        </button>
      </p>
      <p className={timerStarted ? "active" : undefined}>
        {timerStarted ? "Timer is running..." : "Timer inactive"}
      </p>
    </section>
  );
}
