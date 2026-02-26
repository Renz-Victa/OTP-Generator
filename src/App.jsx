import React, { useState, useMemo, useEffect } from 'react';
import './index.css'

export default function OTPGenerator() {
  const [otp, setOtp] = useState(null);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timer;

    if (isActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
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
        {!isActive && otp && timeLeft === 0 && "OTP expired. Click the button to generate a new OTP."}
      </p>

      <button
        id="generate-otp-button"
        onClick={generateOTP}
        disabled={isActive}
      >
        Generate OTP
      </button>
    </div>
  );
}