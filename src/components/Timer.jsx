import React, { useEffect, useState } from "react";

export const Timer = ({ isActive = false }) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive]);


  return <div className="text-white text-center">{time}s</div>;
};
