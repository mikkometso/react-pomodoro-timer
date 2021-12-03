import React, { useState, useEffect } from 'react';
import Input from './components/Input/Input';

// Description (https://en.wikipedia.org/wiki/Pomodoro_Technique)
// The original technique has six steps:

// Decide on the task to be done.
// Set the pomodoro timer (typically for 25 minutes).[1]
// Work on the task.
// End work when the timer rings and take a short break (typically 5–10 minutes).[5]
// If you have fewer than three pomodoros, go back to Step 2 and repeat until you go through all three pomodoros.
// After three pomodoros are done, take the fourth pomodoro and then take a long break (traditionally 20 to 30 minutes). Once the long break is finished, return to step 2.

// MVP
// add input for user to define task ✅
// add start button ✅
// add logic to create timer ✅
// display countdown in ui ❌
// add timer end ui ❌

const App: React.FC = function () {
  const [task, setTask] = useState('');
  const [counterStarted, setCounterStarted] = useState(false);
  const [countdownTime, setCountdownTime] = useState<Date | null>(null);

  function countdownClock() {
    if (countdownTime !== null) {
      const timerID = setInterval(() => {
        // Get today's date and time
        const now = new Date().getTime();

        // Find the distance between now and the count down date
        const distance = countdownTime.getTime() - now;

        // Time calculations for minutes and seconds
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setCountdownTime(new Date(0, 0, 0, 0, minutes, seconds));

        // If the count down is finished, clear interval
        if (distance < 0) {
          setTask('Task Complete!');
          setCounterStarted(false);
          setCountdownTime(null);
          clearInterval(timerID);
        }
      }, 1000);
    }
  }

  const startCountdown = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (!counterStarted) {
      setCounterStarted(true);
      // Initialize the distance between now and the count down date
      const d = new Date();
      // d.setMinutes(d.getMinutes() + 25);
      d.setSeconds(d.getSeconds() + 15);
      setCountdownTime(d);
      return;
    }
    return;
  };

  useEffect(() => {
    const timerID = setInterval(() => countdownClock(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  }, [counterStarted]);

  return (
    <div className="App">
      <Input setTask={setTask} />
      <div>
        <p>
          It is
          {/* {currentDate.toLocaleTimeString()} o&apos;clock! */}
        </p>
        <p>
          Next task will be:
          {task}
        </p>
      </div>
      <button onClick={e => startCountdown(e)}>start</button>
      <p>Untill next brake:</p>
      <p>{countdownTime?.toLocaleTimeString()}</p>
    </div>
  );
};

export default App;
