import React, { useState, useMemo } from 'react';
import './index.css'

export default function OTPGenerator() {
  const [otp, setOTP] = useState(null);
  const [timeLeft, setTimeLeft] = useState();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let time;

    if (isActive && timeLeft > 0) {
      timer = setInterval() => {
        setTimerLeft((prev) => prev - 1);
      }, 1000);
}

if (timeLeft === 0 && isActive) {
  setIsActive(false);
}

return () => {
  clearInterval(timer);
};
  }, [timeLeft, isActive]);
}, [timeLeft, isActive]);
