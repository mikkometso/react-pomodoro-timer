import React, { useState } from "react";
import Input from "./components/Input/Input";

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
// add start button ❌
// add logic to create timer ❌
// display countdown in ui ❌
// add timer end ui ❌

function App() {
  const [task, setTask] = useState("");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [countdown, setCountdown] = useState<Date>(new Date());

  const onCLickHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const d = new Date();
    d.setMinutes(d.getMinutes() + 0.9);
    setCountdown(d);
  };

  React.useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setCurrentDate(new Date());
  }

  if (currentDate < countdown) {
    console.log("pienempi!");
  } else {
    console.log("suurempi!");
  }

  return (
    <div className="App">
      <Input setTask={setTask} />
      <div>
        <p>It is {currentDate.toLocaleTimeString()} o'clock!</p>
        <p>Next task will be: {task}</p>
      </div>
      <button onClick={(e) => onCLickHandler(e)}>start</button>
      <p>Untill next brake:</p>
      <p>{countdown?.toLocaleTimeString()}</p>
    </div>
  );
}

export default App;
