import React, { useState, useMemo } from 'react';
import './index.css'

export default function OTPGenerator() {
  const [otp, setOTP] = useState(null);
  const [timeLeft, setTimeLeft] = useState();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let time;

    if (isActive && timeLeft > 0) {
      timer = setInterval(() => {
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

  const generateOTP = () => {
    const newOtp = Math.floor(100000 + Math.random() * 900000);
    setOtp(newOtp);
    setTimeLeft(5);
    setIsActive(true);
  };

  return (
    <div className="container">
      <h1 id="otp-title">OTP Generator</h1>

      <h2 id="otp-display">
        {otp ? otp : "Click 'Generate OTP' to get a code"}
      </h2>

      <p id="otp-timer" aria-live="polite">
        {isActive && timeLeft > 0 && `Expires in: ${timeLeft} seconds`}
      </p>
    </div>
  )