import { useState, useEffect } from 'react';

const Countdown = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2100-01-01T00:00:00') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const formatTimeLeft = () => {
    return `${timeLeft.days || 0}:${timeLeft.hours || 0}:${timeLeft.minutes || 0}:${timeLeft.seconds || 0}`;
  };

  return (
    <div className="flex flex-col items-center gap-2.5 mb-14">
      <div className="text-4xl text-center mb-10 md:text-7xl ">
        {formatTimeLeft()} until the grand opening
      </div>
      <div className="text-2xl text-center mt-2 md:text-4xl">
        Join the waiting list and embrace the revolution
      </div>
    </div>
  );
};

export default Countdown;
