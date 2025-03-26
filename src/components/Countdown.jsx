import { useState, useEffect } from "react";

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Aseguramos que la fecha tenga una hora predeterminada (23:59:59)
    const target = new Date(targetDate);
    target.setHours(23, 59, 59); // Configura la hora

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const targetTime = target.getTime();
      const difference = targetTime - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div>
      <h2>Nos quedan para vernos:</h2>
      <p>
        {timeLeft.days} días, {timeLeft.hours} horas, {timeLeft.minutes} minutos, {timeLeft.seconds} segundos
      </p>
    </div>
  );
};

export default Countdown;
