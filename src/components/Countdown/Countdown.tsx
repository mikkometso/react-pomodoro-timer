import React from 'react';
import Button from '../Button/Button';
import { CountdownkWrapper } from './Countdown.styles';

interface Countdown {
  countdownTime: Date | null;
  setCountdownTime: React.Dispatch<React.SetStateAction<Date | null>>;
  counterStarted: boolean;
  setCounterStarted: React.Dispatch<React.SetStateAction<boolean>>;
}

const Countdown: React.FC<Countdown> = props => {
  const { countdownTime, setCountdownTime, counterStarted, setCounterStarted } = props;

  const startCountdown = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (!counterStarted) {
      setCounterStarted(true);
      // Initialize the distance between now and the count down date
      const d = new Date();
      d.setMinutes(d.getMinutes() + 25);
      // d.setSeconds(d.getSeconds() + 60);
      setCountdownTime(d);
      return;
    }
    return;
  };
  return (
    <CountdownkWrapper>
      <Button onClick={e => startCountdown(e)} text="start" rounded />
      <p>Untill next brake:</p>
      <p>{`${countdownTime?.getMinutes() ? countdownTime?.getMinutes() : '00'}:${
        countdownTime?.getSeconds() ? countdownTime?.getSeconds() : '00'
      }`}</p>
    </CountdownkWrapper>
  );
};

export default Countdown;
