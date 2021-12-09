import React, { useState, useEffect } from 'react';
import './styles.css';
import styled from 'styled-components';
import Input from './components/Input/Input';
import Countdown from './components/Countdown/Countdown';
import DisplayedTask from './components/DisplayedTask/DisplayedTask';

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
// display countdown in ui ✅
// add timer end ui ❌

const App: React.FC = function () {
  const [task, setTask] = useState('');
  const [counterStarted, setCounterStarted] = useState(false);
  const [countdownTime, setCountdownTime] = useState<Date | null>(null);

  const StyledAppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 3rem;
  `;

  const countdownClock = () => {
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
  };

  useEffect(() => {
    const timerID = setInterval(() => countdownClock(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  }, [counterStarted]);

  return (
    <StyledAppWrapper>
      {/* TODO: add edit/cancel option so that user would be able to alter the task in hand */}
      {!task && <Input setTask={setTask} />}
      {task && <DisplayedTask task={task} />}
      <Countdown
        countdownTime={countdownTime}
        setCountdownTime={setCountdownTime}
        counterStarted={counterStarted}
        setCounterStarted={setCounterStarted}
      />
    </StyledAppWrapper>
  );
};

export default App;
