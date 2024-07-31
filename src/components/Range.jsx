import React, { useEffect, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";

export const Range = ({ timerState, createArray }) => {
  const [number, setNumber] = useState(10);
  const debouncedNumber = useDebounce(number, 500);
  useEffect(() => {
    createArray(debouncedNumber);
  }, [debouncedNumber]);
  return (
    <>
      <h4 className="text-white font-thin">Array Size : {number}</h4>
      <div className="">
        <input
          type="range"
          min="10"
          className="text-yellow-500"
          max="500"
          disabled={timerState}
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
          style={{
            appearance: "none",
            width: "100%",
            height: "18px",
            borderRadius: "10px",
            background: "#d3d3d0",
            outline: "none",
            opacity: "0.7",
            transition: "opacity .2s",
            // WebkitAppearance: 'none'
          }}
        />
      </div>
    </>
  );
};
