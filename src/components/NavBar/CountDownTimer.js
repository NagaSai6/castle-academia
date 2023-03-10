import React from 'react';
import DateTimeDisplay from './DateTimeDisplay';
import { useCountdown } from '../../hooks/useCountdown';

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="countdown-link"
      >
        <p style={{color : "#FBB034"}} className="navbar_counter_desc">Next Batch Starts in :</p>
        <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
        <p style={{color : "#FBB034"}}>:</p>
        <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
        <p  style={{color : "#FBB034"}}>:</p>
        <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
        <p style={{color : "#FBB034"}}>:</p>
        <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
      </a>
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;