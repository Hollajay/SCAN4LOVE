import { useEffect, useState } from 'react';

const Countdown = ({ targetDate }: { targetDate: string }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

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
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center ">
      <h2 className="text-2xl font-bold mb-4">Countdown to the Big Day</h2>
      <div className="flex justify-center items-center gap-2 text-secondary text-lg font-mono">
        <div className="flex flex-col items-center bg-primary p-2 rounded-2xl ">
          <span className="text-3xl font-bold">{timeLeft.days}</span>
          <span className='text-sm'>Days</span>
        </div>
        <span className='text-3xl text-tertiary'>:</span>
        <div className="flex flex-col items-center  bg-primary p-2 rounded-2xl ">
          <span className="text-3xl font-bold">{timeLeft.hours}</span>
          <span className='text-sm'>Hrs</span>
        </div>
        <span className='text-3xl text-tertiary'>:</span>
        <div className="flex flex-col items-center  bg-primary p-2 rounded-2xl ">
          <span className="text-3xl font-bold">{timeLeft.minutes}</span>
          <span className='text-sm'>Min</span>
        </div>
        <span className='text-3xl text-tertiary'>:</span>
        <div className="flex flex-col items-center  bg-primary p-2 rounded-2xl ">
          <span className="text-3xl font-bold">{timeLeft.seconds}</span>
          <span className='text-sm'>Sec</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
