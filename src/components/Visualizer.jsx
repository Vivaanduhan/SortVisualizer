import React from "react";

const Bar = ({ height, maxArrayValue }) => {
  //calculate dymanic height logic from height prop

  let maxHeight = 400; // Maximum height for the visualization container
  let barHeight = (height / maxArrayValue) * maxHeight;

  return (
    <div
      className="bg-blue-500 h-[100%] w-2 hover:bg-blue-300"
      style={{ height: `${barHeight}px`, width: "100%" }}
      title={`${height}`}
    ></div>
  );
};

export const Visualizer = ({ array }) => {
  let barWidth = Math.min(15, 100 / array.length);
  return (
    <div className="h-[86%] bg-black p-16">
      <div className="h-full bg-white">
        <div className="h-full max-h-[520px] px-4 flex flex-row items-end gap-x-0 ">
          {array.map((item, index) => {
            return (
              <div
                key={index}
                style={{ width: `${barWidth}%` }}
                className="flex justify-center"
              >
                <Bar height={item} maxArrayValue={array.length} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
